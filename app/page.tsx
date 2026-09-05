import { ArrowRightIcon, BuildingsIcon, CheckCircleIcon, FileTextIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { analyzeRecoveryCase } from "@/lib/agent";
import { buildNormalizedCaseEvidence } from "@/lib/document-ingestion";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default async function CasesPage() {
  const { documents, evidence } = await buildNormalizedCaseEvidence();
  const analysis = analyzeRecoveryCase(evidence);

  return (
    <div className="screen">
      <header className="screen-header">
        <div><p className="breadcrumb">Cases / NB-10482</p><h1>Revenue recovery case</h1></div>
        <span className="status-pill ready"><span /> Ready to run</span>
      </header>

      <section className="case-summary panel">
        <div className="case-title-row">
          <span className="customer-icon"><BuildingsIcon size={24} weight="duotone" /></span>
          <div><h2>Northstar Retail</h2><p>Invoice {evidence.invoice_number} · PO {evidence.po_number}</p></div>
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
          <div className="panel-heading"><div><p className="overline">Evidence discrepancy</p><h2>240 cases unaccounted for</h2></div><span className="confidence">High confidence</span></div>
          <div className="comparison">
            <div><span>Northstar receiving record</span><strong>{evidence.retailer_received_cases.toLocaleString()}</strong><small>cases received</small></div>
            <div className="comparison-arrow">vs.</div>
            <div><span>Signed delivery evidence</span><strong>{analysis.reconciliation.deliveredCases.toLocaleString()}</strong><small>cases delivered</small></div>
          </div>
          <p className="explanation">ASN, Bill of Lading, and signed Proof of Delivery agree. Seal {evidence.seal_number} was intact.</p>
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
