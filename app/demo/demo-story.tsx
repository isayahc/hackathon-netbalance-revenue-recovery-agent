"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CircleIcon,
  CodeIcon,
  EnvelopeSimpleIcon,
  FilePdfIcon,
  LightbulbFilamentIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
  PlayIcon,
  SealCheckIcon,
  SparkleIcon,
  TargetIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";

const scenes = [
  { eyebrow: "Intake", title: "Remittance received", short: "Email", caption: "A new remittance arrives with a $42,800 short payment.", icon: EnvelopeSimpleIcon },
  { eyebrow: "Intake", title: "Case created", short: "Case", caption: "The payment is matched and the deduction becomes a recovery case.", icon: SparkleIcon },
  { eyebrow: "Agent run", title: "Agent investigating", short: "Investigate", caption: "The agent reads eight documents and reconstructs the shipment.", icon: MagnifyingGlassIcon },
  { eyebrow: "Agent run", title: "Evidence and discrepancy", short: "Evidence", caption: "Signed delivery evidence contradicts Northstar’s receiving record.", icon: FilePdfIcon },
  { eyebrow: "Initial run", title: "Agent submits claim", short: "Submit", caption: "A complete dispute package is sent to the retailer portal.", icon: PaperPlaneTiltIcon },
  { eyebrow: "Initial run", title: "Outcome not verified", short: "Stops", caption: "The API succeeded, so the agent stops—even though recovery is still $0.", icon: WarningCircleIcon },
  { eyebrow: "PRISM", title: "Goal not achieved", short: "PRISM", caption: "PRISM separates technical success from the business outcome.", icon: TargetIcon },
  { eyebrow: "GIDE", title: "Agent updated", short: "GIDE", caption: "GIDE changes the completion condition from submission to verified recovery.", icon: CodeIcon },
  { eyebrow: "Final run", title: "Outcome verified", short: "Recovered", caption: "The agent follows through and verifies the full $42,800 recovery.", icon: SealCheckIcon },
] as const;

const activity = [
  ["Remittance PDF parsed", "Payment matched to INV-10482", "Short payment detected: $42,800"],
  ["Case NB-10482 created", "Northstar Retail identified", "Recovery target set to $42,800"],
  ["Reading remittance advice", "Matching invoice and payment", "Retrieving shipment evidence", "Analyzing receiving report…"],
  ["Invoice confirms 1,460 cases", "ASN confirms 1,460 cases", "Signed POD confirms delivery", "Receiving report lists only 1,220"],
  ["Policy window confirmed", "Five supporting files attached", "Claim NS-CL-88921 submitted"],
] as const;

function ActivityList({ items, activeLast = false }: { items: readonly string[]; activeLast?: boolean }) {
  return <ol className="story-activity">{items.map((item, index) => <li key={item} className={activeLast && index === items.length - 1 ? "active" : "done"}>{activeLast && index === items.length - 1 ? <CircleIcon size={18} weight="bold" /> : <CheckCircleIcon size={18} weight="fill" />}<span>{item}</span><small>{`9:${12 + index} AM`}</small></li>)}</ol>;
}

function Metrics({ recovered = false }: { recovered?: boolean }) {
  return <div className="story-metrics"><div><span>Invoiced</span><strong>$184,200</strong></div><div><span>Received</span><strong>$141,400</strong></div><div className={recovered ? "success" : "risk"}><span>{recovered ? "Recovered" : "To recover"}</span><strong>$42,800</strong></div></div>;
}

