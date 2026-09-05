from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "evidence"
PAGE_WIDTH, PAGE_HEIGHT = LETTER

INK = colors.HexColor("#17211B")
MUTED = colors.HexColor("#66736A")
GREEN = colors.HexColor("#1F6B45")
GREEN_SOFT = colors.HexColor("#E7F3EB")
LINE = colors.HexColor("#DCE4DE")
CANVAS = colors.HexColor("#F5F7F4")
WARNING = colors.HexColor("#9B5C16")
WARNING_SOFT = colors.HexColor("#FFF2DB")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="DocTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=22, leading=27, textColor=INK, spaceAfter=8, alignment=0))
styles.add(ParagraphStyle(name="Subtitle", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=15, textColor=MUTED, spaceAfter=22))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=GREEN, spaceBefore=16, spaceAfter=8, uppercase=True))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["Normal"], fontName="Helvetica", fontSize=9, leading=14, textColor=INK))
styles.add(ParagraphStyle(name="Tiny", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="RightSmall", parent=styles["BodySmall"], alignment=TA_RIGHT))


def page_frame(canvas, doc, company, document_code):
    canvas.saveState()
    canvas.setFillColor(GREEN)
    canvas.rect(0, PAGE_HEIGHT - 0.18 * inch, PAGE_WIDTH, 0.18 * inch, fill=1, stroke=0)

    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 12)
    canvas.drawString(0.68 * inch, PAGE_HEIGHT - 0.58 * inch, company.upper())
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(PAGE_WIDTH - 0.68 * inch, PAGE_HEIGHT - 0.55 * inch, document_code)

    canvas.setStrokeColor(LINE)
    canvas.line(0.68 * inch, 0.58 * inch, PAGE_WIDTH - 0.68 * inch, 0.58 * inch)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.68 * inch, 0.38 * inch, "Synthetic demonstration document - not a commercial record")
    canvas.drawRightString(PAGE_WIDTH - 0.68 * inch, 0.38 * inch, "Page 1 of 1")
    canvas.restoreState()


def field_table(rows, widths=(2.25 * inch, 3.85 * inch), highlight_labels=()):
    data = [[Paragraph(label, styles["BodySmall"]), Paragraph(f"<b>{value}</b>", styles["RightSmall"])] for label, value in rows]
    table = Table(data, colWidths=list(widths), hAlign="LEFT")
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, LINE),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]
    for index, (label, _) in enumerate(rows):
        if label in highlight_labels:
            commands.extend([
                ("BACKGROUND", (0, index), (-1, index), GREEN_SOFT),
                ("LEFTPADDING", (0, index), (-1, index), 8),
                ("RIGHTPADDING", (0, index), (-1, index), 8),
            ])
    table.setStyle(TableStyle(commands))
    return table


def summary_box(label, value, tone="green"):
    background = GREEN_SOFT if tone == "green" else WARNING_SOFT
    foreground = GREEN if tone == "green" else WARNING
    table = Table([[Paragraph(label.upper(), styles["Tiny"]), Paragraph(f"<b>{value}</b>", styles["RightSmall"])]], colWidths=[2.3 * inch, 3.8 * inch])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), background),
        ("TEXTCOLOR", (0, 0), (-1, -1), foreground),
        ("BOX", (0, 0), (-1, -1), 0.5, foreground),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ]))
    return table


def build_pdf(filename, company, document_code, title, subtitle, rows, summary=None, notes=None, highlight_labels=()):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUTPUT_DIR / filename
    doc = SimpleDocTemplate(
        str(path),
        pagesize=LETTER,
        rightMargin=0.68 * inch,
        leftMargin=0.68 * inch,
        topMargin=0.92 * inch,
        bottomMargin=0.78 * inch,
        title=title,
        author=company,
        subject="Synthetic evidence for the Netbalance Revenue Recovery Agent demo",
    )
    story = [
        Spacer(1, 0.12 * inch),
        Paragraph(title, styles["DocTitle"]),
        Paragraph(subtitle, styles["Subtitle"]),
        field_table(rows, highlight_labels=highlight_labels),
    ]
    if summary:
        story.extend([Spacer(1, 0.22 * inch), summary_box(*summary)])
    if notes:
        story.append(Paragraph("DOCUMENT NOTES", styles["Section"]))
        for note in notes:
            story.append(KeepTogether([Paragraph(note, styles["BodySmall"]), Spacer(1, 5)]))
    doc.build(story, onFirstPage=lambda c, d: page_frame(c, d, company, document_code))
    return path


