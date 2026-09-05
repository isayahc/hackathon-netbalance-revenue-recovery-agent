"use client";

import { useRef, useState } from "react";
import {
  ArrowCounterClockwiseIcon,
  CheckCircleIcon,
  CircleNotchIcon,
  PlayIcon,
  PulseIcon,
  TargetIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";

import type { CompletionCondition } from "@/config/demo";
import { atlasScenario } from "@/config/scenario";
import { evaluateCompletion, type RecoveryAnalysis } from "@/lib/agent";
import type { EvidenceVerificationResult, PrismStage } from "@/lib/prism";

type RunEvent = {
  id: string;
  label: string;
  detail: string;
  status: "passed" | "info" | "error";
};

type RecoveryRunnerProps = {
  completionCondition: CompletionCondition;
  targetRecoveryAmount: number;
};

type RunOutcome = "technical-only" | "recovered" | null;
type PrismStatus = "pending" | "connected" | "not-configured" | "degraded";

const STEP_DELAY_MS = 450;

const wait = (signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(resolve, STEP_DELAY_MS);
    signal.addEventListener("abort", () => {
      window.clearTimeout(timeout);
      reject(new DOMException("Run reset", "AbortError"));
    }, { once: true });
  });

async function jsonRequest<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? `Request failed with status ${response.status}.`);
  return body as T;
}