function SceneContent({ scene }: { scene: number }) {
  if (scene === 0) return <div className="story-email"><div className="email-icon"><EnvelopeSimpleIcon size={28} /></div><div><div className="email-meta"><strong>remittance@northstar-retail.com</strong><span>Today, 9:12 AM</span></div><p>Payment Remittance — INV-10482</p><div className="attachment"><FilePdfIcon size={23} weight="fill" /><span><strong>Remittance_Advice_INV-10482.pdf</strong><small>245 KB</small></span></div></div></div>;
  if (scene === 1) return <div><div className="story-case-heading"><div><span className="case-id">NB-10482</span><h3>Northstar Retail</h3><p>PO-77191 · DC 027 · Atlanta, GA</p></div><span className="story-status blue">Investigating</span></div><Metrics /><ActivityList items={activity[1]} /></div>;
  if (scene === 2) return <div className="story-agent"><div className="agent-orbit"><MagnifyingGlassIcon size={30} weight="duotone" /></div><div><h3>Agent activity</h3><ActivityList items={activity[2]} activeLast /></div></div>;
  if (scene === 3) return <div className="evidence-view"><div className="evidence-files"><p>Source documents</p>{["Invoice_INV-10482.pdf", "ASN_PO-77191.pdf", "Bill_of_Lading_DC027.pdf", "Proof_of_Delivery_DC027.pdf", "Northstar_Receiving_Report.pdf"].map((file, i) => <div className={i === 4 ? "selected" : ""} key={file}><FilePdfIcon size={17} weight="fill" /> {file}</div>)}</div><div className="evidence-sheet"><span>Northstar Retail</span><h3>Receiving report</h3><dl><div><dt>Expected cases</dt><dd>1,460</dd></div><div><dt>Received cases</dt><dd>1,220</dd></div><div><dt>Variance</dt><dd>−240</dd></div></dl><p>Shortage deduction <strong>$42,800</strong></p></div></div>;
  if (scene === 4) return <div className="claim-submit"><ActivityList items={activity[4]} /><div className="claim-ticket"><div><CheckCircleIcon size={24} weight="fill" /><span><strong>Claim submitted</strong><small>Claim ID: NS-CL-88921</small></span></div><time>9:16 AM</time></div></div>;
  if (scene === 5) return <div><div className="story-case-heading"><div><span className="case-id">NB-10482</span><h3>Northstar Retail</h3></div><span className="story-status amber">Waiting for outcome</span></div><Metrics /><div className="stop-alert"><WarningCircleIcon size={28} weight="fill" /><div><strong>Claim submitted, but outcome not verified</strong><p>The agent treated API success as task completion.</p></div></div><div className="outcome-zero"><span>Verified recovery</span><strong>$0</strong></div></div>;
  if (scene === 6) return <div className="prism-console"><header><div className="console-brand"><SparkleIcon size={18} weight="fill" /> PRISM</div><span>Goal not achieved</span></header><div className="console-grid"><ol>{["extract_documents", "analyze_deduction", "submit_claim", "verify_outcome"].map((item, i) => <li key={item} className={i === 3 ? "failed" : "passed"}>{i === 3 ? <WarningCircleIcon size={17} weight="fill" /> : <CheckCircleIcon size={17} weight="fill" />}<code>{i + 1}. {item}</code><small>{i === 3 ? "Skipped" : "Success"}</small></li>)}</ol><dl><div><dt>Goal</dt><dd>Recover $42,800</dd></div><div><dt>Claim submitted</dt><dd>Yes</dd></div><div><dt>Verified recovery</dt><dd>$0</dd></div><div><dt>Goal achieved</dt><dd className="no">No</dd></div></dl></div></div>;
  if (scene === 7) return <div className="gide-console"><header><div className="console-brand"><LightbulbFilamentIcon size={18} weight="fill" /> GIDE</div></header><div className="gide-note">The agent currently treats claim submission as success. Continue until the approved recovery equals the target amount.</div><div className="code-change"><p>Completion condition</p><div><span className="removed">− claim_submitted</span><span className="added">+ recovery_verified</span></div></div><div className="files-changed"><span>agent/recovery.ts</span><small>Modified</small><span>agent/flow.ts</span><small>Modified</small><span>types.ts</span><small>Modified</small></div></div>;
  return <div><div className="story-case-heading"><div><span className="case-id">NB-10482</span><h3>Northstar Retail</h3><p>Claim NS-CL-88921</p></div><span className="story-status green">Completed</span></div><Metrics recovered /><div className="success-alert"><SealCheckIcon size={30} weight="fill" /><div><strong>Outcome verified</strong><p>Northstar approved the claim and the full target was recovered.</p></div></div><div className="final-details"><span>Settlement</span><strong>STL-20491</strong><span>Recovered</span><strong>$42,800</strong></div></div>;
}

export function DemoStory() {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (scene === scenes.length - 1) setPlaying(false);
      else setScene((current) => current + 1);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [playing, scene]);

  const current = scenes[scene];
  const CurrentIcon = current.icon;

  return <div className="screen demo-screen">
    <header className="demo-header"><div><p className="breadcrumb">Guided walkthrough</p><h1>From remittance to recovered revenue</h1><p className="screen-description">See where the initial agent stops—and how PRISM and GIDE close the loop.</p></div><button type="button" className="autoplay" onClick={() => setPlaying((value) => !value)}><PlayIcon size={14} weight="fill" /> {playing ? "Pause story" : "Play story"}</button></header>
    <nav className="story-rail" aria-label="Demo chapters">{scenes.map((item, index) => <button key={item.short} type="button" className={index === scene ? "current" : index < scene ? "visited" : ""} onClick={() => { setScene(index); setPlaying(false); }} aria-label={`Step ${index + 1}: ${item.title}`}><span>{index < scene ? <CheckCircleIcon size={19} weight="fill" /> : index + 1}</span><small>{item.short}</small></button>)}</nav>
    <div className={`story-stage stage-${scene}`}>
      <div className="story-stage-top"><div className="scene-title"><span className="scene-icon"><CurrentIcon size={23} weight="duotone" /></span><div><p>{current.eyebrow} · Step {scene + 1} of {scenes.length}</p><h2>{current.title}</h2></div></div><span className="case-chip">Northstar · INV-10482</span></div>
      <div className="scene-body"><SceneContent scene={scene} /></div>
      <div className="scene-caption"><span>{String(scene + 1).padStart(2, "0")}</span><p>{current.caption}</p></div>
    </div>
    <footer className="story-controls"><button type="button" onClick={() => { setScene((s) => Math.max(0, s - 1)); setPlaying(false); }} disabled={scene === 0}><ArrowLeftIcon size={16} /> Previous</button><p>{scene < 5 ? "Initial agent run" : scene < 8 ? "Learning loop" : "Closed-loop recovery"}</p><button type="button" className="next" onClick={() => { setScene((s) => Math.min(scenes.length - 1, s + 1)); setPlaying(false); }} disabled={scene === scenes.length - 1}>{scene === 7 ? "Run improved agent" : "Next step"} <ArrowRightIcon size={16} /></button></footer>
  </div>;
}
