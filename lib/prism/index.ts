export const PRISM_AGENT_ID = "netbalance-revenue-recovery-agent";
export const PRISM_MODEL = "deterministic-recovery-workflow-v1";

export type PrismStage =
  | "document_ingestion"
  | "evidence_reconciliation"
  | "dispute_decision"
  | "claim_submission"
  | "retailer_response"
  | "additional_evidence_response"
  | "outcome_verification"
  | "completion_evaluation";

export type PrismTraceEvent = {
  sessionId: string;
  stage: PrismStage;
  output: string;
  latencyMs?: number;
  metadata?: Record<string, string | number | boolean>;
};

type PrismConfig = {
  host: string;
  projectId: string;
  apiKey: string;
};

export function getPrismConfig(): PrismConfig | null {
  const host = process.env.PRISMTRACE_HOST;
  const projectId = process.env.PRISMTRACE_PROJECT_ID;
  const apiKey = process.env.PRISMTRACE_API_KEY;
  return host && projectId && apiKey ? { host: host.replace(/\/$/, ""), projectId, apiKey } : null;
}

export function buildPrismTracePayload(event: PrismTraceEvent, projectId: string) {
  const metadata: Record<string, string | number | boolean> = {
    case_id: "NB-10482",
    retailer: "Northstar Retail",
    invoice: "INV-10482",
    po: "PO-77191",
    distribution_center: "DC 027",
    goal_amount: 42_800,
    scenario: "multi_dc_shortage_deduction",
    stage: event.stage,
    ...event.metadata,
  };

  return {
    project_id: projectId,
    model: PRISM_MODEL,
    input_messages: [
      {
        role: "user",
        content: `Recover $42,800 for case NB-10482. Execute stage: ${event.stage}.`,
      },
    ],
    output_message: event.output,
    latency_ms: event.latencyMs ?? 0,
    trace_id: `${event.sessionId}:${event.stage}`,
    session_id: event.sessionId,
    agent_id: PRISM_AGENT_ID,
    agent_name: "Netbalance Revenue Recovery Agent",
    metadata,
  };
}

export async function emitPrismTrace(event: PrismTraceEvent) {
  const config = getPrismConfig();
  if (!config) return { sent: false as const, reason: "not_configured" as const };

  const response = await fetch(`${config.host}/api/traces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-PRISMtrace-Key": config.apiKey,
    },
    body: JSON.stringify(buildPrismTracePayload(event, config.projectId)),
  });

  if (!response.ok) {
    throw new Error(`PRISM ingest returned ${response.status}: ${await response.text()}`);
  }

  const trace = (await response.json()) as { id?: string };
  return { sent: true as const, traceId: trace.id ?? null };
}