export function RecoveryRunner({ completionCondition, targetRecoveryAmount }: RecoveryRunnerProps) {
  const [events, setEvents] = useState<RunEvent[]>([]);
  const [state, setState] = useState<"ready" | "running" | "complete" | "error">("ready");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<RunOutcome>(null);
  const [prismStatus, setPrismStatus] = useState<PrismStatus>("pending");
  const controllerRef = useRef<AbortController | null>(null);

  const append = (event: RunEvent) => setEvents((current) => [...current, event]);

  const reset = () => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setEvents([]);
    setSessionId(null);
    setOutcome(null);
    setPrismStatus("pending");
    setState("ready");
  };

  const run = async () => {
    const controller = new AbortController();
    controllerRef.current = controller;
    setEvents([]);
    setOutcome(null);
    setPrismStatus("pending");
    setState("running");
    const runSessionId = `${atlasScenario.caseId}-${crypto.randomUUID().slice(0, 8)}`;
    setSessionId(runSessionId);

    const trace = async (
      stage: PrismStage,
      output: string,
      metadata?: Record<string, string | number | boolean>,
    ) => {
      try {
        const response = await fetch("/api/prism/trace", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: runSessionId, stage, output, metadata }),
          signal: controller.signal,
        });
        const result = (await response.json()) as { sent?: boolean };
        if (!response.ok) throw new Error("Trace delivery failed.");
        setPrismStatus(result.sent ? "connected" : "not-configured");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") throw error;
        setPrismStatus("degraded");
      }
    };

    try {
      const analysis = await jsonRequest<RecoveryAnalysis>("/api/agent/analyze", {
        method: "POST",
        signal: controller.signal,
      });

      if (!analysis.eligible || !analysis.claimPackage) {
        throw new Error(analysis.blockers.join(" ") || "The case is not eligible for automatic recovery.");
      }

      const verifyEvidence = (powerFailoverReport?: {
        backupPowerActivated: boolean;
        serviceOperational: boolean;
        slaBreached: boolean;
      }) => jsonRequest<EvidenceVerificationResult>("/api/prism/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: atlasScenario.caseId,
          customer: atlasScenario.customer,
          incident: atlasScenario.incident,
          deductionAmount: atlasScenario.deductionAmount,
          outageConfirmed: true,
          powerFailoverReport,
        }),
        signal: controller.signal,
      });

      const initialVerification = await verifyEvidence();
      append({ id: "prism-evidence-insufficient", label: "PRISM evidence gate blocked action", detail: `${initialVerification.reason} Missing evidence: ${initialVerification.missingEvidence.join(", ")}.`, status: "info" });
      await trace("evidence_verification", `Evidence insufficient. Missing evidence: ${initialVerification.missingEvidence.join(", ")}.`, { evidence_sufficient: false, missing_evidence: initialVerification.missingEvidence.join(", ") });
      await wait(controller.signal);

      const completeVerification = await verifyEvidence({
        backupPowerActivated: true,
        serviceOperational: true,
        slaBreached: false,
      });
      if (!completeVerification.decisionSupported) {
        throw new Error(completeVerification.reason);
      }
      append({ id: "prism-evidence-sufficient", label: "PRISM evidence gate passed", detail: "Backup power activated, service remained operational, and the SLA was not breached.", status: "passed" });
      await trace("evidence_verification", completeVerification.reason, { evidence_sufficient: true, decision_supported: true, decision: completeVerification.decision });
      await wait(controller.signal);

      await trace("document_ingestion", "Outage records parsed and normalized into sourced fields.", { documents_parsed: 8 });
      await trace("evidence_reconciliation", "Retailer records 1,220 cases; ASN, BOL, and signed POD verify 1,460 delivered.", { retailer_cases: 1220, delivered_cases: 1460, disputed_cases: 240 });
      await trace("dispute_decision", "The $42,800 shortage deduction is eligible for dispute with high confidence.", { eligible: true, decision: "dispute" });

      for (const step of analysis.reasoning) {
        append({ id: step.id, label: step.label, detail: step.detail, status: step.status === "passed" ? "passed" : "error" });
        await wait(controller.signal);
      }

      append({ id: "claim-package", label: "Claim package assembled", detail: `${analysis.claimPackage.evidenceReferences.length} supporting documents attached.`, status: "passed" });
      await wait(controller.signal);

      const claim = await jsonRequest<{ claim_id: string; status: string; amount: number }>("/api/northstar/claims", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          case_id: analysis.claimPackage.caseId,
          invoice: analysis.claimPackage.invoiceNumber,
          po: analysis.claimPackage.poNumber,
          deduction_amount: analysis.claimPackage.deductionAmount,
          evidence_references: analysis.claimPackage.evidenceReferences,
        }),
        signal: controller.signal,
      });
      append({ id: "claim-submitted", label: "Claim submitted", detail: `${claim.claim_id} · $${claim.amount.toLocaleString()}`, status: "passed" });
       await trace("claim_submission", `Atlas Cloud accepted claim ${claim.claim_id} for $${claim.amount.toLocaleString()}.`, { claim_id: claim.claim_id, http_success: true });
      await wait(controller.signal);

      const submissionCompletion = evaluateCompletion(
        completionCondition,
        { claimSubmitted: true },
        targetRecoveryAmount,
      );
      if (submissionCompletion.complete) {
        await trace("completion_evaluation", "Agent stopped after claim submission. Technical action succeeded; business recovery remains $0.", { completion_condition: completionCondition, technical_success: true, business_goal_achieved: false, recovered_amount: 0 });
        append({
          id: "agent-complete",
          label: "Agent marked case complete",
          detail: "The claim API succeeded, but no recovery outcome was verified.",
          status: "info",
        });
        setOutcome("technical-only");
        setState("complete");
        return;
      }

      const review = await jsonRequest<{ status: string; request: string }>(`/api/northstar/claims/${claim.claim_id}`, { signal: controller.signal });
       append({ id: "additional-request", label: "Atlas Cloud requested additional evidence", detail: review.request, status: "info" });
       await trace("retailer_response", `Atlas Cloud status: ${review.status}. ${review.request}`, { retailer_status: review.status });
      await wait(controller.signal);

      await jsonRequest(`/api/northstar/claims/${claim.claim_id}/evidence`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
          document: "Power_Failover_Report.pdf",
          failover_status: "Backup power activated",
          service_status: "Operational",
          sla_breached: false,
        }),
        signal: controller.signal,
      });
       append({ id: "additional-evidence", label: "Power failover report submitted", detail: "Backup power activation, operational service, and no SLA breach confirmed.", status: "passed" });
       await trace("additional_evidence_response", "Submitted the Power failover report; backup power activated and service remained operational.", { evidence_verified: true, sla_breached: false });
      await wait(controller.signal);

      const approval = await jsonRequest<{ status: string; approved_amount: number }>(`/api/northstar/claims/${claim.claim_id}?evidence_submitted=true`, { signal: controller.signal });
       append({ id: "claim-approved", label: "Atlas Cloud approved claim", detail: `$${approval.approved_amount.toLocaleString()} approved.`, status: "passed" });
      await wait(controller.signal);

      const settlement = await jsonRequest<{ status: string; amount: number; reference: string }>(`/api/northstar/claims/${claim.claim_id}/settlement`, { signal: controller.signal });
      const verifiedCompletion = evaluateCompletion(
        completionCondition,
        { claimSubmitted: true, settlementStatus: settlement.status, approvedAmount: settlement.amount },
        targetRecoveryAmount,
      );
      if (!verifiedCompletion.complete) {
        throw new Error("Settlement did not match the target recovery amount.");
      }
      append({ id: "outcome-verified", label: `$${verifiedCompletion.recoveredAmount.toLocaleString()} RECOVERED`, detail: `Outcome verified · ${settlement.reference}`, status: "passed" });
      await trace("outcome_verification", `Verified $${verifiedCompletion.recoveredAmount.toLocaleString()} recovery under settlement ${settlement.reference}.`, { settlement_reference: settlement.reference, recovered_amount: verifiedCompletion.recoveredAmount });
      await trace("completion_evaluation", "Business goal achieved. Approved recovery equals the $42,800 target.", { completion_condition: completionCondition, technical_success: true, business_goal_achieved: true, recovered_amount: verifiedCompletion.recoveredAmount });
      setOutcome("recovered");
      setState("complete");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      append({ id: "run-error", label: "Recovery run stopped", detail: error instanceof Error ? error.message : "Unexpected error.", status: "error" });
      setState("error");
    } finally {
      controllerRef.current = null;
    }
  };

  return (
    <div className="runner">
      <section className="runner-main panel">
        <div className="runner-heading">
          <div><h2>Recovery workflow</h2><p>Case NB-10482 · Northstar Retail</p></div>
          <div className="runner-controls">
            <button className="reset-action" type="button" onClick={reset} disabled={state === "ready"}><ArrowCounterClockwiseIcon size={15} /> Reset</button>
            <button className="primary-action" type="button" onClick={run} disabled={state === "running"}>
              {state === "running" ? <CircleNotchIcon size={15} className="spin" /> : <PlayIcon size={15} weight="fill" />}
              {state === "running" ? "Running…" : state === "complete" ? "Run again" : "Run agent"}
            </button>
          </div>
        </div>
        {sessionId && <p className="session-id"><span>Session · {sessionId}</span><span className={`prism-state ${prismStatus}`}>PRISM · {prismStatus.replace("-", " ")}</span></p>}
        {events.length > 0 ? (
          <div className="live-run" aria-live="polite">
            <div className="live-run-heading"><strong>Agent activity</strong><span>{state}</span></div>
            <ol>
              {events.map((event) => (
                <li key={event.id} className={event.status}>
                  <span className={`event-mark ${event.status}`} aria-hidden="true">
                    {event.status === "passed" ? <CheckCircleIcon size={21} weight="fill" /> : <WarningCircleIcon size={21} weight="fill" />}
                  </span>
                  <div><strong>{event.label}</strong><p>{event.detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="empty-activity"><div><PulseIcon size={34} weight="duotone" /><h3>Ready to investigate</h3><p>Run the agent to reconcile all eight documents and execute the recovery workflow.</p></div></div>
        )}
      </section>
      <aside className="runner-side">
        <section className="mode-card panel">
          <p className="overline">Completion condition</p>
          <strong className={`mode-value ${completionCondition === "claim_submitted" ? "baseline" : "improved"}`}><TargetIcon size={18} weight="duotone" /> {completionCondition === "claim_submitted" ? "Claim submitted" : "Recovery verified"}</strong>
          <p>{completionCondition === "claim_submitted" ? "Baseline mode stops after the API succeeds." : "Improved mode continues until the target amount is verified."}</p>
        </section>
        {outcome && (
          <section className={`run-outcome panel ${outcome === "recovered" ? "recovered" : ""}`} role="status">
            <span>{outcome === "technical-only" ? "Outcome not verified" : "Outcome verified"}</span>
            <h3>{outcome === "technical-only" ? "Business goal not achieved" : "Revenue recovered"}</h3>
            <strong className="outcome-amount">{outcome === "technical-only" ? "$0 recovered" : `$${targetRecoveryAmount.toLocaleString()} recovered`}</strong>
             <p>{outcome === "technical-only" ? "The claim was submitted, but the agent stopped before customer approval." : "Atlas Cloud approved the claim and the target amount matches."}</p>
          </section>
        )}
      </aside>
    </div>
  );
}