def generate_all():
    documents = [
        dict(
            filename="Invoice_INV-10482.pdf",
            company="Evergreen Consumer Foods",
            document_code="INVOICE / INV-10482",
            title="Customer Invoice",
            subtitle="Evergreen Consumer Foods - Accounts Receivable",
            rows=[
                ("Invoice number", "INV-10482"),
                ("Customer", "Northstar Retail Group"),
                ("Purchase order", "PO-77191"),
                ("Invoice date", "August 2, 2026"),
                ("Payment terms", "Net 30"),
                ("Total cases", "4,280"),
                ("Invoice total", "$584,200.00"),
            ],
            summary=("Amount due", "$584,200.00", "green"),
            notes=["Bill to: Northstar Retail Group. Shipment allocations are governed by purchase order PO-77191."],
            highlight_labels=("Invoice total",),
        ),
        dict(
            filename="Purchase_Order_PO-77191.pdf",
            company="Northstar Retail Group",
            document_code="PURCHASE ORDER / PO-77191",
            title="Purchase Order",
            subtitle="Supplier order issued to Evergreen Consumer Foods",
            rows=[
                ("Purchase order", "PO-77191"),
                ("Supplier", "Evergreen Consumer Foods"),
                ("Order date", "July 29, 2026"),
                ("DC 014 - Dallas, TX", "1,520 cases"),
                ("DC 027 - Atlanta, GA", "1,460 cases"),
                ("DC 041 - Columbus, OH", "1,300 cases"),
                ("Total ordered", "4,280 cases"),
                ("Purchase order total", "$584,200.00"),
            ],
            summary=("Order total", "4,280 cases / $584,200.00", "green"),
            notes=["Distribution-center quantities must reconcile to the total quantity ordered."],
            highlight_labels=("DC 027 - Atlanta, GA",),
        ),
        dict(
            filename="Remittance_Advice_INV-10482.pdf",
            company="Northstar Retail Group",
            document_code="REMITTANCE / INV-10482",
            title="Remittance Advice",
            subtitle="Payment detail and deduction notification",
            rows=[
                ("Invoice number", "INV-10482"),
                ("Purchase order", "PO-77191"),
                ("Gross invoice", "$584,200.00"),
                ("Payment issued", "$541,400.00"),
                ("Deduction amount", "$42,800.00"),
                ("Reason code", "SHRT"),
                ("Reason", "Merchandise Shortage"),
                ("Reference", "DC 027 / Atlanta"),
            ],
            summary=("Short payment", "$42,800.00", "warning"),
            notes=["The shortage deduction is specifically attributed to Northstar Retail Distribution Center 027 in Atlanta, Georgia."],
            highlight_labels=("Deduction amount", "Reference"),
        ),
        dict(
            filename="ASN_PO-77191_DC027.pdf",
            company="Evergreen Consumer Foods",
            document_code="ASN / SHP-829144",
            title="Advance Shipping Notice",
            subtitle="Outbound shipment notice for Northstar Retail DC 027",
            rows=[
                ("Purchase order", "PO-77191"),
                ("Shipment ID", "SHP-829144"),
                ("Destination", "Northstar Retail DC 027, Atlanta"),
                ("Ship date", "August 4, 2026"),
                ("Carrier", "National Freight Logistics"),
                ("Cases dispatched", "1,460"),
            ],
            summary=("Dispatch confirmed", "1,460 cases", "green"),
            notes=["Advance notice transmitted for the full DC 027 allocation on purchase order PO-77191."],
            highlight_labels=("Cases dispatched",),
        ),
        dict(
            filename="Bill_of_Lading_DC027.pdf",
            company="National Freight Logistics",
            document_code="BILL OF LADING / BOL-58291",
            title="Bill of Lading",
            subtitle="Carrier shipment record",
            rows=[
                ("Bill of Lading", "BOL-58291"),
                ("Shipment ID", "SHP-829144"),
                ("Purchase order", "PO-77191"),
                ("Shipper", "Evergreen Consumer Foods"),
                ("Destination", "Northstar Retail DC 027, Atlanta"),
                ("Cases loaded", "1,460"),
                ("Seal number", "S-44719"),
                ("Seal condition at dispatch", "Intact"),
            ],
            summary=("Carrier load confirmed", "1,460 cases", "green"),
            notes=["Carrier accepted custody of the sealed load identified as shipment SHP-829144."],
            highlight_labels=("Cases loaded", "Seal number"),
        ),
        dict(
            filename="Proof_of_Delivery_DC027.pdf",
            company="National Freight Logistics",
            document_code="PROOF OF DELIVERY / SHP-829144",
            title="Proof of Delivery",
            subtitle="Completed delivery receipt",
            rows=[
                ("Shipment ID", "SHP-829144"),
                ("Purchase order", "PO-77191"),
                ("Destination", "Northstar Retail DC 027, Atlanta"),
                ("Delivered", "August 5, 2026"),
                ("Cases delivered", "1,460"),
                ("Delivery status", "COMPLETE"),
                ("Seal number", "S-44719"),
                ("Seal condition", "Intact"),
                ("Signed by", "Northstar Receiving"),
                ("Receiver", "J. Reynolds"),
            ],
            summary=("Delivery accepted", "1,460 cases", "green"),
            notes=["The consignee accepted the full sealed shipment without an exception noted on this delivery record."],
            highlight_labels=("Cases delivered", "Seal number", "Receiver"),
        ),
        dict(
            filename="Northstar_Receiving_Report_DC027.pdf",
            company="Northstar Retail Group",
            document_code="RECEIVING REPORT / DC 027",
            title="Distribution Center Receiving Report",
            subtitle="DC 027 - Atlanta, Georgia",
            rows=[
                ("Purchase order", "PO-77191"),
                ("Shipment ID", "SHP-829144"),
                ("Expected quantity", "1,460 cases"),
                ("Received in retailer system", "1,220 cases"),
                ("Recorded variance", "-240 cases"),
                ("Deduction generated", "$42,800.00"),
                ("Deduction code", "SHRT"),
            ],
            summary=("System-reported shortage", "240 cases / $42,800.00", "warning"),
            notes=["This system record conflicts with external shipping and signed delivery evidence for shipment SHP-829144."],
            highlight_labels=("Received in retailer system", "Recorded variance"),
        ),
        dict(
            filename="Northstar_Deduction_Policy.pdf",
            company="Northstar Retail Group",
            document_code="SUPPLIER POLICY / SHORTAGE DEDUCTIONS",
            title="Supplier Deduction Policy",
            subtitle="Shortage deduction dispute requirements",
            rows=[
                ("Policy category", "Merchandise Shortage"),
                ("Dispute window", "60 days"),
                ("Required evidence 1", "Invoice"),
                ("Required evidence 2", "Purchase order"),
                ("Required evidence 3", "Advance Shipping Notice"),
                ("Required evidence 4", "Bill of Lading"),
                ("Required evidence 5", "Proof of Delivery"),
                ("Required evidence 6", "Receiving reference"),
            ],
            summary=("Eligibility rule", "Dispute within 60 days", "green"),
            notes=["Claims may require additional carrier evidence during review.", "Supporting documents must identify the relevant purchase order, shipment, and receiving location."],
            highlight_labels=("Dispute window",),
        ),
    ]

    paths = [build_pdf(**document) for document in documents]
    print("\n".join(str(path) for path in paths))


if __name__ == "__main__":
    generate_all()
