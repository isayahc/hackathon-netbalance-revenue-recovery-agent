from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.pdfgen.canvas import Canvas


OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "evidence"


DOCUMENTS = {
    "Atlas_Invoice_INV-10482.pdf": [
        "ATLAS CLOUD / INVOICE INV-10482",
        "Atlas Cloud cloud services invoice for the Atlanta region.",
        "Invoice number INV-10482",
        "Customer Atlas Cloud",
        "Purchase order PO-77191",
        "Invoice total $268,000.00",
        "Incident context: grid power outage affecting the Atlanta service region.",
    ],
    "Atlas_Service_Order_PO-77191.pdf": [
        "ATLAS CLOUD / SERVICE ORDER PO-77191",
        "Atlas Cloud service order and availability commitments.",
        "Purchase order PO-77191",
        "Customer Atlas Cloud",
        "Service region Atlanta",
        "Committed service amount $268,000.00",
        "Availability is governed by the Atlas Cloud SLA policy.",
    ],
    "Atlas_Deduction_Notice_INV-10482.pdf": [
        "ATLAS CLOUD / DEDUCTION NOTICE INV-10482",
        "Payment detail and power interruption deduction notification.",
        "Invoice number INV-10482",
        "Purchase order PO-77191",
        "Gross invoice $268,000.00",
        "Payment issued $225,200.00",
        "Deduction amount $42,800.00",
        "Reason Power Service Interruption",
        "Reference Atlas Cloud / Atlanta",
    ],
    "Atlas_Outage_Confirmation.pdf": [
        "ATLAS CLOUD / GRID OUTAGE CONFIRMATION",
        "Independent utility event confirmation for the Atlas Cloud Atlanta region.",
        "Outage confirmed Yes",
        "Incident type grid power outage",
        "Incident reference ATL-GRID-2026-08-14",
        "Cases dispatched 1,460",
        "The regional outage occurred during the disputed service window.",
    ],
    "Atlas_Service_Continuity_Report.pdf": [
        "ATLAS CLOUD / SERVICE CONTINUITY REPORT",
        "Service continuity record for the disputed Atlanta incident.",
        "Purchase order PO-77191",
        "Cases loaded 1,460",
        "Cases dispatched 1,460",
        "The continuity plan required backup power during a grid outage.",
        "Service remained operational while the incident was active.",
    ],
    "Atlas_Incident_Operations_Report.pdf": [
        "ATLAS CLOUD / INCIDENT OPERATIONS REPORT",
        "Operations record for the Atlas Cloud Atlanta service region.",
        "Purchase order PO-77191",
        "Cases loaded 1,460",
        "Cases delivered 1,460",
        "Seal number S-44719",
        "Seal condition Intact",
        "Signed by Atlas Cloud Operations",
        "The incident response team recorded no customer-visible outage.",
    ],
    "Atlas_Operations_Report.pdf": [
        "ATLAS CLOUD / OPERATIONS REPORT",
        "Operational capacity and service status during the grid event.",
        "Expected quantity 1,460 cases",
        "Received in retailer system 1,220 cases",
        "Recorded variance 0 cases",
        "Service status Operational",
    ],
    "Atlas_SLA_Policy.pdf": [
        "ATLAS CLOUD / SLA POLICY",
        "Synthetic service-level policy governing the Atlanta region.",
        "Dispute window 60 days",
        "A power failover event is not an SLA breach when service remains operational.",
        "Evidence must support any deduction before a recovery action is taken.",
    ],
    "Power_Failover_Report.pdf": [
        "ATLAS CLOUD / POWER FAILOVER REPORT",
        "Synthetic failover report retrieved after the PRISM evidence gate request.",
        "Backup power activated",
        "Service status Operational",
        "SLA breached No",
        "Failover completed automatically and customer service remained available.",
    ],
}


def write_pdf(filename, lines):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(OUTPUT_DIR / filename), pagesize=LETTER)
    canvas.setTitle(filename)
    canvas.setFont("Helvetica-Bold", 16)
    canvas.drawString(54, 740, lines[0])
    canvas.setFont("Helvetica", 10)
    y = 710
    for line in lines[1:]:
        canvas.drawString(54, y, line)
        y -= 24
    canvas.setFont("Helvetica-Oblique", 8)
    canvas.drawString(54, 48, "Synthetic demonstration document - not a commercial record")
    canvas.save()


for document_name, document_lines in DOCUMENTS.items():
    write_pdf(document_name, document_lines)
