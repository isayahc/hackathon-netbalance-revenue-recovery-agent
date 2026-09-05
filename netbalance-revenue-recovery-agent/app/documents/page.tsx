import { buildNormalizedCaseEvidence, evidenceManifest } from "@/lib/document-ingestion";
import { DocumentsBrowser } from "./documents-browser";

export default async function DocumentsPage() {
  const { evidence } = await buildNormalizedCaseEvidence();
  return (
    <div className="screen documents-screen">
      <header className="screen-header">
        <div><p className="breadcrumb">Cases / NB-10482</p><h1>Evidence documents</h1><p className="screen-description">Machine-readable source files used to reconcile Northstar&apos;s shortage deduction.</p></div>
        <div className="evidence-summary"><span>Retailer record <strong>{evidence.retailer_received_cases.toLocaleString()}</strong></span><span>Delivery evidence <strong>{evidence.pod_cases.toLocaleString()}</strong></span></div>
      </header>
      <DocumentsBrowser documents={evidenceManifest.map(({ label, fileName }) => ({ label, fileName }))} />
    </div>
  );
}
