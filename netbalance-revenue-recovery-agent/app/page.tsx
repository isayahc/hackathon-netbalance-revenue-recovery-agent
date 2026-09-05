import { ArrowRightIcon, BuildingsIcon, CheckCircleIcon, FileTextIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { atlasScenario } from "@/config/scenario";
import { buildNormalizedCaseEvidence } from "@/lib/document-ingestion";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default async function CasesPage() {
  const { documents, evidence } = await buildNormalizedCaseEvidence();
  return (
    <div className="screen">
      <header className="screen-header">
        <div><p className="breadcrumb">Cases / {atlasScenario.caseId}</p><h1>Revenue recovery case</h1></div>
        <span className="status-pill ready"><span /> Ready to run</span>
      </header>

      <section className="case-summary panel">
        <div className="case-title-row">
          <span className="customer-icon"><BuildingsIcon size={24} weight="duotone" /></span>
          <div><h2>{atlasScenario.customer}</h2><p>{atlasScenario.incident} · ${atlasScenario.deductionAmount.toLocaleString()} deduction</p></div>
        </div>
        <div className="location"><MapPinIcon size={16} /> {evidence.deduction_dc} · Atlanta, GA</div>
        <div className="metric-grid">
          <div><span>Invoiced</span><strong>{currency.format(evidence.invoice_amount)}</strong></div>
          <div><span>Received</span><strong>{currency.format(evidence.payment_received)}</strong></div>
          <div className="metric-risk"><span>Target recovery</span><strong>{currency.format(evidence.deduction_amount)}</strong></div>
        </div>
      </section>

      <div className="case-columns">
        <section className="panel discrepancy-card">
          <div className="panel-heading"><div><p className="overline">Evidence verification</p><h2>Power outage deduction under review</h2></div><span className="confidence">PRISM gated</span></div>
          <div className="comparison">
            <div><span>Incident</span><strong>Confirmed</strong><small>grid outage</small></div>
            <div className="comparison-arrow">vs.</div>
            <div><span>Failover report</span><strong>Required</strong><small>PRISM evidence gate</small></div>
          </div>
          <p className="explanation">Tavily confirms the outage. PRISM requires the Power failover report before recovery action can proceed.</p>
          <Link className="text-link" href="/documents"><FileTextIcon size={17} /> Review all {documents.length} source documents <ArrowRightIcon size={15} /></Link>
        </section>

        <section className="panel next-action">
          <p className="overline">Recommended action</p>
          <h2>Dispute deduction</h2>
          <ul>
            <li><CheckCircleIcon size={18} weight="fill" /> Short payment confirmed</li>
            <li><CheckCircleIcon size={18} weight="fill" /> Policy window open</li>
            <li><CheckCircleIcon size={18} weight="fill" /> Claim package ready</li>
          </ul>
          <Link className="primary-button" href="/activity">Run recovery agent <ArrowRightIcon size={17} weight="bold" /></Link>
          <p className="button-note">The run takes approximately 10 seconds.</p>
        </section>
      </div>
    </div>
  );
}
