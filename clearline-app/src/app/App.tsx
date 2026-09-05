import { useState, useEffect, createContext, useContext, Component } from "react";
import type { FC, Dispatch, SetStateAction, ReactNode, ErrorInfo } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null };
  componentDidCatch(e: Error, _: ErrorInfo) { this.setState({ error: e.message + "\n" + e.stack }); }
  render() {
    if (this.state.error) return (
      <div style={{ padding: 24, fontFamily: "monospace", whiteSpace: "pre-wrap", fontSize: 12, color: "red", background: "#fff" }}>
        {this.state.error}
      </div>
    );
    return this.props.children;
  }
}
import { motion } from "motion/react";
import {
  LayoutDashboard, CreditCard, BarChart2, Users, Settings,
  FileText, Check, X, ChevronLeft, ChevronRight, Lock,
  AlertTriangle, ArrowRight, HelpCircle, Zap, Clock,
  CheckCircle2, Square, CheckSquare, AlertCircle, Copy,
  ChevronDown, Sparkles, Plus, Menu
} from "lucide-react";

type Screen =
  | "payouts-inbox"
  | "payouts-inbox-failed"
  | "payouts-inbox-empty"
  | "payouts-inbox-loading"
  | "review-invoice"
  | "payment-method"
  | "payment-method-missing"
  | "review-send"
  | "payout-sent"
  | "bulk-payout-sent"
  | "set-recurring"
  | "bulk-approve"
  | "insights"
  | "payout-failed-detail"
  | "settings-page"
  | "approval-policies"
  | "create-policy"
  | "policy-detail";

type NavItem = "dashboard" | "payments" | "insights" | "contractors" | "settings";

const EASE = [0.16, 1, 0.3, 1] as const;

function a(delay: number, y = 10, duration = 0.4) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  };
}

// ── Dark Mode Context ───────────────────────────────────────────────

const DarkModeContext = createContext<{ dark: boolean; setDark: Dispatch<SetStateAction<boolean>> }>({ dark: false, setDark: () => {} });
const useDark = () => useContext(DarkModeContext);

// ── Shared ─────────────────────────────────────────────────────────


function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const { dark } = useDark();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={`${dark ? "bg-[#111722] border-[#232b38]" : "bg-white border-[#e0e3e8]"} h-14 w-full shrink-0 border-b flex items-center px-4 sm:px-6 z-10 gap-3`}
    >
      <button
        onClick={onMenuClick}
        className={`sm:hidden p-1.5 rounded-lg transition-colors ${dark ? "text-[#98a2b5] hover:bg-[#1a2130]" : "text-[#374151] hover:bg-gray-100"}`}
      >
        <Menu size={20} />
      </button>
      <span className={`font-bold text-xl tracking-tight ${dark ? "text-[#f0f3f8]" : "text-black"}`}>Clearline</span>
    </motion.div>
  );
}

interface SidebarProps {
  active: NavItem;
  onNavigate: (item: NavItem) => void;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ active, onNavigate, isOpen, onClose }: SidebarProps) {
  const { dark } = useDark();
  const items: { id: NavItem; label: string; Icon: FC<any> }[] = [
    { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { id: "payments", label: "Payments", Icon: CreditCard },
    { id: "insights", label: "Insights", Icon: BarChart2 },
    { id: "contractors", label: "Contractors", Icon: Users },
    { id: "settings", label: "Settings", Icon: Settings },
  ];

  const navContent = (
    <div className="flex flex-col py-6 h-full">
      {/* Mobile header inside drawer */}
      <div className={`sm:hidden flex items-center justify-between px-6 pb-4 mb-2 border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}`}>
        <span className={`font-bold text-lg tracking-tight ${dark ? "text-[#f0f3f8]" : "text-black"}`}>Clearline</span>
        <button onClick={onClose} className={`p-1.5 rounded-lg ${dark ? "text-[#98a2b5] hover:bg-[#1a2130]" : "text-[#374151] hover:bg-gray-100"}`}>
          <X size={18} />
        </button>
      </div>
      {items.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => { onNavigate(id); onClose(); }}
            className={`flex items-center gap-3 px-6 py-3.5 w-full text-left transition-colors ${
              isActive
                ? dark ? "bg-[#12122e]" : "bg-[#eef0ff]"
                : dark ? "hover:bg-[#1a2130]" : "bg-white hover:bg-gray-50"
            }`}
          >
            <Icon size={16} strokeWidth={2} className={isActive ? (dark ? "text-[#2e37fe]" : "text-[#2e37fe]") : (dark ? "text-[#98a2b5]" : "text-[#9ca3af]")} />
            <span className={`text-sm ${isActive ? (dark ? "font-semibold text-[#2e37fe]" : "font-semibold text-[#2e37fe]") : (dark ? "font-medium text-[#98a2b5]" : "font-medium text-[#374151]")}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.04, ease: EASE }}
        className={`${dark ? "bg-[#111722] border-[#232b38]" : "bg-white border-[#e5e7eb]"} w-60 shrink-0 border-r hidden sm:flex flex-col`}
      >
        {navContent}
      </motion.div>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className={`relative w-64 h-full ${dark ? "bg-[#111722] border-r border-[#232b38]" : "bg-white border-r border-[#e5e7eb]"} flex flex-col`}
          >
            {navContent}
          </motion.div>
        </div>
      )}
    </>
  );
}

const AVATAR_COLORS: Record<string, string> = {
  PS: "#8b5cf6", AC: "#2e37fe", SM: "#ec4899", DB: "#9ca3af", JL: "#f59e0b", RK: "#10b981",
};

function Avatar({ initials, size = 32 }: { initials: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 text-white font-semibold"
      style={{ width: size, height: size, background: AVATAR_COLORS[initials] ?? "#6b7280", fontSize: size * 0.375 }}
    >
      {initials}
    </div>
  );
}

function PillButton({ children, onClick, variant = "primary", className = "" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-80 ${
        variant === "primary"
          ? "bg-[#2e37fe] text-white"
          : variant === "secondary"
          ? "bg-[#eef0ff] text-[#2e37fe]"
          : "border border-[#e5e7eb] text-[#111827] bg-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function AiBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] font-bold px-2.5 py-1 rounded-md"
      style={{
        background: "linear-gradient(90deg, #5EEAD4, #00B5A6, #0D8080)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundColor: "#e6f9f8",
      }}
    >
      {children}
    </span>
  );
}

function AiBadgeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#ccf0ed] px-2.5 py-1 rounded-md">
      <AiBadge>{children}</AiBadge>
    </span>
  );
}

function GradientSparkle({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0">
      <defs>
        <linearGradient id="sparkGrad" x1="9" y1="17" x2="23" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5EEAD4" />
          <stop offset="0.55" stopColor="#00B5A6" />
          <stop offset="1" stopColor="#0D8080" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zM5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15zM19 14l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L17 16l1.5-.5L19 14z"
        stroke="url(#sparkGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function TealGradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`font-bold ${className}`}
      style={{
        backgroundImage: "linear-gradient(9deg, #5EEAD4 29%, #00B5A6 68%, #0D8080 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

// ── High-Value Confirm Modal ────────────────────────────────────────

function HighValueConfirmModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  const { dark } = useDark();
  const [typed, setTyped] = useState("");
  const target = "$12,500.00";
  const valid = typed.trim() === target;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1, ease: EASE }}
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.125, ease: EASE }}
        className={`relative ${dark ? "bg-[#161c26]" : "bg-white"} rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] w-[calc(100vw-32px)] max-w-[440px] p-8 flex flex-col gap-6`}
      >
        <motion.p {...a(0.175, 8, 0.3)} className="font-bold text-xl text-black">Confirm high-value payout</motion.p>

        <motion.div {...a(0.205, 8, 0.3)} className="bg-[#f9fafb] rounded-xl border border-[#e5e7eb] flex items-center gap-3 p-4">
          <div className="bg-[#8b5cf6] size-8 rounded-full flex items-center justify-center shrink-0">
            <span className="font-bold text-white text-[12px]">PS</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-black">Priya Sharma</p>
            <p className="text-[#4b5563] text-xs">India · Bank Transfer</p>
          </div>
          <p className="font-extrabold text-base text-black">$12,500.00</p>
        </motion.div>

        <motion.div {...a(0.235, 8, 0.3)} className="bg-[#fef3c7] rounded-lg flex gap-3 items-start p-3">
          <AlertTriangle size={16} className="text-[#f59e0b] shrink-0 mt-0.5" />
          <p className="text-[#92400e] text-[13px] leading-[1.4]">Payouts over $10,000 require manual confirmation.</p>
        </motion.div>

        <motion.div {...a(0.265, 8, 0.3)} className="flex flex-col gap-2">
          <p className="font-semibold text-[#374151] text-[13px]">Type the exact amount to confirm</p>
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="$12,500.00"
            className="h-11 rounded-lg border border-[#e5e7eb] px-4 text-sm outline-none focus:border-[#2e37fe] transition-colors bg-white w-full"
          />
        </motion.div>

        <motion.div {...a(0.295, 8, 0.3)} className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-full border border-[#e5e7eb] text-sm font-semibold text-black hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={valid ? onConfirm : undefined}
            className={`flex-1 h-11 rounded-full text-sm font-semibold text-white transition-opacity ${valid ? "bg-[#2e37fe] hover:opacity-90" : "bg-[#2e37fe] opacity-30 cursor-not-allowed"}`}
          >
            Confirm &amp; Send
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Screen: Payouts Inbox ──────────────────────────────────────────

const pendingPayouts = [
  { initials: "PS", name: "Priya Sharma",     inv: "INV-2026-0042", date: "Sep 14, 2026", amount: "$1,200.00" },
  { initials: "AC", name: "Alex Chen",        inv: "INV-2026-0041", date: "Sep 14, 2026", amount: "$2,400.00" },
  { initials: "SM", name: "Sarah Miller",     inv: "INV-2026-0040", date: "Sep 13, 2026", amount: "$850.00" },
  { initials: "RP", name: "Ravi Patel",       inv: "INV-2026-0039", date: "Sep 13, 2026", amount: "$3,150.00" },
  { initials: "JL", name: "Jordan Lee",       inv: "INV-2026-0038", date: "Sep 13, 2026", amount: "$975.00" },
  { initials: "LT", name: "Lucas Torres",     inv: "INV-2026-0037", date: "Sep 12, 2026", amount: "$1,800.00" },
  { initials: "WL", name: "Wei Lin",          inv: "INV-2026-0036", date: "Sep 12, 2026", amount: "$4,200.00" },
  { initials: "CF", name: "Camila Ferreira",  inv: "INV-2026-0035", date: "Sep 12, 2026", amount: "$660.00" },
  { initials: "FN", name: "Felix Neumann",    inv: "INV-2026-0034", date: "Sep 11, 2026", amount: "$2,100.00" },
  { initials: "MR", name: "Maria Reyes",      inv: "INV-2026-0033", date: "Sep 11, 2026", amount: "$1,350.00" },
  { initials: "ET", name: "Ethan Thomson",    inv: "INV-2026-0032", date: "Sep 11, 2026", amount: "$780.00" },
  { initials: "AL", name: "Ana Lima",         inv: "INV-2026-0031", date: "Sep 10, 2026", amount: "$5,500.00" },
  { initials: "TK", name: "Tanaka Kenji",     inv: "INV-2026-0030", date: "Sep 10, 2026", amount: "$920.00" },
  { initials: "OW", name: "Olivia Walker",    inv: "INV-2026-0029", date: "Sep 10, 2026", amount: "$1,640.00" },
  { initials: "SG", name: "Santiago García",  inv: "INV-2026-0028", date: "Sep 9, 2026",  amount: "$2,875.00" },
  { initials: "NG", name: "Ngozi Okafor",     inv: "INV-2026-0027", date: "Sep 9, 2026",  amount: "$1,100.00" },
  { initials: "JW", name: "James Wright",     inv: "INV-2026-0026", date: "Sep 9, 2026",  amount: "$3,300.00" },
  { initials: "KM", name: "Kavya Menon",      inv: "INV-2026-0025", date: "Sep 8, 2026",  amount: "$730.00" },
  { initials: "BM", name: "Bruno Martins",    inv: "INV-2026-0024", date: "Sep 8, 2026",  amount: "$1,950.00" },
  { initials: "HS", name: "Hui Sim",          inv: "INV-2026-0023", date: "Sep 8, 2026",  amount: "$2,250.00" },
  { initials: "EJ", name: "Emma Jones",       inv: "INV-2026-0022", date: "Sep 7, 2026",  amount: "$890.00" },
  { initials: "DK", name: "Diego Ramírez",    inv: "INV-2026-0021", date: "Sep 7, 2026",  amount: "$1,420.00" },
  { initials: "MK", name: "Mary Kamau",       inv: "INV-2026-0020", date: "Sep 7, 2026",  amount: "$640.00" },
  { initials: "LS", name: "Lena Schneider",   inv: "INV-2026-0019", date: "Sep 6, 2026",  amount: "$3,800.00" },
  { initials: "AO", name: "Aiden O'Brien",    inv: "INV-2026-0018", date: "Sep 6, 2026",  amount: "$1,075.00" },
];

// SVG icon paths from AdminPayoutInbox-8 / AdminPayoutBulkApprove-7 svg source files
const SVG_ICON_DOC ="M3.25 2H11.25V5.5C11.25 6.0851 11.5423 6.58676 11.9551 6.91699C12.3621 7.24257 12.8747 7.40039 13.375 7.40039H18V17.2002C17.9999 17.3312 17.9359 17.5164 17.7158 17.6924C17.4899 17.8729 17.1445 18 16.75 18H3.25C2.85546 18 2.51013 17.8729 2.28418 17.6924C2.06414 17.5164 2.00006 17.3312 2 17.2002V2.7998L2.01367 2.69238C2.04193 2.57695 2.11922 2.43958 2.28418 2.30762C2.51013 2.12709 2.85546 2 3.25 2ZM5.5 15.5H14.5V13.5H5.5V15.5ZM5.5 11.9004H14.5V9.90039H5.5V11.9004ZM5.5 8.2998H7.75V6.2998H5.5V8.2998ZM13.25 2.22949C13.3585 2.28475 13.4562 2.34694 13.541 2.41504L13.542 2.41602L17.2725 5.40039H13.375C13.3211 5.40039 13.2795 5.388 13.25 5.37695V2.22949Z";
const SVG_CHECK = "M9.9992 3L4.49975 8.4996L2 5.99978";
const SVG_ALERT_SM = "M5.99999 4.49964V6.49964M5.99999 8.49964H6.00499M10.8652 8.99975L6.8652 1.99975C6.77798 1.84585 6.6515 1.71784 6.49866 1.62878C6.34582 1.53972 6.17209 1.4928 5.9952 1.4928C5.8183 1.4928 5.64458 1.53972 5.49174 1.62878C5.3389 1.71784 5.21242 1.84585 5.1252 1.99975L1.1252 8.99975C1.03704 9.15243 0.990812 9.3257 0.991202 9.502C0.991593 9.67831 1.03859 9.85137 1.12742 10.0037C1.21626 10.1559 1.34377 10.282 1.49705 10.3692C1.65032 10.4563 1.8239 10.5013 2.0002 10.4997H10.0002C10.1756 10.4996 10.348 10.4532 10.4998 10.3654C10.6517 10.2775 10.7778 10.1513 10.8655 9.99931C10.9531 9.84732 10.9992 9.67494 10.9992 9.49949C10.9991 9.32404 10.9529 9.15169 10.8652 8.99975Z";
const SVG_ALERT_LG = "M7.99967 5.99959V8.66626M7.99967 11.3329H8.00634M14.4866 11.9997L9.15329 2.66641C9.037 2.46121 8.86836 2.29053 8.66457 2.17179C8.46078 2.05304 8.22915 1.99048 7.99329 1.99048C7.75743 1.99048 7.52579 2.05304 7.322 2.17179C7.11822 2.29053 6.94958 2.46121 6.83329 2.66641L1.49995 11.9997C1.38241 12.2033 1.32077 12.4343 1.32129 12.6694C1.32181 12.9045 1.38447 13.1352 1.50292 13.3383C1.62136 13.5413 1.79138 13.7095 1.99575 13.8256C2.20011 13.9418 2.43156 14.0019 2.66662 13.9997H13.3333C13.5672 13.9995 13.797 13.9377 13.9995 13.8206C14.202 13.7035 14.3701 13.5351 14.487 13.3325C14.6038 13.1298 14.6653 12.9 14.6653 12.6661C14.6652 12.4321 14.6036 12.2023 14.4866 11.9997Z";
const SVG_SHIELD = "M6.0002 7.99968L7.3334 9.33306L9.9998 6.66631M13.3328 8.66667C13.3328 12.0001 10.9997 13.6668 8.22664 14.6335C8.08143 14.6827 7.9237 14.6804 7.78002 14.6269C5.0003 13.6668 2.6672 12.0001 2.6672 8.66667V3.99985C2.6672 3.82304 2.73743 3.65346 2.86244 3.52843C2.98745 3.4034 3.15701 3.33316 3.3338 3.33316C4.667 3.33316 6.3335 2.53314 7.49338 1.51977C7.63461 1.3991 7.81425 1.3328 8 1.3328C8.18575 1.3328 8.36539 1.3991 8.50662 1.51977C9.67317 2.53981 11.333 3.33316 12.6662 3.33316C12.843 3.33316 13.0125 3.4034 13.1376 3.52843C13.2626 3.65346 13.3328 3.82304 13.3328 3.99985V8.66667Z";
const SVG_CLOSE = "M16.7071 0.707107L0.707107 16.7071M0.707107 0.707107L16.7071 16.7071";

function PayoutsInbox({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [showAll, setShowAll] = useState(false);
  const PREVIEW = 8;
  const displayed = showAll ? pendingPayouts : pendingPayouts.slice(0, PREVIEW);
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-10 flex flex-col gap-10 min-h-full`}>
      {/* Header row — matches AdminPayoutInbox-8 Frame13 */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15, ease: EASE }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full shrink-0 gap-4">
        <div className="flex items-center gap-4">
          <h1 className={`font-bold text-[28px] sm:text-[32px] leading-none ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>Payouts</h1>
          <span className={`text-[12px] font-semibold uppercase px-2.5 py-1 rounded-md ${dark ? "bg-[#0f0f2e] text-[#00ccba]" : "bg-[#eef0ff] text-[#2e37fe]"}`}>{pendingPayouts.length} Pending</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("payouts-inbox-empty")}
            className={`font-bold text-[14px] sm:text-[15px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors ${dark ? "bg-transparent text-[#a5bbd1] border border-[#12122e]" : "bg-[#eef0ff] text-[#2e37fe] hover:bg-[#e0e0ff]"}`}
          >
            New Payout
          </button>
          <button
            onClick={() => onNavigate("bulk-approve")}
            className="bg-[#2e37fe] text-white font-bold text-[14px] sm:text-[15px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Bulk Approve
          </button>
        </div>
      </motion.div>

      {/* Pending Review section — matches AdminPayoutInbox-8 Frame18 */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.20, ease: EASE }} className="flex flex-col gap-5 w-full shrink-0">
        <div className="flex items-center justify-between">
          <p className={`font-semibold text-[18px] ${dark ? "text-[#98a2b5]" : "text-[#374151]"}`}>Pending Review</p>
          <span className={`text-[13px] font-medium ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>{pendingPayouts.length} invoices</span>
        </div>
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border overflow-hidden`}>
          {displayed.map((p, i) => (
            <div key={i} className={`relative flex items-center gap-3 sm:gap-6 px-4 sm:px-5 py-4 sm:py-5 border-b ${dark ? "border-[#1a2130]" : "border-[#e5e7eb]"} ${dark ? "hover:bg-[#1a2130]" : "hover:bg-gray-50"} transition-colors`}>
              <Avatar initials={p.initials} size={32} />
              <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                <p className={`font-semibold text-[14px] sm:text-[15px] truncate ${dark ? "text-[#f0f3f8]" : "text-black"}`}>{p.name}</p>
                <p className="text-[#9ca3af] text-[12px] sm:text-[13px]">{p.inv}</p>
              </div>
              <p className={`text-[13px] hidden sm:block w-[150px] shrink-0 ${dark ? "text-[#98a2b5]" : "text-[#374151]"}`}>{p.date}</p>
              <p className={`font-bold text-[14px] sm:text-[16px] shrink-0 ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>{p.amount}</p>
              <button className="shrink-0 hidden sm:flex items-center justify-center size-[20px] text-[#9ca3af]">
                <FileText size={18} />
              </button>
              <button
                onClick={() => onNavigate("review-invoice")}
                className={`font-bold text-[13px] sm:text-[15px] px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-colors shrink-0 ${dark ? "bg-transparent border border-[#232b38] text-[#f0f3f8] hover:bg-[#1a2130]" : "bg-[#eef0ff] text-[#2e37fe] hover:bg-[#e0e0ff]"}`}
              >
                Review
              </button>
            </div>
          ))}
          {/* Show more / collapse */}
          <button
            onClick={() => setShowAll(v => !v)}
            className={`w-full py-3.5 text-[13px] font-semibold text-center transition-colors ${dark ? "text-[#98a2b5] hover:bg-[#1a2130]" : "text-[#2e37fe] hover:bg-[#fafafa]"}`}
          >
            {showAll
              ? "Show less"
              : `Show ${pendingPayouts.length - PREVIEW} more`}
          </button>
        </div>
      </motion.div>

      {/* Completed This Month — matches AdminPayoutInbox-8 Frame35 */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.26, ease: EASE }} className="flex flex-col gap-4 w-full opacity-60 shrink-0">
        <p className="font-semibold text-[#9ca3af] text-[16px]">Completed This Month</p>
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-lg border`}>
          <div className="flex items-center gap-3 sm:gap-6 p-4">
            <div className="size-8 rounded-full bg-[#9ca3af] flex items-center justify-center text-white text-[12.8px] font-semibold shrink-0">DB</div>
            <p className={`flex-1 min-w-0 font-medium text-[14px] truncate ${dark ? "text-[#f0f3f8]" : "text-black"}`}>David Beck</p>
            <p className="text-[#9ca3af] text-[13px] shrink-0 hidden sm:block">Jul 1, 2026</p>
            <p className={`font-semibold text-[14px] shrink-0 ${dark ? "text-[#f0f3f8]" : "text-black"}`}>$1,500.00</p>
            <span className="bg-[#ecfdf5] text-[#16a34a] text-[12px] font-semibold uppercase px-2.5 py-1 rounded-md shrink-0">Sent</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Screen: Payouts Inbox — Failed Row ────────────────────────────

function PayoutsInboxFailed({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-10 flex flex-col gap-10 min-h-full`}>
      <motion.div {...a(0.075, 12)} className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-[#1a2332] text-3xl">Payouts</h1>
          <span className="bg-[#eef0ff] text-[#2e37fe] text-xs font-semibold uppercase px-2.5 py-1 rounded-md">3 Pending</span>
        </div>
        <div className="flex items-center gap-3">
          <PillButton variant="secondary">New Payout</PillButton>
          <PillButton onClick={() => onNavigate("bulk-approve")}>Bulk Approve</PillButton>
        </div>
      </motion.div>

      <motion.div {...a(0.13, 10)} className="flex flex-col gap-5 w-full">
        <h2 className="font-semibold text-[#374151] text-lg">Pending Review</h2>
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border overflow-hidden`}>
          {/* Failed row — Priya Sharma */}
          <div className="relative flex items-center gap-6 p-5 border-b border-[#e5e7eb] bg-[#fff8f7] hover:bg-[#fff3f0] transition-colors cursor-pointer" onClick={() => onNavigate("payout-failed-detail")}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff715b] rounded-l-xl" />
            <div className="pl-3">
              <Avatar initials="PS" size={32} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[15px] text-[#1a2332]">Priya Sharma</p>
              <p className="text-[#9ca3af] text-[13px]">INV-2026-0041</p>
            </div>
            <p className="text-[#374151] text-sm w-36 shrink-0">Jul 3, 2026</p>
            <p className="font-bold text-[#1a2332] text-base w-28 shrink-0">$1,200.00</p>
            <span className="bg-[#fee9e6] text-[#ff715b] font-bold text-[13px] px-3 py-1.5 rounded-full shrink-0">Failed</span>
            <button className="text-[#9ca3af] hover:text-[#374151] transition-colors shrink-0">
              <FileText size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNavigate("payout-failed-detail"); }}
              className="bg-[#2e37fe] text-white font-semibold text-[15px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity shrink-0"
            >
              Retry
            </button>
          </div>
          {/* Normal rows */}
          {[
            { initials: "AC", name: "Alex Chen", inv: "INV-2026-0042", date: "Jul 4, 2026", amount: "$2,400.00" },
            { initials: "SM", name: "Sarah Miller", inv: "INV-2026-0043", date: "Jul 3, 2026", amount: "$850.00" },
          ].map((p, i) => (
            <div key={i} className={`flex items-center gap-6 p-5 ${i < 1 ? "border-b border-[#e5e7eb]" : ""} hover:bg-gray-50 transition-colors`}>
              <Avatar initials={p.initials} size={32} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[15px] text-black">{p.name}</p>
                <p className="text-[#9ca3af] text-[13px]">{p.inv}</p>
              </div>
              <p className="text-[#374151] text-sm w-36 shrink-0">{p.date}</p>
              <p className="font-bold text-[#1a2332] text-base w-28 shrink-0">{p.amount}</p>
              <button className="text-[#9ca3af] hover:text-[#374151] transition-colors shrink-0"><FileText size={18} /></button>
              <button
                onClick={() => onNavigate("review-invoice")}
                className="bg-[#eef0ff] text-[#2e37fe] font-bold text-[15px] px-6 py-3 rounded-full hover:bg-[#e0e0ff] transition-colors shrink-0"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...a(0.18, 10)} className="flex flex-col gap-4 w-full opacity-60">
        <h3 className="font-semibold text-[#9ca3af] text-base">Completed This Month</h3>
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-lg border flex items-center gap-6 p-4`}>
          <Avatar initials="DB" size={32} />
          <p className="flex-1 font-medium text-sm text-black">David Beck</p>
          <p className="text-[#9ca3af] text-sm shrink-0">Jul 1, 2026</p>
          <p className="font-semibold text-sm text-black text-right w-24 shrink-0">$1,500.00</p>
          <span className="bg-[#ecfdf5] text-[#16a34a] text-xs font-semibold uppercase px-2.5 py-1 rounded-md shrink-0">Sent</span>
        </div>
      </motion.div>

      <motion.div {...a(0.2, 8)}>
        <button onClick={() => onNavigate("payouts-inbox")} className="text-xs text-[#9ca3af] underline hover:text-[#374151] transition-colors">← Back to normal inbox</button>
      </motion.div>
    </div>
  );
}

// ── Screen: Payouts Inbox — Empty ──────────────────────────────────

function PayoutsInboxEmpty({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} flex flex-col items-center justify-center h-full min-h-full`}>
      <motion.div {...a(0.1, 10)} className="flex flex-col items-center gap-6 max-w-sm text-center">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[#191d23] text-[28px]">All caught up.</p>
          <p className="text-[#9ca3af] text-base">No payouts need review.</p>
        </div>
        <button
          onClick={() => onNavigate("payouts-inbox")}
          className="bg-[#2e37fe] text-white font-bold text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          New payout
        </button>
      </motion.div>
    </div>
  );
}

// ── Screen: Payouts Inbox — Loading ────────────────────────────────

function PayoutsInboxLoading() {
  const { dark } = useDark();
  return (
    <div className="p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-10 min-h-full">
      <motion.div {...a(0.075, 12)} className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-[#1a2332] text-3xl">Payouts</h1>
          <div className="bg-[#eef0ff] h-6 w-20 rounded-md animate-pulse" />
        </div>
        <div className="bg-[#e5e7eb] h-11 w-28 rounded-full animate-pulse" />
      </motion.div>

      <motion.div {...a(0.1, 10)} className="flex flex-col gap-5 w-full">
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-lg border flex items-center gap-3 px-4 py-3`}>
          <div className="size-4 rounded border-2 border-[#9ca3af]" />
          <p className="text-[#9ca3af] text-sm italic">AI is reviewing this invoice…</p>
        </div>

        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border overflow-hidden`}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={`flex items-center gap-6 p-5 ${i < 2 ? "border-b border-[#e5e7eb]" : ""}`}>
              <div className="size-8 rounded-full bg-[#e5e7eb] animate-pulse shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-3 bg-[#e5e7eb] rounded-md w-28 animate-pulse" />
                <div className="h-2.5 bg-[#f3f4f6] rounded w-20 animate-pulse" />
              </div>
              <div className="h-3 bg-[#e5e7eb] rounded w-24 animate-pulse" />
              <div className="h-3.5 bg-[#e5e7eb] rounded w-20 animate-pulse" />
              <div className="size-5 bg-[#f3f4f6] rounded animate-pulse" />
              <div className="h-10 w-24 bg-[#f3f4f6] rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

// ── Screen: Review Invoice ─────────────────────────────────────────

function ReviewInvoice({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 pb-16 min-h-full`}>
      <motion.div {...a(0.075, 12)} className="flex items-center justify-between w-full">
        <h2 className="font-bold text-[#1a2332] text-2xl">Review Invoice</h2>
        <button
          onClick={() => onNavigate("payouts-inbox")}
          className="bg-[#f9fafb] size-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={20} className="text-[#4b5563]" />
        </button>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
        {/* Invoice card */}
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border shadow-sm flex-1 p-6 flex flex-col gap-5`}>
          <div className="flex items-start justify-between">
            <div className="bg-[#ecfdf5] rounded-md p-2">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                <defs>
                  <linearGradient id="fileGrad" x1="11" y1="21" x2="28" y2="8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EEAD4" /><stop offset="0.55" stopColor="#00B5A6" /><stop offset="1" stopColor="#0D8080" />
                  </linearGradient>
                </defs>
                <path d="M4 4h13l6 6v15H4V4z M17 4v6h6 M8 14h12 M8 18h8" stroke="url(#fileGrad)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <AiBadgeWrapper>✦ AI EXTRACTED</AiBadgeWrapper>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#9ca3af] text-xs uppercase tracking-wide">Invoice #</p>
            <p className="font-semibold text-base text-black">INV-2026-0042</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#9ca3af] text-xs uppercase tracking-wide">Line Items</p>
            <div className="flex flex-col gap-2 text-sm text-black">
              <div className="flex justify-between"><span>Design Services</span><span className="font-semibold">$850.00</span></div>
              <div className="flex justify-between"><span>Dev hours</span><span className="font-semibold">$300.00</span></div>
              <div className="flex justify-between"><span>Tools</span><span className="font-semibold">$50.00</span></div>
            </div>
          </div>
          <div className="border-t border-[#e5e7eb]" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-bold text-base text-black">Total Amount</span>
            <span className="font-extrabold text-[#1a2332] text-2xl">$1,200.00 USD</span>
          </div>
        </div>

        {/* Contractor card */}
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border flex-1 p-6 flex flex-col gap-6`}>
          <div className="flex flex-col gap-4">
            <p className="text-[#9ca3af] text-sm uppercase font-semibold tracking-wide">Matched Contractor</p>
            <div className="flex items-center gap-4">
              <Avatar initials="PS" size={48} />
              <div>
                <p className="font-bold text-lg text-black">Priya Sharma</p>
                <p className="text-[#9ca3af] text-sm">priya@studio.in</p>
              </div>
            </div>
            <div className="flex gap-5 text-sm">
              <div className="flex flex-col gap-1">
                <p className="text-[#9ca3af] text-xs">Country</p>
                <p className="text-black">🇮🇳 India</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#9ca3af] text-xs">Local Currency</p>
                <p className="text-black">INR</p>
              </div>
            </div>
          </div>
          <div className="bg-[#eef0ff] p-4 rounded-lg">
            <p className="text-[#2e37fe] text-sm">
              Invoice submitted on <span className="font-bold">Jul 5, 2026</span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div {...a(0.13, 10)} className="flex items-center justify-between w-full">
        <button
          onClick={() => onNavigate("payment-method-missing")}
          className="text-xs text-[#9ca3af] underline hover:text-[#374151] transition-colors"
        >
          Demo: Missing bank info →
        </button>
        <PillButton onClick={() => onNavigate("payment-method")}>Continue</PillButton>
      </motion.div>
    </div>
  );
}

// ── Screen: Payment Method ─────────────────────────────────────────

function PaymentMethod({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [selected, setSelected] = useState(0);
  const options = [
    { title: "Bank Transfer", details: ["🕐 2-3 business days", "$2.00 flat fee"], aiSuggested: true },
    { title: "Crypto (USDC)", details: ["⚡ Within 1 hour", "~$0.50 network gas"] },
    { title: "Wallet Balance", details: ["⚡ Instant", "Free"] },
  ];

  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-10 flex flex-col gap-10 min-h-full`}>
      <motion.div {...a(0.075, 12)} className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-semibold text-[#191d23] text-2xl">Payment Method</h2>
          <button onClick={() => onNavigate("payouts-inbox")} className="bg-[#f9fafb] size-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={20} className="text-[#4b5563]" />
          </button>
        </div>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="flex flex-col gap-4 w-full">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left rounded-xl p-5 flex gap-4 items-start transition-all ${isSelected ? `${dark ? "bg-[#161c26]" : "bg-white"} border-2 border-[#5eead4]` : `${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} border`}`}
            >
              <div className={`mt-0.5 size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${isSelected ? "border-[#5eead4]" : "border-[#e5e7eb]"}`}>
                {isSelected && <div className="size-2.5 rounded-full bg-[#5eead4]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#191d23] text-base">{opt.title}</span>
                  {opt.aiSuggested && <AiBadgeWrapper>AI suggested ✦</AiBadgeWrapper>}
                </div>
                <div className="flex gap-6">
                  {opt.details.map((d, j) => <span key={j} className="text-[#4b5563] text-sm">{d}</span>)}
                </div>
              </div>
            </button>
          );
        })}
        <p className="text-[#4b5563] text-sm pt-4">
          📅 Estimated arrival: <span className="font-semibold">Friday, July 11, 2026</span>
        </p>
      </motion.div>

      <motion.div {...a(0.13, 10)} className="flex justify-end w-full">
        <PillButton onClick={() => onNavigate("review-send")}>Continue</PillButton>
      </motion.div>
    </div>
  );
}

// ── Screen: Payment Method — Missing Bank ──────────────────────────

function PaymentMethodMissing({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 min-h-full`}>
      <motion.div {...a(0.075, 12)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="font-semibold text-[#191d23] text-2xl">Select Payment Method</h2>
        <button onClick={() => onNavigate("payouts-inbox")} className="bg-[#f9fafb] size-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <X size={20} className="text-[#4b5563]" />
        </button>
      </motion.div>

      {/* Summary strip */}
      <motion.div {...a(0.1, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border flex items-center gap-4 p-4`}>
        <div className="bg-[#e8eef4] size-10 rounded-full flex items-center justify-center shrink-0">
          <span className="font-bold text-[#2e37fe] text-sm">PS</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-base">
          <span className="font-bold text-[#191d23]">Priya Sharma</span>
          <span className="text-[#4b5563]">🇮🇳 India</span>
          <div className="size-1 rounded-full bg-[#9ca3af]" />
          <span className="text-[#4b5563]">$1,200.00 USD</span>
        </div>
      </motion.div>

      <motion.div {...a(0.13, 10)} className="flex flex-col gap-3 w-full">
        {/* Bank Transfer — disabled/incomplete */}
        <div className="bg-[#f3f4f6] rounded-xl border border-[#e5e7eb] p-5 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-bold text-base text-black">Bank Transfer</span>
            <div className="size-5 rounded-full border-2 border-[#9ca3af]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[#ff715b] text-sm">Bank details incomplete</p>
            <button className="text-left">
              <TealGradientText className="text-sm underline">Request details from contractor</TealGradientText>
            </button>
          </div>
        </div>

        {/* Clearline Wallet — AI suggested, selected */}
        <div className={`${dark ? "bg-[#161c26]" : "bg-white"} rounded-xl border-2 border-[#5eead4] p-5 flex flex-col gap-2`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-black">Clearline Wallet</span>
              <AiBadgeWrapper>AI Suggested</AiBadgeWrapper>
            </div>
            <div className="relative size-5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="10" fill="url(#walletGrad)" />
                <circle cx="10" cy="10" r="7.5" fill="white" />
                <defs>
                  <linearGradient id="walletGrad" x1="7" y1="15" x2="21" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EEAD4" />
                    <stop offset="0.55" stopColor="#00B5A6" />
                    <stop offset="1" stopColor="#0D8080" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-[#4b5563] text-sm">Suggested because bank details are pending</p>
        </div>
      </motion.div>

      <motion.div {...a(0.16, 10)} className="flex justify-end">
        <button
          onClick={() => onNavigate("review-send")}
          className="bg-[#2e37fe] text-white font-bold text-lg px-8 h-14 w-full rounded-full hover:opacity-90 transition-opacity"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}

// ── Screen: Review & Send ──────────────────────────────────────────

function ReviewAndSend({ onNavigate, onHighValue }: { onNavigate: (s: Screen) => void; onHighValue: () => void }) {
  const { dark } = useDark();
  const [countdown] = useState("14:59");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 overflow-auto min-h-full`}>
      <motion.div {...a(0.075, 10)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="font-semibold text-[#191d23] text-2xl">Review &amp; Send</h2>
        <button onClick={() => onNavigate("payouts-inbox")} className="bg-[#f9fafb] size-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <X size={20} className="text-[#4b5563]" />
        </button>
      </motion.div>

      <motion.div {...a(0.13, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border flex items-center gap-4 p-4`}>
        <div className="bg-[#e8eef4] size-10 rounded-full flex items-center justify-center shrink-0">
          <span className="font-bold text-[#2e37fe] text-sm">PS</span>
        </div>
        <div className="flex items-center gap-2 text-base">
          <span className={`font-bold ${dark ? "text-[#f0f3f8]" : "text-[#191d23]"}`}>Priya Sharma</span>
          <span className="text-[#4b5563]">🇮🇳 India</span>
          <div className="size-1 rounded-full bg-[#9ca3af]" />
          <span className="text-[#4b5563]">Bank Transfer</span>
        </div>
      </motion.div>

      <motion.div {...a(0.16, 10)} className={`${dark ? "bg-[#161c26]" : "bg-white"} rounded-2xl shadow-[0_12px_12px_rgba(0,0,0,0.05)] overflow-hidden`}>
        <div className="flex flex-col items-center gap-6 p-4 sm:p-10">
          <div className="flex items-center gap-8">
            <span className="font-bold text-[#4b5563] text-3xl">1,200.00 USD</span>
            <ArrowRight size={24} className="text-[#9ca3af]" />
            <span className="font-bold text-[#2e37fe] text-4xl">₹ 1,59,240 INR</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#9ca3af] text-sm">1 USD = 132.70 INR</p>
            <div className="bg-[#fef3c7] flex items-center gap-2 px-3 py-1.5 rounded-md">
              <Lock size={14} className="text-[#f59e0b]" />
              <span className="font-bold text-[#f59e0b] text-sm">Rate locked for {countdown}</span>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#e5e7eb]" />
        <div className="px-8 py-6 flex flex-col gap-4">
          <div className="flex justify-between text-sm"><span className="text-[#4b5563]">Transfer fee</span><span className="font-bold text-[#111827]">$2.00</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#4b5563]">FX margin (0.5%)</span><span className="font-bold text-[#111827]">$6.00</span></div>
          <div className="flex justify-between"><span className="font-bold text-base text-[#111827]">Total debit</span><span className="font-bold text-xl text-[#111827]">$1,208.00</span></div>
        </div>
      </motion.div>

      <motion.div {...a(0.19, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} border rounded-lg flex gap-4 items-start p-5`}>
        <AlertTriangle size={20} className="text-[#f59e0b] shrink-0 mt-0.5" />
        <p className="text-[#4b5563] text-sm leading-relaxed flex-1">
          India: TDS at 10% may be withheld by the recipient.
        </p>
      </motion.div>

      {showBanner && (
        <motion.div {...a(0.22, 10)} className="bg-[#f0fdfc] rounded-lg border-l-4 border-[#5eead4] flex gap-4 items-start p-5">
          <GradientSparkle size={24} />
          <div className="flex-1">
            <p className="font-bold text-[#191d23] text-base leading-6">You&apos;ve paid this contractor $1,200 on the 1st for 3 months</p>
            <p className="text-[#4b5768] text-sm mt-1">Make this recurring?</p>
            <div className="flex items-center gap-5 mt-3">
              <button onClick={() => onNavigate("set-recurring")} className="text-white text-xs font-bold px-4 py-2 rounded-md" style={{ background: "linear-gradient(135deg, #5EEAD4, #00B5A6, #0D8080)" }}>Set as Recurring</button>
              <button onClick={() => setShowBanner(false)} className="text-xs font-bold" style={{ background: "linear-gradient(135deg, #5EEAD4, #00B5A6, #0D8080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dismiss</button>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div {...a(0.25, 10)} className="flex flex-col items-end gap-3 w-full">
        <div className="flex items-center gap-4">
          <button onClick={onHighValue} className="text-xs text-[#9ca3af] border border-[#e5e7eb] px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">High-value demo ($12,500)</button>
          <button onClick={() => onNavigate("payout-sent")} className="bg-[#2e37fe] text-white font-bold text-lg px-6 h-14 rounded-full hover:opacity-90 transition-opacity">
            Send $1,200.00
          </button>
        </div>
        <p className="text-[#9ca3af] text-sm">Funds are debited from your USD account immediately.</p>
      </motion.div>
    </div>
  );
}

// ── Screen: Payout Sent ────────────────────────────────────────────

function PayoutSent({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} flex flex-col items-center justify-center py-16 px-16 min-h-full`}>
      <motion.div {...a(0.1, 10)} className="flex flex-col items-center gap-6 w-full">
        <div className="bg-[#16a34a] size-20 rounded-full flex items-center justify-center">
          <Check size={38} className="text-white" strokeWidth={3} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-[#111827] text-3xl">Payout Sent!</h2>
          <p className="text-[#4b5563] text-lg">$1,200.00 sent to Priya Sharma</p>
        </div>
        <div className="bg-[#f9fafb] flex items-center gap-2 px-3 py-1.5 rounded-md">
          <div className="size-2 rounded-sm bg-[#f59e0b]" />
          <span className="font-bold text-[#4b5563] text-sm">Processing</span>
        </div>
      </motion.div>

      <motion.div {...a(0.15, 10)} className="flex items-start w-full max-w-lg mt-10">
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="bg-[#16a34a] size-6 rounded-full flex items-center justify-center"><Check size={12} className="text-white" strokeWidth={2.5} /></div>
          <div className="text-center"><p className="font-bold text-[#111827] text-sm">Initiated</p><p className="text-[#9ca3af] text-xs">July 8, 2026</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 bg-[#00b3a4] w-full" /></div>
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="size-6 rounded-full border-2 border-[#00b3a4] bg-white" />
          <div className="text-center"><p className="font-bold text-[#111827] text-sm">Processing</p><p className="text-[#9ca3af] text-xs">2-3 business days</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 w-full border-t-2 border-dashed border-[#e5e7eb]" /></div>
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="size-6 rounded-full border-2 border-[#e5e7eb] bg-white" />
          <div className="text-center"><p className="font-bold text-[#9ca3af] text-sm">Est. Arrival</p><p className="text-[#9ca3af] text-xs">July 11, 2026</p></div>
        </div>
      </motion.div>

      <motion.div {...a(0.2, 10)} className="flex gap-4 mt-10 w-full max-w-2xl">
        <button onClick={() => onNavigate("set-recurring")} className="flex-1 h-12 rounded-full border border-[#e5e7eb] text-[#111827] font-bold text-sm hover:bg-gray-50 transition-colors">Schedule as recurring</button>
        <button className="flex-1 h-12 rounded-full border border-[#e5e7eb] text-[#111827] font-bold text-sm hover:bg-gray-50 transition-colors">View payout</button>
        <button onClick={() => onNavigate("payouts-inbox")} className="flex-1 h-12 rounded-full bg-[#2e37fe] text-white font-bold text-sm hover:opacity-90 transition-opacity">Create another payout</button>
      </motion.div>

      <motion.div {...a(0.25, 10)} className="mt-4">
        <button onClick={() => onNavigate("payouts-inbox")} className="text-[#4b5768] text-sm underline hover:opacity-80 transition-opacity">Go to dashboard</button>
      </motion.div>
    </div>
  );
}

// ── Screen: Bulk Payout Sent ───────────────────────────────────────

function BulkPayoutSent({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} flex flex-col items-center justify-center py-16 px-16 min-h-full`}>
      <motion.div {...a(0.1, 10)} className="flex flex-col items-center gap-6 w-full">
        <div className="bg-[#16a34a] size-20 rounded-full flex items-center justify-center">
          <Check size={38} className="text-white" strokeWidth={3} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-[#111827] text-3xl">Payout Sent!</h2>
          <p className="text-[#4b5563] text-lg">Payout sent to 3 Contractors</p>
        </div>
        <div className="bg-[#f9fafb] flex items-center gap-2 px-3 py-1.5 rounded-md">
          <div className="size-2 rounded-sm bg-[#f59e0b]" />
          <span className="font-bold text-[#4b5563] text-sm">Processing</span>
        </div>
      </motion.div>

      <motion.div {...a(0.15, 10)} className="flex items-start w-full max-w-lg mt-10">
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="bg-[#16a34a] size-6 rounded-full flex items-center justify-center"><Check size={12} className="text-white" strokeWidth={2.5} /></div>
          <div className="text-center"><p className="font-bold text-[#111827] text-sm">Initiated</p><p className="text-[#9ca3af] text-xs">July 8, 2026</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 bg-[#00b3a4] w-full" /></div>
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="size-6 rounded-full border-2 border-[#00b3a4] bg-white" />
          <div className="text-center"><p className="font-bold text-[#111827] text-sm">Processing</p><p className="text-[#9ca3af] text-xs">2-3 business days</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 w-full border-t-2 border-dashed border-[#e5e7eb]" /></div>
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="size-6 rounded-full border-2 border-[#e5e7eb] bg-white" />
          <div className="text-center"><p className="font-bold text-[#9ca3af] text-sm">Est. Arrival</p><p className="text-[#9ca3af] text-xs">July 11, 2026</p></div>
        </div>
      </motion.div>

      <motion.div {...a(0.2, 10)} className="flex gap-4 mt-10 w-full max-w-2xl">
        <button onClick={() => onNavigate("set-recurring")} className="flex-1 h-12 rounded-full border border-[#e5e7eb] text-[#111827] font-bold text-sm hover:bg-gray-50 transition-colors">Schedule as recurring</button>
        <button className="flex-1 h-12 rounded-full border border-[#e5e7eb] text-[#111827] font-bold text-sm hover:bg-gray-50 transition-colors">View payout</button>
        <button onClick={() => onNavigate("payouts-inbox")} className="flex-1 h-12 rounded-full bg-[#2e37fe] text-white font-bold text-sm hover:opacity-90 transition-opacity">Create another payout</button>
      </motion.div>

      <motion.div {...a(0.25, 10)} className="mt-4">
        <button onClick={() => onNavigate("payouts-inbox")} className="text-[#4b5768] text-sm underline hover:opacity-80 transition-opacity">Go to dashboard</button>
      </motion.div>
    </div>
  );
}

// ── Screen: Set Recurring ──────────────────────────────────────────

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function SetRecurring({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [freq, setFreq] = useState<"Weekly" | "Bi-weekly" | "Monthly">("Monthly");
  const [selectedDay, setSelectedDay] = useState(28);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleActivate = () => {
    setShowConfirm(false);
    setShowToast(true);
    setTimeout(() => { setShowToast(false); onNavigate("payouts-inbox"); }, 2400);
  };

  const offset = 3; // July 2026 starts Wednesday
  const daysInMonth = 31;
  const cells: (number | null)[] = [...Array(offset).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 min-h-full overflow-auto`}>
      <motion.div {...a(0.075, 12)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="font-bold text-[#191d23] text-2xl">Set Up Recurring Schedule</h2>
        <button onClick={() => onNavigate("payouts-inbox")} className="bg-[#f9fafb] size-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <X size={20} className="text-[#4b5563]" />
        </button>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="flex flex-col gap-3 w-full">
        <p className="text-[#4b5563] text-sm font-semibold">Frequency</p>
        <div className="flex gap-3">
          {(["Weekly", "Bi-weekly", "Monthly"] as const).map((f) => (
            <button key={f} onClick={() => setFreq(f)} className={`flex-1 py-3 rounded-full font-semibold text-base transition-all ${freq === f ? "bg-[#f0f6ff] border-2 border-[#2e37fe] text-[#2e37fe]" : `${dark ? "bg-[#161c26] border-[#232b38] text-[#98a2b5]" : "bg-white border-[#e5e7eb] text-[#4b5563]"} border`}`}>{f}</button>
          ))}
        </div>
      </motion.div>

      <motion.div {...a(0.13, 10)} className="flex flex-col gap-4">
        <p className="text-[#4b5563] text-sm font-semibold">Send on day</p>
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border p-6 flex flex-col gap-5`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-bold text-xs text-black">July 2026</span>
            <div className="flex items-center gap-4">
              <button className="text-[#4b5563] hover:text-black transition-colors"><ChevronLeft size={16} /></button>
              <button className="text-[#4b5563] hover:text-black transition-colors"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {DAYS.map((d) => <div key={d} className="text-center text-[#9ca3af] text-xs font-normal py-1">{d}</div>)}
            {cells.map((day, i) => {
              if (day === null) return <div key={`e-${i}`} />;
              const isSelected = day === selectedDay;
              const hasIndicator = day === 14;
              return (
                <button key={day} onClick={() => setSelectedDay(day)} className={`relative size-10 mx-auto flex items-center justify-center rounded-full text-xs transition-all ${isSelected ? "bg-[#2e37fe] text-white font-bold" : "text-[#323a45] hover:bg-gray-100"}`}>
                  {day}
                  {hasIndicator && !isSelected && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-[#2e37fe]" />}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div {...a(0.16, 10)} className="bg-[#f0fdfc] rounded-md border-l-4 border-[#5eead4] p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <GradientSparkle size={18} />
          <p className="text-[#111827] text-sm font-medium">Sending on the {selectedDay}th avoids weekend banking delays — contractor receives funds by the 1st.</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-[#e6f9f8] text-xs font-semibold px-2 py-1 rounded" style={{ color: "#0D8080" }}>🕐 Avoids weekends</span>
          <span className="bg-[#e6f9f8] text-xs font-semibold px-2 py-1 rounded" style={{ color: "#0D8080" }}>🇮🇳 India banking optimized</span>
        </div>
      </motion.div>

      <motion.div {...a(0.19, 10)} className="border-t border-[#e5e7eb] flex justify-end py-6 -mx-10 px-10">
        <button onClick={() => setShowConfirm(true)} className="bg-[#2e37fe] text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
          Save &amp; Activate Recurring
        </button>
      </motion.div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowConfirm(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
            className={`relative ${dark ? "bg-[#161c26]" : "bg-white"} rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.18)] w-[calc(100vw-32px)] max-w-[420px] p-8 flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#1a2332] text-[20px]">Activate Recurring Schedule?</p>
              <p className="text-[#4b5563] text-[15px] leading-[22px]">
                Priya Sharma will receive <span className="font-semibold text-[#1a2332]">$1,200.00</span> on the <span className="font-semibold text-[#1a2332]">{selectedDay}th</span> every month starting July 2026.
              </p>
            </div>
            <div className="bg-[#f9fafb] rounded-xl p-4 flex flex-col gap-2 text-[14px]">
              <div className="flex justify-between"><span className="text-[#6b7280]">Frequency</span><span className="font-semibold text-[#1a2332]">{freq}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7280]">Send on</span><span className="font-semibold text-[#1a2332]">{selectedDay}th of each month</span></div>
              <div className="flex justify-between"><span className="text-[#6b7280]">Recipient</span><span className="font-semibold text-[#1a2332]">Priya Sharma</span></div>
              <div className="flex justify-between"><span className="text-[#6b7280]">Amount</span><span className="font-semibold text-[#1a2332]">$1,200.00</span></div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 rounded-full border border-[#e5e7eb] text-[#374151] font-semibold text-[14px] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleActivate}
                className="flex-1 py-3 rounded-full bg-[#2e37fe] text-white font-semibold text-[14px] hover:opacity-90 transition-opacity"
              >
                Confirm &amp; Activate
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={`fixed bottom-6 right-6 z-50 ${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border p-5 flex items-start gap-4 w-[calc(100vw-48px)] max-w-[340px]`}
        >
          <div className="size-10 rounded-full bg-[#ecfdf5] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9.5L7 13.5L15 5" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[#1a2332] text-[15px]">Recurring Activated</p>
            <p className="text-[#6b7280] text-[13px] mt-0.5">Priya Sharma · ${(1200).toLocaleString()} on the {selectedDay}th · {freq}</p>
          </div>
          <button onClick={() => setShowToast(false)} className="text-[#9ca3af] hover:text-[#374151] transition-colors shrink-0 mt-0.5">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ── Screen: Bulk Approve ───────────────────────────────────────────

const bulkPayouts = [
  { initials: "PS", avatarBg: "#8b5cf6", name: "Priya Sharma", inv: "INV-2026-0042", date: "Jul 3, 2026", amount: 1200, anomaly: false },
  { initials: "AC", avatarBg: "#2e37fe", name: "Alex Chen", inv: "INV-2026-0038", date: "Jul 4, 2026", amount: 2400, anomaly: true, anomalyNote: "This payout is 340% higher than this contractor’s 6-month average", newBank: "New bank account added 2 days ago — verify before sending" },
  { initials: "SM", avatarBg: "#ec4899", name: "Sarah Miller", inv: "INV-2026-0045", date: "Jul 3, 2026", amount: 850, anomaly: false },
  { initials: "JL", avatarBg: "#10b981", name: "Jordan Lee", inv: "INV-2026-0051", date: "Jul 5, 2026", amount: 3100, anomaly: true, anomalyNote: "This payout is 210% higher than this contractor’s 6-month average", newBank: "New payment method linked 3 days ago — verify before sending" },
  { initials: "MW", avatarBg: "#f59e0b", name: "Marcus Webb", inv: "INV-2026-0047", date: "Jul 2, 2026", amount: 970, anomaly: false },
];

function BulkConfirmModal({ count, total, payouts, onCancel, onConfirm }: { count: number; total: number; payouts: typeof bulkPayouts; onCancel: () => void; onConfirm: () => void }) {
  const { dark } = useDark();
  const cardBg = dark ? "bg-[#1a2130]" : "bg-[#f9fafb]";
  const border = dark ? "border-[#232b38]" : "border-[#e5e7eb]";
  const textPrimary = dark ? "text-[#f0f3f8]" : "text-[#1a2332]";
  const textSub = dark ? "text-[#98a2b5]" : "text-[#6b7280]";
  const rowBorder = dark ? "border-[#232b38]" : "border-[#e5e7eb]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: EASE }}
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
        className={`relative ${dark ? "bg-[#161c26]" : "bg-white"} rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.22)] w-[calc(100vw-32px)] max-w-[480px] flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className={`px-7 pt-7 pb-5 border-b ${border}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className={`font-bold text-[20px] ${textPrimary}`}>Approve {count} payouts?</p>
              <p className={`text-[14px] ${textSub}`}>Review the payouts below before confirming. This action cannot be undone.</p>
            </div>
            <button onClick={onCancel} className={`${textSub} hover:opacity-70 transition-opacity shrink-0 mt-0.5`}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Payout list */}
        <div className="overflow-y-auto max-h-[280px]">
          {payouts.map((p, i) => (
            <div key={i} className={`flex items-center gap-4 px-7 py-3.5 ${i < payouts.length - 1 ? `border-b ${rowBorder}` : ""}`}>
              <div className="size-8 rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold" style={{ backgroundColor: p.avatarBg }}>{p.initials}</div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-[14px] ${textPrimary} truncate`}>{p.name}</p>
                <p className={`text-[12px] ${textSub}`}>{p.inv}</p>
              </div>
              <p className={`font-bold text-[14px] ${textPrimary} shrink-0`}>${p.amount.toLocaleString()}.00</p>
            </div>
          ))}
        </div>

        {/* Footer summary + actions */}
        <div className={`px-7 py-5 border-t ${border} flex flex-col gap-4`}>
          <div className={`${cardBg} border ${border} rounded-xl px-5 py-3.5 flex items-center justify-between`}>
            <div className="flex flex-col gap-0.5">
              <p className={`text-[11px] font-semibold uppercase tracking-wide ${textSub}`}>Total debit</p>
              <p className={`font-extrabold text-[22px] ${textPrimary}`}>${total.toLocaleString()}.00</p>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <p className={`text-[11px] font-semibold uppercase tracking-wide ${textSub}`}>Recipients</p>
              <p className={`font-bold text-[18px] ${textPrimary}`}>{count} contractors</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className={`flex-1 h-11 rounded-full border ${border} text-[14px] font-semibold ${textSub} hover:opacity-70 transition-opacity`}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-11 rounded-full bg-[#2e37fe] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm &amp; Send
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function BulkSuccessToast({ count, total, onDismiss }: { count: number; total: number; onDismiss: () => void }) {
  const { dark } = useDark();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`fixed bottom-6 right-6 z-50 ${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} border shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-2xl flex items-center gap-4 pl-4 pr-5 py-3.5 min-w-[300px]`}
    >
      <div className="bg-[#16a34a] size-8 rounded-full flex items-center justify-center shrink-0">
        <Check size={16} className="text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <p className="font-bold text-[#1a2332] text-sm">{count} payouts sent</p>
        <p className="text-[#9ca3af] text-xs">${total.toLocaleString()}.00 is being processed</p>
      </div>
      <button onClick={onDismiss} className="text-[#9ca3af] hover:text-[#374151] transition-colors shrink-0 ml-1">
        <X size={14} />
      </button>
    </motion.div>
  );
}

function BulkApprove({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const nonAnomalyIndices = bulkPayouts.map((p, i) => p.anomaly ? -1 : i).filter(i => i >= 0);
  const [selected, setSelected] = useState<Set<number>>(new Set(nonAnomalyIndices));
  const [showConfirm, setShowConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [anomalyPanel, setAnomalyPanel] = useState<number | null>(null);
  const [approvedAnomalies, setApprovedAnomalies] = useState<Set<number>>(new Set());
  const [rejectedIndices, setRejectedIndices] = useState<number[]>([]);

  const toggle = (i: number) => {
    if (bulkPayouts[i].anomaly && !approvedAnomalies.has(i)) return;
    setSelected((prev) => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });
  };
  const toggleAll = () => {
    const selectableIndices = bulkPayouts.map((p, i) => (!p.anomaly || approvedAnomalies.has(i)) && !rejectedIndices.includes(i) ? i : -1).filter(i => i >= 0);
    const allSelected = selectableIndices.every(i => selected.has(i));
    setSelected(allSelected ? new Set() : new Set(selectableIndices));
  };

  const selectedPayouts = bulkPayouts.filter((_, i) => selected.has(i));
  const total = selectedPayouts.reduce((s, p) => s + p.amount, 0);
  const count = selected.size;
  const selectableIndices = bulkPayouts.map((p, i) => (!p.anomaly || approvedAnomalies.has(i)) && !rejectedIndices.includes(i) ? i : -1).filter(i => i >= 0);
  const allChecked = selectableIndices.length > 0 && selectableIndices.every(i => selected.has(i));

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowToast(true);
    setTimeout(() => { setShowToast(false); onNavigate("bulk-payout-sent"); }, 2200);
  };

  const handleApproveAnyway = (idx: number) => {
    setApprovedAnomalies(prev => new Set([...prev, idx]));
    setSelected(prev => new Set([...prev, idx]));
    setAnomalyPanel(null);
  };

  const handleHold = () => {
    setAnomalyPanel(null);
  };

  const handleReject = (idx: number) => {
    setRejectedIndices(prev => [...prev, idx]);
    setSelected(prev => { const next = new Set(prev); next.delete(idx); return next; });
    setAnomalyPanel(null);
  };

  const panelData = anomalyPanel !== null ? bulkPayouts[anomalyPanel] : null;

  return (
    <div className="flex w-full h-full min-h-0">
      {/* Main scroll area */}
      <div className="flex-1 overflow-auto min-w-0">
        <div className={`${dark ? "bg-[#0d1117]" : ""} p-10 flex flex-col gap-10`}>
          {/* Page header — matches AdminPayoutBulkApprove-6/7 Frame14 */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15, ease: EASE }} className="flex items-center justify-between w-full shrink-0">
            <div className="flex items-center gap-4">
              <h1 className={`font-bold text-[24px] sm:text-[32px] leading-none ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>Payouts</h1>
              <span className="bg-[#eef0ff] text-[#2e37fe] text-[12px] font-semibold uppercase px-2.5 py-1 rounded-md">3 Pending</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate("payouts-inbox")}
                className={`font-bold text-[15px] px-6 py-3 rounded-full transition-colors ${dark ? "bg-transparent text-[#a5bbd1] border border-[#12122e]" : "bg-[#eef0ff] text-[#2e37fe] hover:bg-[#e0e0ff]"}`}
              >
                New Payout
              </button>
              <button
                className="bg-[#2e37fe] text-white font-bold text-[15px] px-6 py-3 rounded-full opacity-90"
              >
                Bulk Approve
              </button>
            </div>
          </motion.div>

          {/* Pending Review */}
          <motion.div {...a(0.07, 10)} className="flex flex-col gap-5">
            <p className={`font-semibold text-[24px] ${dark ? "text-[#98a2b5]" : "text-[#374151]"}`}>Pending Review</p>

            {/* Table outer */}
            <div className="flex flex-col w-full">
              {/* Bulk action bar */}
              <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-tl-xl rounded-tr-xl border border-b-0`}>
                <div className="flex items-center gap-4 px-5 py-3">
                  <button
                    onClick={toggleAll}
                    className="shrink-0 size-[18px] rounded-[4px] bg-[#2e37fe] flex items-center justify-center"
                  >
                    <div className="bg-white h-[2px] rounded-sm w-[10px]" />
                  </button>
                  <span className="font-semibold text-[#374151] text-[14px]">{count} of {bulkPayouts.length} selected</span>
                </div>
              </div>

              {/* Table body */}
              <div className={`rounded-bl-xl rounded-br-xl border ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"} overflow-hidden`}>
                {bulkPayouts.map((p, i) => {
                  if (rejectedIndices.includes(i)) return null;
                  const isApprovedAnomaly = p.anomaly && approvedAnomalies.has(i);
                  const isUnapprovedAnomaly = p.anomaly && !approvedAnomalies.has(i);
                  const visibleRows = bulkPayouts.filter((_, vi) => !rejectedIndices.includes(vi));
                  const isLast = visibleRows[visibleRows.length - 1] === p;
                  return (
                    <div
                      key={i}
                      onClick={() => isUnapprovedAnomaly && setAnomalyPanel(anomalyPanel === i ? null : i)}
                      className={`relative w-full ${isUnapprovedAnomaly ? "bg-[#fef2f1] cursor-pointer hover:bg-[#fde8e6] transition-colors" : dark ? "bg-[#161c26]" : "bg-white"} ${!isLast ? `border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}` : ""}`}
                    >
                      {isUnapprovedAnomaly && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f05a4a]" />}
                      <div className="flex items-center gap-6 px-5 py-[16px]">
                        {/* Checkbox */}
                        {isUnapprovedAnomaly ? (
                          <div className="bg-white opacity-50 size-[18px] rounded-[4px] border border-[#e5e7eb] shrink-0" />
                        ) : (
                          <button
                            onClick={(e) => { e.stopPropagation(); toggle(i); }}
                            className="shrink-0 size-[18px] rounded-[4px] flex items-center justify-center bg-[#2e37fe]"
                          >
                            {selected.has(i) && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d={SVG_CHECK} stroke="white" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            )}
                          </button>
                        )}
                        {/* Avatar */}
                        <div
                          className="size-8 rounded-full flex items-center justify-center shrink-0 text-white text-[12px] font-semibold"
                          style={{ backgroundColor: p.avatarBg }}
                        >
                          {p.initials}
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold text-[15px] whitespace-nowrap ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>{p.name}</span>
                            {isUnapprovedAnomaly && (
                              <span className="inline-flex items-center gap-1 bg-[#fee2e2] text-[#f05a4a] text-[11px] font-bold uppercase px-2 py-1 rounded-full shrink-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                                  <g clipPath={`url(#clip-anomaly-${i})`}>
                                    <path d={SVG_ALERT_SM} stroke="#F05A4A" strokeWidth="2" strokeLinecap="round" />
                                  </g>
                                  <defs><clipPath id={`clip-anomaly-${i}`}><rect width="12" height="12" fill="white" /></clipPath></defs>
                                </svg>
                                Anomaly
                              </span>
                            )}
                          </div>
                          <span className="text-[#9ca3af] text-[13px]">{p.inv}</span>
                        </div>
                        {/* Date */}
                        <span className={`text-[14px] w-[120px] shrink-0 ${dark ? "text-[#98a2b5]" : "text-[#374151]"}`}>{p.date}</span>
                        {/* Amount */}
                        <span className={`font-bold text-[15px] w-[100px] shrink-0 ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>${p.amount.toLocaleString()}.00</span>
                        {/* Doc icon */}
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d={SVG_ICON_DOC} stroke="#9CA3AF" strokeWidth="2" />
                          </svg>
                        </div>
                        {/* Review button — only on unapproved anomalies */}
                        {isUnapprovedAnomaly ? (
                          <button
                            onClick={(e) => { e.stopPropagation(); setAnomalyPanel(anomalyPanel === i ? null : i); }}
                            className="bg-[#eef0ff] text-[#2e37fe] font-semibold text-[14px] px-5 py-[10px] rounded-full shrink-0 hover:bg-[#dbeafe] transition-colors"
                          >
                            Review
                          </button>
                        ) : (
                          <div className="w-[88px] shrink-0" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Approve Selected button */}
            <div className="flex justify-end">
              <button
                onClick={() => count > 0 && setShowConfirm(true)}
                className="bg-[#2e37fe] text-white font-bold text-[16px] leading-6 px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Approve Selected
              </button>
            </div>
          </motion.div>

          {/* Rejected */}
          {rejectedIndices.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} className="flex flex-col gap-4">
              <p className="font-semibold text-[#9ca3af] text-[16px]">Rejected</p>
              <div className="flex flex-col rounded-xl border border-[#e5e7eb] overflow-hidden">
                {rejectedIndices.map((idx, ri) => {
                  const p = bulkPayouts[idx];
                  return (
                    <div key={idx} className={`${dark ? "bg-[#161c26]" : "bg-white"} flex items-center gap-6 px-5 py-[16px] ${ri < rejectedIndices.length - 1 ? `border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}` : ""}`}>
                      <div className="shrink-0 size-[18px] rounded-[4px] border border-[#e5e7eb] bg-white" />
                      <div className="size-8 rounded-full flex items-center justify-center shrink-0 text-white text-[12px] font-semibold opacity-50" style={{ backgroundColor: p.avatarBg }}>{p.initials}</div>
                      <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                        <span className="font-semibold text-[#9ca3af] text-[15px] whitespace-nowrap">{p.name}</span>
                        <span className="text-[#d1d5db] text-[13px]">{p.inv}</span>
                      </div>
                      <span className="text-[#d1d5db] text-[14px] w-[120px] shrink-0">{p.date}</span>
                      <span className="font-bold text-[#9ca3af] text-[15px] w-[100px] shrink-0">${p.amount.toLocaleString()}.00</span>
                      <div className="relative shrink-0 size-[20px] opacity-30">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={SVG_ICON_DOC} stroke="#9CA3AF" strokeWidth="2" />
                        </svg>
                      </div>
                      <button className="border border-[#e5e7eb] text-[#374151] font-semibold text-[14px] px-5 py-[10px] rounded-full shrink-0 hover:bg-gray-50 transition-colors">
                        Notify
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Completed This Month */}
          <motion.div {...a(0.12, 10)} className="flex flex-col gap-4 opacity-60">
            <p className="font-semibold text-[#9ca3af] text-[16px]">Completed This Month</p>
            <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-lg border`}>
              <div className="flex items-center gap-6 p-4">
                <div className="size-8 rounded-full bg-[#9ca3af] flex items-center justify-center text-white text-xs font-semibold shrink-0">DB</div>
                <span className="flex-1 font-semibold text-black text-[14px]">David Beck</span>
                <span className="text-[#9ca3af] text-[14px]">Jul 1, 2026</span>
                <span className="font-bold text-black text-[14px] text-right w-[100px]">$1,500.00</span>
                <span className="bg-[#ecfdf5] text-[#16a34a] font-semibold text-[12px] uppercase px-2.5 py-1 rounded-md">Sent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Anomaly Side Panel */}
      {panelData && (
        <motion.div
          key={anomalyPanel}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className={`w-full sm:w-[320px] shrink-0 ${dark ? "bg-[#1e2636] border-[#232b38]" : "bg-white border-[#e5e7eb]"} border-l flex flex-col h-full shadow-[-4px_0px_6px_rgba(0,0,0,0.03)]`}
        >
          {/* Panel header */}
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className={`font-bold text-[18px] ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>Anomaly Detected</p>
              <button onClick={() => setAnomalyPanel(null)} className="text-[#9ca3af] hover:text-[#374151] transition-colors shrink-0">
                <div className="relative size-[16px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4142 17.4142">
                    <path d={SVG_CLOSE} stroke="#9CA3AF" strokeWidth="2" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className={`font-semibold text-[16px] ${dark ? "text-[#f0f3f8]" : "text-[#1a2332]"}`}>{panelData.name}</p>
              <p className="text-[#9ca3af] text-[13px]">{panelData.inv}</p>
            </div>
          </div>

          {/* Panel body */}
          <div className="px-6 flex flex-col gap-4">
            {/* Red alert card — matches AdminPayoutBulkApprove-7 AlertCard */}
            <div className="bg-[#fef2f1] rounded-lg border border-[#fecaca] p-3 flex gap-3 items-start">
              <div className="relative shrink-0 size-[16px] mt-px">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={SVG_ALERT_LG} stroke="#F05A4A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[#f05a4a] text-[13px] font-medium leading-[18px] flex-1 min-w-px">{panelData.anomalyNote ?? ""}</p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
                  <line stroke="#E5E7EB" x2="272" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            {/* Amber alert card — matches AdminPayoutBulkApprove-7 AlertCard1 */}
            <div className="bg-[#fffbeb] rounded-lg border border-[#fde68a] p-3 flex gap-3 items-start">
              <div className="relative shrink-0 size-[16px] mt-px">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={SVG_SHIELD} stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[#d97706] text-[13px] font-medium leading-[18px] flex-1 min-w-px">{panelData.newBank ?? ""}</p>
            </div>
          </div>

          {/* Panel footer */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => anomalyPanel !== null && handleReject(anomalyPanel)}
                className="bg-[#1a2332] text-white font-semibold text-[14px] py-3 rounded-full w-full hover:opacity-90 transition-opacity"
              >
                Reject
              </button>
              <button
                onClick={handleHold}
                className="border border-[#e5e7eb] text-[#374151] font-semibold text-[14px] py-3 rounded-full w-full hover:bg-gray-50 transition-colors"
              >
                Hold
              </button>
              <button
                onClick={() => anomalyPanel !== null && handleApproveAnyway(anomalyPanel)}
                className="border border-[#f05a4a] text-[#f05a4a] font-semibold text-[14px] py-3 rounded-full w-full hover:bg-[#fef2f1] transition-colors"
              >
                Approve anyway
              </button>
            </div>
            <p className="text-[#9ca3af] text-[12px] text-center">Flagged rows are excluded from bulk approval</p>
          </div>
        </motion.div>
      )}

      {showConfirm && (
        <BulkConfirmModal
          count={count}
          total={total}
          payouts={selectedPayouts}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
        />
      )}

      {showToast && (
        <BulkSuccessToast
          count={count}
          total={total}
          onDismiss={() => { setShowToast(false); onNavigate("bulk-payout-sent"); }}
        />
      )}
    </div>
  );
}

// ── Screen: Payout Failed Detail ───────────────────────────────────

function PayoutFailedDetail({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} flex flex-col items-center py-16 px-10 min-h-full overflow-auto`}>
      <motion.div {...a(0.1, 10)} className="flex flex-col items-center gap-6">
        <div className="bg-[#ff715b] size-20 rounded-full flex items-center justify-center">
          <X size={32} className="text-white" strokeWidth={3} />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-extrabold text-[#1a2332] text-[34px]">Payout Failed</h2>
          <p className="text-[#4b5563] text-lg w-full max-w-[540px]">₹1,59,240 to Priya Sharma was rejected by the beneficiary bank.</p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div {...a(0.13, 10)} className="flex items-start w-full max-w-[540px] mt-10">
        <div className="flex flex-col items-center gap-3 flex-1 w-24">
          <div className="bg-[#16a34a] size-6 rounded-full flex items-center justify-center"><Check size={12} className="text-white" strokeWidth={2.5} /></div>
          <div className="text-center"><p className="font-semibold text-[#1a2332] text-sm">Initiated</p><p className="text-[#9ca3af] text-xs">July 3, 2026</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 bg-[#007b6b] w-full" /></div>
        <div className="flex flex-col items-center gap-3 flex-1 w-24">
          <div className="bg-[#16a34a] size-6 rounded-full flex items-center justify-center"><Check size={12} className="text-white" strokeWidth={2.5} /></div>
          <div className="text-center"><p className="font-semibold text-[#1a2332] text-sm">Processing</p><p className="text-[#9ca3af] text-xs">July 3, 2026</p></div>
        </div>
        <div className="flex-1 pt-3"><div className="h-0.5 bg-[#ff715b] w-full" /></div>
        <div className="flex flex-col items-center gap-3 flex-1 w-36">
          <div className="bg-[#ff715b] size-6 rounded-full flex items-center justify-center"><X size={10} className="text-white" strokeWidth={2.5} /></div>
          <div className="text-center"><p className="font-semibold text-[#ff715b] text-sm">Failed</p><p className="text-[#9ca3af] text-xs">July 4, 2026 · 09:14 AM</p></div>
        </div>
      </motion.div>

      {/* What happened */}
      <motion.div {...a(0.16, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border p-5 flex flex-col gap-4 w-full max-w-[540px] mt-10`}>
        <p className="font-bold text-[#9ca3af] text-xs uppercase">What Happened</p>
        <div className="flex flex-col gap-2">
          <p className="text-[#1a2332] text-sm leading-relaxed">The transfer was rejected by HDFC Bank. This is typically caused by an account number mismatch or account closure. Your funds were not debited.</p>
          <p className="text-[#4b5563] text-sm">If a debit did occur, funds will be returned within 3–5 business days.</p>
        </div>
        <div className="h-px bg-[#e5e7eb]" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-[#4b5563] text-sm">Reference ID</span>
          <button className="flex items-center gap-2 font-bold text-[#1a2332] text-sm hover:opacity-70 transition-opacity">
            PAY-2026-0047183
            <Copy size={14} className="text-[#9ca3af]" />
          </button>
        </div>
      </motion.div>

      {/* AI retry card */}
      <motion.div {...a(0.19, 10)} className="bg-[#f0fdfc] border border-[#5eead4] rounded-xl p-6 flex flex-col gap-5 w-full max-w-[540px] mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GradientSparkle size={20} />
            <p className="font-bold text-[#083117] text-base">Retry via Global Wallet</p>
          </div>
          <HelpCircle size={16} className="text-[#9ca3af]" />
        </div>
        <p className="text-[#4b5563] text-sm">98% success rate to this contractor · Arrives in ~2 hours · +$1.50 vs. bank transfer</p>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate("payouts-inbox")}
            className="flex-1 py-3 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(9deg, #5EEAD4 29%, #00B5A6 68%, #0D8080 100%)" }}
          >
            Retry via Wallet
          </button>
          <button
            onClick={() => onNavigate("payment-method")}
            className="flex-1 py-3 rounded-full border border-[#5eead4] text-sm font-semibold"
          >
            <TealGradientText>Retry same method</TealGradientText>
          </button>
        </div>
        <button className="text-[#9ca3af] text-[13px] underline text-center font-semibold">Contact support</button>
      </motion.div>

      <motion.div {...a(0.22, 10)} className="mt-6">
        <button onClick={() => onNavigate("payouts-inbox")} className="text-[#9ca3af] text-sm underline hover:opacity-70 transition-opacity">Go to dashboard</button>
      </motion.div>
    </div>
  );
}

// ── Screen: Approval Policies ──────────────────────────────────────

const approvalPolicies = [
  { id: 1, name: "Recurring Under $2K", desc: "Auto-approve recurring under $2,000 with 6+ months clean history", active: true, created: "Jul 1, 2026", lastTriggered: "2 hours ago", matches: 142 },
  { id: 2, name: "Tenure Gate Tier 1", desc: "Flag payouts to contractors with less than 2 months of history", active: true, created: "Jun 14, 2026", lastTriggered: "1 day ago", matches: 28 },
  { id: 3, name: "High Value Executive Escalation", desc: "Require manager approval for any single payout above $10,000", active: true, created: "May 28, 2026", lastTriggered: "3 days ago", matches: 7 },
  { id: 4, name: "LATAM Geofence Route", desc: "Auto-approve bank transfers to MX/BR under $1,500", active: false, created: "Apr 12, 2026", lastTriggered: "Never", matches: 0 },
  { id: 5, name: "Expiring Docs Hold", desc: "Block payout execution if W-8BEN is within 15 days of expiration", active: true, created: "Mar 3, 2026", lastTriggered: "5 hours ago", matches: 11 },
];

function PolicyToggle({ on }: { on: boolean }) {
  const [active, setActive] = useState(on);
  return (
    <button
      onClick={() => setActive(v => !v)}
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${active ? "bg-[#2e37fe]" : "bg-[#e5e7eb]"}`}
    >
      <span className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-all duration-200 ${active ? "left-[22px]" : "left-0.5"}`} />
    </button>
  );
}

function ApprovalPoliciesPage({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [filter, setFilter] = useState<"all" | "active" | "paused">("all");
  const bg = dark ? "bg-[#0d1117]" : "bg-[#f8f9fa]";
  const card = dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]";
  const textPrimary = dark ? "text-[#f0f3f8]" : "text-[#191d23]";
  const textSub = dark ? "text-[#98a2b5]" : "text-[#9ca3af]";
  const textBody = dark ? "text-[#98a2b5]" : "text-[#374151]";

  const visible = approvalPolicies.filter(p =>
    filter === "all" ? true : filter === "active" ? p.active : !p.active
  );

  return (
    <div className={`${bg} overflow-auto h-full`}>
      <motion.div {...a(0.075, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e4ebf1]"} border-b h-14 flex items-center px-6 shrink-0`}>
        <p className={`font-bold text-[22px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Settings</p>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className={`font-bold text-[24px] sm:text-[32px] ${textPrimary}`}>Approval Policies</p>
            <span className="bg-[#eef0ff] text-[#2e37fe] font-semibold text-[12px] px-3 py-1 rounded-md uppercase tracking-wide">4 Active</span>
          </div>
          <button
            onClick={() => onNavigate("create-policy")}
            className="bg-[#2e37fe] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Plus size={15} />
            Create Policy
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 items-center">
          {(["all", "active", "paused"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${filter === f ? "bg-[#2e37fe] text-white" : `${dark ? "text-[#98a2b5] hover:bg-[#1a2130]" : "text-[#374151] hover:bg-gray-100"}`}`}
            >
              {f === "all" ? "All Policies" : f === "active" ? "Active (4)" : "Paused (1)"}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className={`${card} border rounded-xl overflow-hidden`}>
          <div className="overflow-x-auto">
            {/* Header */}
            <div className={`${dark ? "bg-[#1a2130]" : "bg-[#f7f8fa]"} flex items-center gap-6 px-5 py-3 text-[11px] font-semibold uppercase ${textSub} min-w-[600px]`}>
              <span className="flex-1 min-w-0">Policy Details</span>
              <span className="w-[80px] shrink-0">Status</span>
              <span className="w-[100px] shrink-0 hidden sm:block">Created</span>
              <span className="w-[120px] shrink-0 hidden md:block">Last Triggered</span>
              <span className="w-[70px] shrink-0 text-right">Matches</span>
              <span className="w-[40px] shrink-0" />
            </div>
            {visible.map((p, i) => (
              <div
                key={p.id}
                className={`flex items-center gap-6 px-5 py-4 sm:py-5 cursor-pointer transition-colors min-w-[600px] ${dark ? "hover:bg-[#1a2130]" : "hover:bg-[#fafafa]"} ${i < visible.length - 1 ? `border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}` : ""}`}
                onClick={() => onNavigate("policy-detail")}
              >
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <span className={`font-semibold text-[14px] sm:text-[15px] ${textPrimary} truncate`}>{p.name}</span>
                  <span className={`text-[12px] sm:text-[13px] ${textSub} truncate`}>{p.desc}</span>
                </div>
                <div className="w-[80px] shrink-0" onClick={e => e.stopPropagation()}>
                  <PolicyToggle on={p.active} />
                </div>
                <span className={`w-[100px] shrink-0 text-[13px] ${textBody} hidden sm:block`}>{p.created}</span>
                <span className={`w-[120px] shrink-0 text-[13px] ${textBody} hidden md:block`}>{p.lastTriggered}</span>
                <span className={`w-[70px] shrink-0 text-right font-bold text-[14px] ${textPrimary}`}>{p.matches}</span>
                <div className="w-[40px] shrink-0 flex justify-end">
                  <ArrowRight size={16} className="text-[#2e37fe]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Screen: Create Policy ───────────────────────────────────────────

type Condition = { field: string; op: string; value: string };

const conditionFields = ["amount", "frequency", "contractor_history", "country", "payment_method"];
const conditionOps: Record<string, string[]> = {
  amount: ["<", "<=", ">", ">=", "="],
  frequency: ["=", "!="],
  contractor_history: [">=", "<=", ">", "<"],
  country: ["=", "!="],
  payment_method: ["=", "!="],
};
const policyActions = [
  { id: "auto-approve", label: "Auto-approve" },
  { id: "flag", label: "Flag for review" },
  { id: "manager", label: "Require manager approval" },
  { id: "block", label: "Block payout" },
];

function CreatePolicyPage({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [name, setName] = useState("Recurring Under $2K");
  const [desc, setDesc] = useState("Auto-approve recurring under $2,000 with 6+ months clean history");
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [conditions, setConditions] = useState<Condition[]>([
    { field: "amount", op: "<", value: "$2,000.00" },
    { field: "frequency", op: "=", value: "recurring" },
    { field: "contractor_history", op: ">=", value: "6 months" },
  ]);
  const [action, setAction] = useState("auto-approve");
  const [backtestRan, setBacktestRan] = useState(true);

  const bg = dark ? "bg-[#0d1117]" : "bg-[#f8f9fa]";
  const card = dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]";
  const textPrimary = dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]";
  const textSub = dark ? "text-[#98a2b5]" : "text-[#9ca3af]";
  const inputCls = `w-full px-4 py-3 rounded-lg border text-[14px] font-medium outline-none transition-colors ${dark ? "bg-[#1a2130] border-[#232b38] text-[#f0f3f8] focus:border-[#2e37fe]" : "bg-white border-[#e5e7eb] text-[#1a1d2e] focus:border-[#2e37fe]"}`;
  const selectCls = `px-3 py-2 rounded-lg border text-[13px] font-medium outline-none ${dark ? "bg-[#1a2130] border-[#232b38] text-[#f0f3f8]" : "bg-white border-[#e5e7eb] text-[#374151]"}`;

  const updateCondition = (i: number, key: keyof Condition, val: string) => {
    setConditions(prev => prev.map((c, idx) => idx === i ? { ...c, [key]: val } : c));
  };
  const removeCondition = (i: number) => setConditions(prev => prev.filter((_, idx) => idx !== i));
  const addCondition = () => setConditions(prev => [...prev, { field: "amount", op: "<", value: "" }]);

  return (
    <div className={`${bg} overflow-auto h-full`}>
      <motion.div {...a(0.075, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e4ebf1]"} border-b h-14 flex items-center px-6 shrink-0`}>
        <p className={`font-bold text-[22px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Settings</p>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="p-4 sm:p-8 lg:p-10 flex flex-col gap-6 max-w-full max-w-[820px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className={`font-bold text-[24px] sm:text-[32px] ${textPrimary}`}>Create Approval Policy</p>
          <button onClick={() => onNavigate("approval-policies")} className={`border px-4 py-2 rounded-lg font-semibold text-[14px] transition-colors ${dark ? "border-[#232b38] text-[#98a2b5] hover:bg-[#1a2130]" : "border-[#e5e7eb] text-[#374151] hover:bg-gray-50"}`}>
            Exit Builder
          </button>
        </div>

        {/* Form card */}
        <div className={`${card} border rounded-xl p-8 flex flex-col gap-8`}>

          {/* Name & Description */}
          <div className="flex flex-col gap-3">
            <p className={`font-semibold text-[11px] uppercase tracking-wide ${textSub}`}>Policy Name &amp; Description</p>
            <input className={inputCls} value={name} onChange={e => setName(e.target.value)} placeholder="Policy name" />
            <input className={inputCls} value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
          </div>

          <div className={`border-t ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}`} />

          {/* Conditions */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className={`font-semibold text-[11px] uppercase tracking-wide ${textSub}`}>If Conditions Match</p>
              <div className="flex gap-1">
                <button className="bg-[#2e37fe] text-white font-semibold text-[11px] px-3 py-1 rounded-md">AND</button>
                <button className={`font-semibold text-[11px] px-3 py-1 rounded-md ${dark ? "text-[#98a2b5] hover:bg-[#1a2130]" : "text-[#374151] hover:bg-gray-100"}`}>OR</button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {conditions.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <select className={`${selectCls} flex-1`} value={c.field} onChange={e => updateCondition(i, "field", e.target.value)}>
                    {conditionFields.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  <select className={`${selectCls} w-[80px]`} value={c.op} onChange={e => updateCondition(i, "op", e.target.value)}>
                    {(conditionOps[c.field] ?? ["="]).map(op => <option key={op} value={op}>{op}</option>)}
                  </select>
                  <input
                    className={`${selectCls} flex-1`}
                    value={c.value}
                    onChange={e => updateCondition(i, "value", e.target.value)}
                    placeholder="value"
                  />
                  <button onClick={() => removeCondition(i)} className={`size-7 rounded-md flex items-center justify-center ${dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#9ca3af]"}`}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <button onClick={addCondition} className={`flex items-center gap-2 font-semibold text-[13px] border px-4 py-2 rounded-lg w-fit transition-colors ${dark ? "border-[#232b38] text-[#98a2b5] hover:bg-[#1a2130]" : "border-[#e5e7eb] text-[#374151] hover:bg-gray-50"}`}>
              <Plus size={14} />
              Add Condition
            </button>
          </div>

          <div className={`border-t ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}`} />

          {/* Action */}
          <div className="flex flex-col gap-4">
            <p className={`font-semibold text-[11px] uppercase tracking-wide ${textSub}`}>Then Take Action</p>
            <div className="flex flex-col gap-3">
              {policyActions.map(act => (
                <label key={act.id} className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setAction(act.id)}
                    className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${action === act.id ? "border-[#2e37fe]" : dark ? "border-[#4a5568]" : "border-[#d1d5db]"}`}
                  >
                    {action === act.id && <div className="size-2 rounded-full bg-[#2e37fe]" />}
                  </div>
                  <span className={`text-[14px] font-medium ${textPrimary}`}>{act.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={`border-t ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}`} />

          {/* Backtest */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <p className={`font-semibold text-[14px] ${textPrimary}`}>Backtest Rule</p>
                <p className={`text-[13px] ${textSub}`}>See matches against the last 30 days of data.</p>
              </div>
              <button
                onClick={() => setBacktestRan(true)}
                className={`border px-4 py-2 rounded-lg font-semibold text-[13px] transition-colors ${dark ? "border-[#232b38] text-[#98a2b5] hover:bg-[#1a2130]" : "border-[#e5e7eb] text-[#374151] hover:bg-gray-50"}`}
              >
                Run Test
              </button>
            </div>
            {backtestRan && (
              <div className={`${dark ? "bg-[#0d1f1e] border-[#00ccba33]" : "bg-[#f0fdfb] border-[#99f6e4]"} border rounded-lg px-4 py-3`}>
                <span className={`font-bold text-[14px] ${dark ? "text-[#00ccba]" : "text-[#0d9488]"}`}>18 payouts</span>
                <span className={`text-[14px] ${dark ? "text-[#98a2b5]" : "text-[#374151]"}`}> would have auto-approved ($21,600 total value)</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3">
          <button onClick={() => onNavigate("approval-policies")} className={`border px-5 py-2.5 rounded-lg font-semibold text-[14px] transition-colors ${dark ? "border-[#232b38] text-[#98a2b5] hover:bg-[#1a2130]" : "border-[#e5e7eb] text-[#374151] hover:bg-gray-50"}`}>
            Save as Draft
          </button>
          <button onClick={() => setShowActivateModal(true)} className="bg-[#2e37fe] text-white font-semibold text-[14px] px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            Save &amp; Activate
          </button>
        </div>
      </motion.div>

      {/* Activation confirm modal */}
      {showActivateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowActivateModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.04, ease: EASE }}
            className={`relative ${dark ? "bg-[#161c26] border border-[#232b38]" : "bg-white"} rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.22)] w-[calc(100vw-32px)] max-w-[460px] p-8 flex flex-col gap-6`}
          >
            {/* Icon */}
            <div className="size-12 rounded-xl bg-[#eef0ff] flex items-center justify-center">
              <CheckCircle2 size={24} className="text-[#2e37fe]" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <p className={`font-bold text-[20px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Activate this policy?</p>
              <p className={`text-[14px] leading-relaxed ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>
                <span className={`font-semibold ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>{name || "This policy"}</span> will go live immediately and begin evaluating incoming payouts against your conditions.
              </p>
            </div>

            {/* Summary pill */}
            <div className={`${dark ? "bg-[#1a2130] border-[#232b38]" : "bg-[#f7f8fa] border-[#e5e7eb]"} border rounded-xl px-5 py-4 flex flex-col gap-2`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className={`text-[12px] font-semibold uppercase tracking-wide ${dark ? "text-[#98a2b5]" : "text-[#9ca3af]"}`}>Policy</span>
                <span className={`font-semibold text-[13px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>{name || "—"}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className={`text-[12px] font-semibold uppercase tracking-wide ${dark ? "text-[#98a2b5]" : "text-[#9ca3af]"}`}>Action</span>
                <span className={`font-semibold text-[13px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>{policyActions.find(a => a.id === action)?.label ?? "—"}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className={`text-[12px] font-semibold uppercase tracking-wide ${dark ? "text-[#98a2b5]" : "text-[#9ca3af]"}`}>Conditions</span>
                <span className={`font-semibold text-[13px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>{conditions.length} rule{conditions.length !== 1 ? "s" : ""}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowActivateModal(false)}
                className={`flex-1 h-11 rounded-full border font-semibold text-[14px] transition-opacity hover:opacity-70 ${dark ? "border-[#232b38] text-[#98a2b5]" : "border-[#e5e7eb] text-[#374151]"}`}
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowActivateModal(false); onNavigate("approval-policies"); }}
                className="flex-1 h-11 rounded-full bg-[#2e37fe] text-white font-semibold text-[14px] hover:opacity-90 transition-opacity"
              >
                Confirm &amp; Activate
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// ── Screen: Policy Detail ───────────────────────────────────────────

const policyMatchedPayouts = [
  { initials: "PS", avatarBg: "#2e37fe", name: "Priya Sharma", inv: "INV-2026-0042", date: "Jul 5, 2026", amount: "$1,200.00", action: "AUTO-APPROVED", actionColor: "text-[#16a34a]" },
  { initials: "AC", avatarBg: "#0891b2", name: "Alex Chen",   inv: "INV-2026-0038", date: "Jul 4, 2026", amount: "$2,400.00", action: "FLAGGED",       actionColor: "text-[#d97706]" },
  { initials: "SM", avatarBg: "#7c3aed", name: "Sarah Miller",inv: "INV-2026-0035", date: "Jul 3, 2026", amount: "$850.00",   action: "AUTO-APPROVED", actionColor: "text-[#16a34a]" },
  { initials: "DB", avatarBg: "#0f766e", name: "David Beck",  inv: "INV-2026-0031", date: "Jul 1, 2026", amount: "$1,500.00", action: "AUTO-APPROVED", actionColor: "text-[#16a34a]" },
  { initials: "JL", avatarBg: "#c2410c", name: "Jordan Lee",  inv: "INV-2026-0029", date: "Jun 28, 2026", amount: "$3,100.00", action: "FLAGGED",      actionColor: "text-[#d97706]" },
  { initials: "MW", avatarBg: "#2e37fe", name: "Marcus Webb", inv: "INV-2026-0025", date: "Jun 25, 2026", amount: "$970.00",  action: "AUTO-APPROVED", actionColor: "text-[#16a34a]" },
];

function PolicyDetailPage({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const bg = dark ? "bg-[#0d1117]" : "bg-[#f8f9fa]";
  const card = dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]";
  const textPrimary = dark ? "text-[#f0f3f8]" : "text-[#191d23]";
  const textSub = dark ? "text-[#98a2b5]" : "text-[#9ca3af]";
  const textBody = dark ? "text-[#98a2b5]" : "text-[#374151]";
  const btnBorder = dark ? "border-[#232b38] text-[#98a2b5] hover:bg-[#1a2130]" : "border-[#e5e7eb] text-[#374151] hover:bg-gray-50";

  const kpis = [
    { label: "Total Matched",       value: "183",      color: textPrimary },
    { label: "Total Auto-Approved", value: "142",      color: "text-[#16a34a]" },
    { label: "Total Flagged",       value: "41",       color: "text-[#d97706]" },
    { label: "Est. Time Saved",     value: "11.8 hours", color: "text-[#2e37fe]" },
  ];

  return (
    <div className={`${bg} overflow-auto h-full`}>
      <motion.div {...a(0.075, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e4ebf1]"} border-b h-14 flex items-center px-6 shrink-0`}>
        <p className={`font-bold text-[22px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Settings</p>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className={`font-bold text-[24px] sm:text-[32px] ${textPrimary}`}>Recurring Under $2K</p>
            <span className="bg-[#dcfce7] text-[#16a34a] font-bold text-[11px] px-3 py-1 rounded-md uppercase tracking-wide">Active</span>
          </div>
          <div className="flex items-center gap-3">
            <button className={`border px-4 py-2 rounded-lg font-semibold text-[14px] transition-colors ${btnBorder}`}>Pause Policy</button>
            <button onClick={() => onNavigate("create-policy")} className="bg-[#2e37fe] text-white font-semibold text-[14px] px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">Edit Policy</button>
          </div>
        </div>

        {/* Rule logic summary */}
        <div className={`${card} border rounded-xl p-6 flex flex-col gap-5`}>
          <p className={`font-semibold text-[11px] uppercase tracking-wide ${textSub}`}>Rule Logic Summary</p>
          <p className={`text-[15px] font-medium ${textPrimary}`}>
            IF amount &lt; $2,000 AND frequency = &apos;recurring&apos; AND contractor_history &gt;= 6 months THEN Auto-approve.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-0.5">
              <span className={`text-[12px] ${textSub}`}>Created by</span>
              <span className={`font-semibold text-[13px] ${textPrimary}`}>Priya Sharma</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className={`text-[12px] ${textSub}`}>Last edited</span>
              <span className={`font-semibold text-[13px] ${textPrimary}`}>Jul 1, 2026</span>
            </div>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {kpis.map(k => (
            <div key={k.label} className={`${card} border rounded-xl p-5 flex flex-col gap-2`}>
              <span className={`text-[13px] ${textSub}`}>{k.label}</span>
              <span className={`font-bold text-[28px] ${k.color}`}>{k.value}</span>
            </div>
          ))}
        </div>

        {/* Matched payouts table */}
        <div className={`${card} border rounded-xl overflow-hidden`}>
          <div className="px-6 py-4">
            <p className={`font-semibold text-[16px] ${textPrimary}`}>Matched Payouts Activity</p>
          </div>
          {/* Table header */}
          <div className={`${dark ? "bg-[#1a2130]" : "bg-[#f7f8fa]"} flex items-center gap-6 px-6 py-3 text-[11px] font-semibold uppercase ${textSub}`}>
            <span className="flex-1 min-w-0">Contractor</span>
            <span className="w-[120px] shrink-0">Date</span>
            <span className="w-[110px] shrink-0">Amount</span>
            <span className="w-[130px] shrink-0">Action Taken</span>
          </div>
          {policyMatchedPayouts.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-6 px-6 py-4 ${i < policyMatchedPayouts.length - 1 ? `border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}` : ""} ${dark ? "hover:bg-[#1a2130]" : "hover:bg-[#fafafa]"} transition-colors`}
            >
              <div className="flex-1 min-w-0 flex items-center gap-3">
                <div className="size-8 rounded-full flex items-center justify-center text-white font-bold text-[11px] shrink-0" style={{ backgroundColor: p.avatarBg }}>{p.initials}</div>
                <div className="flex flex-col gap-0.5">
                  <span className={`font-semibold text-[14px] ${textPrimary}`}>{p.name}</span>
                  <span className={`text-[12px] ${textSub}`}>{p.inv}</span>
                </div>
              </div>
              <span className={`w-[120px] shrink-0 text-[14px] ${textBody}`}>{p.date}</span>
              <span className={`w-[110px] shrink-0 font-semibold text-[14px] ${textPrimary}`}>{p.amount}</span>
              <div className="w-[130px] shrink-0">
                <span className={`font-bold text-[11px] tracking-wide ${p.actionColor}`}>{p.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <button onClick={() => onNavigate("approval-policies")} className={`flex items-center gap-2 font-semibold text-[14px] ${dark ? "text-[#98a2b5] hover:text-[#f0f3f8]" : "text-[#374151] hover:text-[#1a1d2e]"} transition-colors w-fit`}>
          <ChevronLeft size={16} />
          Back to Policies
        </button>
      </motion.div>
    </div>
  );
}

// ── Screen: Settings ───────────────────────────────────────────────

function Toggle({ on = false }: { on?: boolean }) {
  const { dark } = useDark();
  return (
    <div className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-[#2e37fe]" : dark ? "bg-[#232b38]" : "bg-[#e4ebf1]"}`}>
      <div className={`absolute top-1 size-4 rounded-full bg-white shadow transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
    </div>
  );
}

function SettingRow({ label, subtitle, right }: { label: string; subtitle: string; right: React.ReactNode }) {
  const { dark } = useDark();
  return (
    <div className={`flex h-16 items-center justify-between border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} last:border-0`}>
      <div className="flex flex-col gap-0.5">
        <p className={`font-medium text-[15px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>{label}</p>
        <p className="text-[#9ca3af] text-[13px]">{subtitle}</p>
      </div>
      {right}
    </div>
  );
}

function SettingsPage({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark, setDark } = useDark();
  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} overflow-auto h-full`}>
      <motion.div {...a(0.075, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e4ebf1]"} border-b h-14 flex items-center px-6 shrink-0`}>
        <p className={`font-bold text-[22px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Settings</p>
      </motion.div>

      <motion.div {...a(0.1, 10)} className="p-4 sm:p-8 lg:p-10">
        <div className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e4ebf1]"} rounded-xl border p-6 w-full max-w-[820px] flex flex-col`}>

          {/* Profile */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pb-2">Profile</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} mb-0 opacity-10 mb-1`} />
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#2e37fe] size-12 rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold text-white text-base">PS</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`font-semibold text-[15px] ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Priya Sharma</span>
                  <span className={`font-bold text-[11px] px-2 py-1 rounded ${dark ? "bg-[#0f0f2e] text-[#2e37fe]" : "bg-[#eef0ff] text-[#2e37fe]"}`}>Admin</span>
                </div>
                <p className="text-[#9ca3af] text-[13px]">priya@designco.com</p>
              </div>
            </div>
            <button className={`border px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${dark ? "border-[#232b38] text-[#f0f3f8] hover:bg-[#1a2130]" : "border-[#e4ebf1] text-[#1a1d2e] hover:bg-gray-50"}`}>Edit Profile</button>
          </div>

          {/* Appearance */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pt-6 pb-2">Appearance</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} opacity-10 mb-1`} />
          <SettingRow
            label="Theme"
            subtitle="Choose how Clearline looks to you"
            right={
              <div className={`${dark ? "bg-[#111722]" : "bg-[#f3f4f6]"} flex h-10 p-1 rounded-[22px]`}>
                <button
                  onClick={() => setDark(false)}
                  className={`rounded-[18px] flex items-center px-4 h-full transition-colors ${!dark ? "bg-white border border-[#e4ebf1] shadow-sm" : ""}`}
                >
                  <span className={`text-sm ${!dark ? "text-[#2e37fe]" : "text-[#9ca3af]"}`}>Light</span>
                </button>
                <button
                  onClick={() => setDark(true)}
                  className={`rounded-[18px] flex items-center px-4 h-full transition-colors ${dark ? "bg-[#1e2636] border border-[#232b38]" : ""}`}
                >
                  <span className={`text-sm ${dark ? "text-[#2e37fe]" : "text-[#9ca3af]"}`}>Dark</span>
                </button>
              </div>
            }
          />
          <SettingRow label="Compact view" subtitle="Reduce spacing in tables and lists" right={<Toggle on={false} />} />

          {/* Approval Policies */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pt-6 pb-2">Approval Policies</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} opacity-10 mb-1`} />
          <SettingRow label="Auto-approve rules" subtitle="Enable rule-based automatic payout approvals" right={<Toggle on={true} />} />
          <SettingRow
            label="Default approval threshold"
            subtitle="Payouts above this amount require manual review"
            right={
              <div className={`flex items-center gap-2 border ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} px-3 py-2 rounded-lg`}>
                <span className={`font-medium text-sm ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>$5,000</span>
                <ChevronDown size={14} className="text-[#9ca3af]" />
              </div>
            }
          />
          <SettingRow label="Policy change notifications" subtitle="Notify admins when approval policies are created or modified" right={<Toggle on={true} />} />
          <SettingRow
            label="Manage Policies"
            subtitle="Review and edit approval rules and thresholds"
            right={
              <button onClick={() => onNavigate("approval-policies")} className="font-semibold text-[#2e37fe] text-sm hover:opacity-70 transition-opacity">
                Manage Policies
              </button>
            }
          />

          {/* Notifications */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pt-6 pb-2">Notifications</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} opacity-10 mb-1`} />
          <SettingRow label="Email summaries" subtitle="Get a weekly digest of payout activity" right={<Toggle on={true} />} />
          <SettingRow label="Push notifications" subtitle="Real-time alerts for flagged payouts" right={<Toggle on={true} />} />
          <SettingRow label="Compliance alerts" subtitle="Immediate alerts for TDS and regulatory items" right={<Toggle on={true} />} />

          {/* Security */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pt-6 pb-2">Security</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} opacity-10 mb-1`} />
          <SettingRow
            label="Two-factor authentication"
            subtitle="SMS code required at login"
            right={
              <div className="flex items-center gap-3">
                <span className="bg-[#dcfce7] text-[#16a34a] font-bold text-[11px] px-2 py-1 rounded">Enabled</span>
                <Toggle on={true} />
              </div>
            }
          />
          <SettingRow
            label="Session timeout"
            subtitle="Auto sign-out after inactivity"
            right={
              <div className={`flex items-center gap-2 border ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} px-3 py-2 rounded-lg`}>
                <span className={`font-medium text-sm ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>30 minutes</span>
                <ChevronDown size={14} className="text-[#9ca3af]" />
              </div>
            }
          />
          <SettingRow
            label="Change password"
            subtitle="Last changed 3 months ago"
            right={<span className="font-semibold text-[#2e37fe] text-sm underline cursor-pointer">Update</span>}
          />

          {/* Integrations */}
          <p className="font-bold text-[#9ca3af] text-xs uppercase pt-6 pb-2">Integrations</p>
          <div className={`border-b ${dark ? "border-[#232b38]" : "border-[#e4ebf1]"} opacity-10 mb-1`} />
          <SettingRow
            label="Slack"
            subtitle="Send payout notifications to your workspace"
            right={
              <div className="flex items-center gap-3">
                <span className="bg-[#dcfce7] text-[#16a34a] font-bold text-[11px] px-2 py-1 rounded">Connected</span>
                <span className="text-[#6b7280] font-semibold text-sm cursor-pointer hover:opacity-70 transition-opacity">Disconnect</span>
              </div>
            }
          />
          <SettingRow
            label="QuickBooks"
            subtitle="Sync payouts to your accounting software"
            right={<button className={`border px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${dark ? "border-[#232b38] text-[#f0f3f8] hover:bg-[#1a2130]" : "border-[#e4ebf1] text-[#1a1d2e] hover:bg-gray-50"}`}>Connect</button>}
          />
        </div>

      </motion.div>
    </div>
  );
}

// ── Screen: Contractor Insights ─────────────────────────────────────

const lineChartData = [
  { month: "Apr", payout: 58000, avg: 60000, anomaly: false },
  { month: "May", payout: 64000, avg: 61000, anomaly: false },
  { month: "Jun", payout: 61500, avg: 62000, anomaly: false },
  { month: "Jul", payout: 63000, avg: 62500, anomaly: false },
  { month: "Aug", payout: 72000, avg: 63000, anomaly: true },
  { month: "Sep", payout: 67000, avg: 64000, anomaly: false },
];

const anomalyFlags: Record<string, number> = { Apr: 0, May: 1, Jun: 0, Jul: 0, Aug: 2, Sep: 1 };

function PayoutLineChart({ dark }: { dark: boolean }) {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
  const W = 600, H = 230;
  const padL = 44, padR = 12, padT = 68, padB = 28;
  const cW = W - padL - padR;
  const cH = H - padT - padB;
  const minV = 20000, maxV = 80000, range = maxV - minV;

  const toX = (i: number) => padL + (i / (lineChartData.length - 1)) * cW;
  const toY = (v: number) => padT + cH - ((v - minV) / range) * cH;

  const payoutPts = lineChartData.map((d, i) => ({ x: toX(i), y: toY(d.payout), ...d }));
  const avgPts    = lineChartData.map((d, i) => ({ x: toX(i), y: toY(d.avg) }));

  const linePath = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  const areaPath =
    linePath(payoutPts) +
    ` L ${payoutPts[payoutPts.length - 1].x} ${padT + cH} L ${payoutPts[0].x} ${padT + cH} Z`;

  const gridY = [80000, 60000, 40000, 20000];
  const gridColor = dark ? "#232b38" : "#e5e7eb";
  const tickColor = dark ? "#98a2b5" : "#9ca3af";
  const avgColor  = dark ? "#4a7fa8" : "#94b8d4";
  const fillOpacity = dark ? 0.2 : 0.12;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 200 }}>
      <defs>
        <linearGradient id="svgPayoutGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e37fe" stopOpacity={fillOpacity * 2} />
          <stop offset="100%" stopColor="#2e37fe" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Horizontal grid lines + Y labels */}
      {gridY.map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke={gridColor} strokeWidth={1} />
            <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={11} fill={tickColor} fontFamily="Inter">${v / 1000}k</text>
          </g>
        );
      })}

      {/* X labels */}
      {lineChartData.map((d, i) => (
        <text key={d.month} x={toX(i)} y={H - 4} textAnchor="middle" fontSize={11} fill={tickColor} fontFamily="Inter">{d.month}</text>
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#svgPayoutGrad)" />

      {/* Avg dashed line */}
      <path d={linePath(avgPts)} fill="none" stroke={avgColor} strokeWidth={1.5} strokeDasharray="5 3" />

      {/* Main payout line */}
      <path d={linePath(payoutPts)} fill="none" stroke="#2e37fe" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

      {/* Dots + anomaly hover tags */}
      {payoutPts.map((p) => {
        const flagCount = anomalyFlags[p.month] ?? 0;
        const isAnomaly = flagCount > 0;
        const isHovered = hoveredMonth === p.month;
        const BITTERSWEET = "#FE6F5E";
        const dotColor = isHovered ? BITTERSWEET : "#2e37fe";
        const dotR = isHovered ? 5 : 3.5;

        const payoutLabel = `$${Math.round(p.payout / 1000)}k`;
        const anomalyLabel = flagCount === 0
          ? "No anomalies"
          : `${flagCount} ${flagCount === 1 ? "anomaly" : "anomalies"} flagged`;
        const tagW = 110;
        const tagH = 44;
        const caretH = 6;
        const tagX = Math.min(Math.max(p.x - tagW / 2, padL), W - padR - tagW);
        const tagY = p.y - tagH - caretH - 8;
        const tagBg = dark ? "#1e2636" : "#1a1d2e";

        return (
          <g key={`dot-${p.month}`}>
            {/* Hit area */}
            <circle
              cx={p.x} cy={p.y} r={12}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredMonth(p.month)}
              onMouseLeave={() => setHoveredMonth(null)}
            />
            <circle
              cx={p.x} cy={p.y} r={dotR}
              fill={dotColor} stroke="white" strokeWidth={2}
              style={{ pointerEvents: "none" }}
            />
            {isHovered && (
              <g style={{ pointerEvents: "none" }}>
                <rect x={tagX} y={tagY} width={tagW} height={tagH} rx={8} fill={tagBg} />
                {/* Payout amount */}
                <text
                  x={tagX + tagW / 2} y={tagY + 17}
                  textAnchor="middle" fontSize={13} fontWeight="700"
                  fill="#ffffff" fontFamily="Inter"
                >
                  {payoutLabel}
                </text>
                {/* Anomaly line */}
                <text
                  x={tagX + tagW / 2} y={tagY + 33}
                  textAnchor="middle" fontSize={10} fontWeight="500"
                  fill={flagCount > 0 ? BITTERSWEET : "#6b7280"} fontFamily="Inter"
                >
                  {anomalyLabel}
                </text>
                {/* Caret */}
                <polygon
                  points={`${p.x - 6},${tagY + tagH} ${p.x + 6},${tagY + tagH} ${p.x},${tagY + tagH + caretH}`}
                  fill={tagBg}
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

type ContractorHealth = "Attention" | "Watch" | "Consistent";

interface ContractorRow {
  initials: string;
  avatarBg: string;
  name: string;
  country: string;
  totalPaid: string;
  invoices: string;
  health: ContractorHealth;
  lastPayout: string;
  // detail panel
  location: string;
  healthNote: string;
  paid6mo: string;
  invoiceCount: string;
  avgApproval: string;
  paymentMethod: string;
}

const CONTRACTOR_ROWS: ContractorRow[] = (() => {
  const sr = (n: number) => { const x = Math.sin(n * 9301 + 49297) * 233280; return x - Math.floor(x); };
  const pick = <T,>(arr: T[], s: number): T => arr[Math.floor(sr(s) * arr.length)];
  const ri = (min: number, max: number, s: number) => Math.floor(sr(s) * (max - min + 1)) + min;

  type CC = "IN"|"US"|"GB"|"BR"|"DE"|"CA"|"PH"|"AU"|"SG"|"MX"|"NG"|"KE"|"AR"|"CO"|"FR";
  const first: Record<CC, string[]> = {
    IN: ["Priya","Ravi","Anita","Rajesh","Kavya","Arjun","Deepa","Vikram","Nisha","Sanjay","Meera","Rohan","Pooja","Kiran","Divya","Suresh","Preeti","Aditya","Sneha","Gaurav","Aarav","Neha","Rohit","Lakshmi","Varun"],
    US: ["Alex","Jordan","Tyler","Morgan","Casey","Blake","Madison","Taylor","Riley","Cameron","Dylan","Avery","Logan","Peyton","Quinn","Jesse","Drew","Parker","Reese","Hunter","Skylar","Jamie","Kendall","Harley","Spencer"],
    GB: ["James","Emma","Oliver","Charlotte","William","Sophie","Harry","Isla","George","Grace","Edward","Lucy","Henry","Alice","Thomas","Rosie","Jack","Freya","Liam","Poppy","Alfie","Daisy","Charlie","Amelia","Archie"],
    BR: ["Lucas","Camila","Gabriel","Beatriz","Rafael","Juliana","Mateus","Fernanda","Thiago","Ana","Bruno","Larissa","Diego","Carla","Rodrigo","Mariana","Felipe","Patricia","Andre","Isabela","Henrique","Amanda","Gustavo","Leticia","Leonardo"],
    DE: ["Lukas","Lena","Felix","Hannah","Jonas","Laura","Tim","Lisa","Finn","Sarah","Leon","Anna","Paul","Julia","Max","Marie","Jan","Sophie","Nico","Emma","Moritz","Lea","Simon","Klara","Tobias"],
    CA: ["Ethan","Sophia","Benjamin","Aiden","Olivia","Liam","Ava","Jackson","Mia","Noah","Isabella","Mason","Harper","Lucas","Evelyn","Logan","Abigail","William","Emily","Charlotte","Samuel","Ella","Henry","Grace","Nathan"],
    PH: ["Maria","Jose","Juan","Ana","Rosa","Carlo","Mark","Grace","Miguel","Christine","Angelo","Paolo","Kevin","Joana","Rafael","Sheila","Daniel","Abigail","Patrick","Lovely","Kristine","Jerome","Maricel","Ryan","Jenny"],
    AU: ["Liam","Olivia","Noah","Charlotte","Jack","Mia","William","Isla","Oliver","Ava","Thomas","Grace","James","Chloe","Lucas","Ella","Ethan","Lily","Henry","Zoe","Samuel","Amelia","Alexander","Ruby","Archie"],
    SG: ["Wei","Min","Hui","Jing","Xiao","Ling","Jun","Yan","Hao","Mei","Feng","Zhen","Li","Cheng","Yang","Rui","Lin","Kai","Hong","Xin","Shi","Wen","Qing","Yu","Ze"],
    MX: ["Carlos","Sofia","Miguel","Isabella","Juan","Valentina","Diego","Regina","Luis","Camila","Pedro","Fernanda","Andres","Valeria","Jorge","Ximena","Antonio","Paulina","Roberto","Andrea","Eduardo","Daniela","Alejandro","Renata","Francisco"],
    NG: ["Chidi","Ngozi","Emeka","Chioma","Adebayo","Amara","Oluwaseun","Fatima","Tunde","Blessing","Kelechi","Aisha","Babajide","Yetunde","Segun","Chiamaka","Femi","Nkechi","Rotimi","Adaeze"],
    KE: ["John","Mary","James","Grace","Peter","Faith","Joseph","Anne","Samuel","Esther","David","Joyce","Michael","Margaret","Daniel","Catherine","George","Ruth","Charles","Agnes"],
    AR: ["Santiago","Valentina","Mateo","Camila","Lucas","Sofia","Nicolas","Martina","Gonzalo","Lucia","Facundo","Florencia","Ezequiel","Agustina","Rodrigo","Julieta","Mauro","Antonella","Leandro","Melina"],
    CO: ["Juan","Maria","Carlos","Sofia","Andres","Valentina","Diego","Camila","Miguel","Isabella","Sebastian","Gabriela","David","Daniela","Pablo","Ana","Jorge","Natalia","Jose","Laura"],
    FR: ["Louis","Emma","Gabriel","Lea","Raphael","Manon","Lucas","Inès","Hugo","Camille","Nathan","Jade","Tom","Juliette","Romain","Chloé","Antoine","Sarah","Maxime","Alice"],
  };
  const last: Record<CC, string[]> = {
    IN: ["Sharma","Patel","Singh","Kumar","Mehta","Joshi","Gupta","Nair","Iyer","Reddy","Rao","Shah","Desai","Pillai","Menon","Kapoor","Bose","Das","Mukherjee","Verma","Dubey","Mishra","Tiwari","Jain","Khanna"],
    US: ["Johnson","Williams","Brown","Jones","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Lewis","Young","Walker","Hall","Allen"],
    GB: ["Smith","Jones","Williams","Taylor","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Robinson","Wood","Thompson","White","Watson","Jackson","Wright","Green","Hall","Harris","Clarke","Adams"],
    BR: ["Silva","Santos","Oliveira","Souza","Lima","Pereira","Costa","Ferreira","Rodrigues","Almeida","Nascimento","Carvalho","Freitas","Barbosa","Ribeiro","Martins","Rocha","Araujo","Melo","Cavalcanti","Monteiro","Moreira","Cardoso","Correia","Teixeira"],
    DE: ["Müller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Schulz","Hoffmann","Schäfer","Koch","Bauer","Richter","Klein","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Lange","Hartmann"],
    CA: ["Murphy","Campbell","MacDonald","Stewart","Reid","Morrison","Martin","Ross","Fraser","Thomson","Hamilton","Young","Anderson","Scott","Robertson","Grant","Watson","Cameron","Mitchell","Walker","MacLeod","Davidson","Graham","Murray","MacKenzie"],
    PH: ["Santos","Reyes","Cruz","Bautista","Ocampo","Garcia","Torres","Flores","Espinosa","David","Mendoza","Ramos","Castro","Gutierrez","Pascual","Navarro","dela Cruz","Villanueva","Diaz","Aquino","Lim","Tan","Gonzales","Fernandez","Rivera"],
    AU: ["Smith","Jones","Williams","Brown","Wilson","Taylor","Anderson","Thompson","White","Harris","Martin","Jackson","Clarke","Walker","Hall","Allen","Young","King","Wright","Scott","Baker","Green","Adams","Nelson","Carter"],
    SG: ["Tan","Lee","Ng","Lim","Chen","Wong","Chan","Koh","Ho","Chua","Goh","Teo","Ong","Sim","Ang","Yeo","Yap","Wee","Cheong","Lau","Phua","Foo","Quek","Seah","Chia"],
    MX: ["García","Martínez","López","González","Rodríguez","Hernández","Pérez","Sánchez","Ramírez","Torres","Flores","Rivera","Gómez","Díaz","Reyes","Morales","Cruz","Ortiz","Gutiérrez","Chávez","Ramos","Jiménez","Vargas","Castillo","Romero"],
    NG: ["Okafor","Adeyemi","Nwachukwu","Eze","Bello","Okonkwo","Adesanya","Chukwu","Abubakar","Obi","Adeleke","Nwosu","Babatunde","Olawale","Igwe","Ogunleye","Nzeogwu","Adebisi","Okeke","Oladele"],
    KE: ["Njoroge","Kamau","Waweru","Mwangi","Otieno","Kimani","Karanja","Odhiambo","Ndung'u","Mutua","Gitau","Owino","Wanjiku","Kiprotich","Achieng","Muthoni","Chege","Omondi","Nyambura","Macharia"],
    AR: ["González","Fernández","Rodríguez","López","Martínez","García","Sánchez","Romero","Sosa","Torres","Flores","Álvarez","Ruiz","Ramírez","Reyes","Acosta","Medina","Herrera","Díaz","Moreno"],
    CO: ["García","Rodríguez","González","López","Martínez","Hernández","Pérez","Torres","Ramírez","Flores","Castro","Gómez","Díaz","Vargas","Morales","Jiménez","Muñoz","Romero","Álvarez","Herrera"],
    FR: ["Martin","Bernard","Thomas","Petit","Robert","Richard","Durand","Dubois","Moreau","Laurent","Simon","Michel","Lefebvre","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard"],
  };
  type CMeta = { flag: string; cities: string[]; method: string };
  const meta: Record<CC, CMeta> = {
    IN: { flag:"🇮🇳", cities:["Bangalore","Mumbai","Delhi","Hyderabad","Chennai","Pune","Kolkata"], method:"Bank Transfer" },
    US: { flag:"🇺🇸", cities:["San Francisco","New York","Austin","Seattle","Chicago","Miami","Boston","LA"], method:"ACH Transfer" },
    GB: { flag:"🇬🇧", cities:["London","Manchester","Edinburgh","Bristol","Leeds","Birmingham"], method:"SWIFT Transfer" },
    BR: { flag:"🇧🇷", cities:["São Paulo","Rio de Janeiro","Brasília","Curitiba","Fortaleza"], method:"Pix" },
    DE: { flag:"🇩🇪", cities:["Berlin","Munich","Hamburg","Frankfurt","Cologne","Stuttgart"], method:"SEPA Transfer" },
    CA: { flag:"🇨🇦", cities:["Toronto","Vancouver","Montreal","Ottawa","Calgary","Edmonton"], method:"EFT Transfer" },
    PH: { flag:"🇵🇭", cities:["Manila","Cebu","Davao","Quezon City","Makati"], method:"GCash" },
    AU: { flag:"🇦🇺", cities:["Sydney","Melbourne","Brisbane","Perth","Adelaide"], method:"SWIFT Transfer" },
    SG: { flag:"🇸🇬", cities:["Singapore"], method:"FAST Transfer" },
    MX: { flag:"🇲🇽", cities:["Mexico City","Guadalajara","Monterrey","Puebla","Tijuana"], method:"SPEI Transfer" },
    NG: { flag:"🇳🇬", cities:["Lagos","Abuja","Port Harcourt","Kano","Ibadan"], method:"Bank Transfer" },
    KE: { flag:"🇰🇪", cities:["Nairobi","Mombasa","Kisumu","Nakuru"], method:"M-Pesa" },
    AR: { flag:"🇦🇷", cities:["Buenos Aires","Córdoba","Rosario","Mendoza"], method:"Bank Transfer" },
    CO: { flag:"🇨🇴", cities:["Bogotá","Medellín","Cali","Barranquilla"], method:"PSE Transfer" },
    FR: { flag:"🇫🇷", cities:["Paris","Lyon","Marseille","Toulouse","Bordeaux"], method:"SEPA Transfer" },
  };
  const pool: CC[] = [
    ...Array(22).fill("IN"),...Array(18).fill("US"),...Array(9).fill("GB"),
    ...Array(7).fill("BR"),...Array(7).fill("DE"),...Array(6).fill("CA"),
    ...Array(6).fill("PH"),...Array(5).fill("AU"),...Array(5).fill("SG"),
    ...Array(4).fill("MX"),...Array(4).fill("NG"),...Array(3).fill("KE"),
    ...Array(2).fill("AR"),...Array(1).fill("CO"),...Array(1).fill("FR"),
  ];
  const avatarColors = ["#f87171","#f59e0b","#94a3b8","#a78bfa","#34d399","#fb923c","#60a5fa","#f472b6","#4ade80","#22d3ee","#e879f9","#facc15"];
  const healthNotes: Record<ContractorHealth,string[]> = {
    Attention:[
      "Payout was 45% higher than previous 6-month average — anomaly flagged.",
      "Tax form W-8BEN expired. Compliance at risk for next payout.",
      "Two consecutive invoices submitted late. Approval SLA exceeded.",
      "New bank account added — pending verification before payout.",
      "Duplicate invoice detected. Manual review required.",
      "Flagged by compliance engine — unusual payout frequency.",
      "Currency mismatch on invoice. Amount differs from contracted rate.",
      "KYC documents expired. Payout blocked until renewed.",
    ],
    Watch:[
      "Contract expires in 14 days. Renewal recommended.",
      "Approval time 2× longer than average.",
      "New payment method added — monitor for 2 cycles.",
      "Invoice approval rate dropped this quarter.",
      "Payout frequency trending up — within limits.",
      "Minor currency conversion variance on last 2 payouts.",
      "First payout in 3 months — re-activation monitoring period.",
    ],
    Consistent:[
      "All invoices approved on time. No anomalies in last 6 months.",
      "Exemplary approval rate of 100%. No flags on record.",
      "Consistent performance across all cycles.",
      "All documents current. No compliance issues.",
      "Top performer by approval rate and payout consistency.",
      "Zero disputes in 12 months.",
      "Fully verified across all compliance checks.",
    ],
  };
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"];
  const rows: ContractorRow[] = [];
  for (let i = 0; i < 500; i++) {
    const s = i + 1;
    const cc = pool[ri(0, pool.length - 1, s * 3)];
    const m = meta[cc];
    const fn = pick(first[cc], s * 7);
    const ln = pick(last[cc], s * 11);
    const name = `${fn} ${ln}`;
    const initials = `${fn[0]}${ln[0]}`;
    const avatarBg = avatarColors[ri(0, avatarColors.length - 1, s * 5)];
    const hr = sr(s * 13);
    const health: ContractorHealth = hr < 0.15 ? "Attention" : hr < 0.40 ? "Watch" : "Consistent";
    const invCount = ri(2, 18, s * 17);
    const approvalRate = health === "Consistent" ? ri(90, 100, s * 19) : health === "Watch" ? ri(70, 89, s * 19) : ri(50, 74, s * 19);
    const avg = ri(800, 4500, s * 23);
    const total = invCount * avg;
    const fmt = (n: number) => n >= 10000 ? `$${Math.round(n / 1000)}k` : `$${n.toLocaleString()}`;
    const city = pick(m.cities, s * 29);
    rows.push({
      initials, avatarBg, name,
      country: `${m.flag} ${cc}`,
      totalPaid: fmt(total),
      invoices: `${invCount} · ${approvalRate}%`,
      health,
      lastPayout: `${pick(months, s * 37)} ${ri(1, 28, s * 31)}, 2026`,
      location: `${m.flag} ${city}, ${cc}`,
      healthNote: pick(healthNotes[health], s * 43),
      paid6mo: fmt(total),
      invoiceCount: `${invCount} submitted`,
      avgApproval: `${(ri(10, 72, s * 41) / 10).toFixed(1)} hours`,
      paymentMethod: m.method,
    });
  }
  return rows;
})();

function HealthBadge({ health }: { health: ContractorHealth }) {
  if (health === "Attention") return (
    <div className="flex items-center gap-1.5 bg-[#fee2e2] border border-[#991b1b] border-opacity-20 px-2.5 py-1 rounded-md shrink-0">
      <svg width="10" height="7" viewBox="0 0 12 8.4" fill="none"><path d="M1 7.4L6 1L11 7.4" stroke="#991B1B" strokeWidth="2" /></svg>
      <span className="font-semibold text-[#991b1b] text-[12px]">Attention</span>
    </div>
  );
  if (health === "Watch") return (
    <div className="flex items-center px-2.5 py-1 rounded-md shrink-0 bg-[#fef3c7] border border-[#92400e] border-opacity-20">
      <span className="font-semibold text-[#92400e] text-[12px]">Watch</span>
    </div>
  );
  return (
    <div className="flex items-center px-2.5 py-1 rounded-md shrink-0 bg-[#dcfce7] border border-[#16a34a] border-opacity-20">
      <span className="font-semibold text-[#16a34a] text-[12px]">Consistent</span>
    </div>
  );
}

const PAGE_SIZE = 20;

function ContractorInsights({ onNavigate: _onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { dark } = useDark();
  const [selected, setSelected] = useState<ContractorRow | null>(null);
  const [filter, setFilter] = useState<"All" | ContractorHealth>("All");
  const [period, setPeriod] = useState("Last 6 Months");
  const [page, setPage] = useState(1);

  const filtered = filter === "All" ? CONTRACTOR_ROWS : CONTRACTOR_ROWS.filter((r) => r.health === filter);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilter = (f: "All" | ContractorHealth) => { setFilter(f); setPage(1); setSelected(null); };

  return (
    <div className={`${dark ? "bg-[#0d1117]" : ""} flex h-full min-h-0 overflow-hidden relative`}>
      {/* Main scroll */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.075, ease: EASE }}
        className="flex-1 min-w-0 overflow-auto"
      >
        <div className="flex flex-col gap-8 p-10 pb-16">

          {/* Header */}
          <motion.div {...a(0.1, 10)} className="flex items-center justify-between shrink-0">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-[#1a1d2e] text-[24px]">Contractor Insights</h1>
              <p className="text-[#6b7280] text-[13px]">AI-generated summary of contractor payment activity</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#eef0ff] flex items-center p-1 rounded-full gap-0.5 shrink-0">
                {["This Quarter", "Last Quarter", "Last 6 Months", "Last 12 Months"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${period === p ? "bg-[#2e37fe] text-white" : "text-[#6b7280] hover:text-[#374151]"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <span className="text-[#9ca3af] text-[12px]">Last updated 2h ago</span>
            </div>
          </motion.div>

          {/* AI Summary */}
          <motion.div {...a(0.13, 10)} className="bg-[#f0fafa] rounded-2xl border border-[#b2e8e4] flex gap-5 items-start p-6 shrink-0">
            <div className="shrink-0 size-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5EEAD4, #00B5A6, #0D8080)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zM5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15z" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <p className="font-bold text-[14px] uppercase" style={{ backgroundImage: "linear-gradient(10deg, #5EEAD4 29%, #00B5A6 68%, #0D8080 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Summary</p>
              <p className="text-[#374151] text-[14px] leading-[22px]">
                You paid 38 contractors $412,600 over the last 6 months — up 8% from the prior 6-month period. 33 contractors remained fully consistent throughout.{" "}
                <span className="text-[#00b5a6] underline cursor-pointer">5 need attention</span>:{" "}
                <span className="text-[#00b5a6] underline cursor-pointer">3 anomaly flags</span>,{" "}
                <span className="text-[#00b5a6] underline cursor-pointer">1 expiring tax document</span>, and 1 new bank account unverified.
              </p>
              <p className="text-[#6b7280] text-[13px] font-medium cursor-pointer hover:opacity-80 transition-opacity">How was this generated? ↗</p>
            </div>
          </motion.div>

          {/* KPI row */}
          <motion.div {...a(0.16, 10)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 shrink-0">
            {[
              { label: "Total Paid", value: "$412,600", sub: "+8% vs prior 6mo", subGrad: true },
              { label: "Active Contractors", value: "38", sub: null, subGrad: false },
              { label: "Consistent", value: "33", sub: null, subGrad: false },
              { label: "Needs Attention", value: "5", sub: null, subGrad: false },
            ].map((kpi, i) => (
              <div key={i} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border p-5 h-[140px] flex flex-col gap-3 justify-between`}>
                <p className="font-medium text-[#6b7280] text-[14px]">{kpi.label}</p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[#1a1d2e] text-[28px]">{kpi.value}</p>
                  {kpi.sub && (
                    <p className="font-semibold text-[13px]" style={kpi.subGrad ? { backgroundImage: "linear-gradient(8deg, #5EEAD4 29%, #00B5A6 68%, #0D8080 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}>
                      {kpi.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Line chart */}
          <motion.div {...a(0.19, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border p-6 shrink-0`}>
            <p className={`font-semibold text-[16px] mb-6 ${dark ? "text-[#f0f3f8]" : "text-[#1a1d2e]"}`}>Payout Volume by Month</p>
            <PayoutLineChart dark={dark} />
            {/* Legend */}
            <div className="flex gap-5 items-center mt-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#2e37fe] size-3 rounded-[2px]" />
                <span className={`text-[12px] ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>Monthly payout</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-6 border-t border-dashed" style={{ borderColor: dark ? "#4a7fa8" : "#94b8d4" }} />
                <span className={`text-[12px] ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>6mo avg</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#FE6F5E" /></svg>
                <span className={`text-[12px] ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>Anomaly flagged</span>
              </div>
            </div>
          </motion.div>

          {/* Contractor table */}
          <motion.div {...a(0.22, 10)} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} rounded-xl border overflow-hidden shrink-0`}>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3 p-4 sm:p-5">
              {(["All", "Consistent", "Watch", "Attention"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`h-7 px-3 sm:px-4 rounded-full text-[12px] sm:text-[13px] font-semibold transition-colors ${filter === f ? "bg-[#2e37fe] text-white" : "bg-[#eef0ff] text-[#374151] hover:bg-[#e0e0ff]"}`}
                >
                  {f}
                </button>
              ))}
            </div>
            {/* Table — scrollable on mobile */}
            <div className="overflow-x-auto">
              {/* Table header */}
              <div className="bg-[#f7f8fa] flex gap-6 items-center px-5 py-3 text-[#6b7280] text-[11px] font-semibold uppercase min-w-[600px]">
                <span className="flex-1 min-w-0">Contractor</span>
                <span className="w-[100px] shrink-0">Total Paid</span>
                <span className="w-[100px] shrink-0 hidden md:block">Invoices</span>
                <span className="w-[110px] shrink-0">Health</span>
                <span className="w-[100px] shrink-0 hidden sm:block">Last Payout</span>
                <span className="w-[80px] shrink-0 text-right">Action</span>
              </div>
              {/* Rows */}
              {visible.map((c, i) => (
                <div
                  key={c.name}
                  className={`flex gap-6 items-center px-5 py-[14px] cursor-pointer transition-colors min-w-[600px] ${i < visible.length - 1 ? `border-b ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}` : ""} ${selected?.name === c.name ? (dark ? "bg-[#12122e]" : "bg-[#f5f8ff]") : (dark ? "bg-[#161c26] hover:bg-[#1a2130]" : "bg-white hover:bg-[#fafafa]")}`}
                  onClick={() => setSelected(selected?.name === c.name ? null : c)}
                >
                  <div className="flex flex-1 min-w-0 items-center gap-3">
                    <div className="size-8 rounded-full flex items-center justify-center text-white font-bold text-[12px] shrink-0" style={{ background: c.avatarBg }}>{c.initials}</div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <p className="font-semibold text-[#1a1d2e] text-[14px] truncate">{c.name}</p>
                      <p className="text-[#9ca3af] text-[12px]">{c.country}</p>
                    </div>
                  </div>
                  <p className="font-medium text-[#1a1d2e] text-[14px] w-[100px] shrink-0">{c.totalPaid}</p>
                  <p className="text-[#6b7280] text-[13px] w-[100px] shrink-0 hidden md:block">{c.invoices}</p>
                  <div className="w-[110px] shrink-0"><HealthBadge health={c.health} /></div>
                  <p className="text-[#6b7280] text-[13px] w-[100px] shrink-0 hidden sm:block">{c.lastPayout}</p>
                  <div className="w-[80px] shrink-0 flex justify-end">
                    {c.health === "Attention" ? (
                      <button className="border border-[#f87171] text-[#f87171] font-semibold text-[13px] px-3 py-1.5 rounded-md hover:bg-[#fff1f1] transition-colors">Review</button>
                    ) : (
                      <button className="text-[#2e37fe] font-semibold text-[13px] hover:underline transition-colors">View</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (() => {
              const btnBase = `flex items-center justify-center w-8 h-8 rounded-lg text-[13px] font-semibold transition-colors`;
              const start = Math.max(1, Math.min(page - 2, totalPages - 4));
              const pageNums = Array.from({ length: Math.min(5, totalPages) }, (_, i) => start + i);
              return (
                <div className={`flex items-center justify-between px-5 py-4 border-t ${dark ? "border-[#232b38]" : "border-[#e5e7eb]"}`}>
                  <p className={`text-[13px] ${dark ? "text-[#98a2b5]" : "text-[#6b7280]"}`}>
                    Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} contractors
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className={`${btnBase} ${page === 1 ? "opacity-30 cursor-not-allowed" : dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#374151]"}`}
                    >
                      <ChevronLeft size={15} />
                    </button>
                    {start > 1 && (
                      <>
                        <button onClick={() => setPage(1)} className={`${btnBase} ${dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#374151]"}`}>1</button>
                        {start > 2 && <span className={`px-1 text-[13px] ${dark ? "text-[#98a2b5]" : "text-[#9ca3af]"}`}>…</span>}
                      </>
                    )}
                    {pageNums.map(n => (
                      <button
                        key={n}
                        onClick={() => setPage(n)}
                        className={`${btnBase} ${n === page ? "bg-[#2e37fe] text-white" : dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#374151]"}`}
                      >
                        {n}
                      </button>
                    ))}
                    {start + 4 < totalPages && (
                      <>
                        {start + 5 < totalPages && <span className={`px-1 text-[13px] ${dark ? "text-[#98a2b5]" : "text-[#9ca3af]"}`}>…</span>}
                        <button onClick={() => setPage(totalPages)} className={`${btnBase} ${dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#374151]"}`}>{totalPages}</button>
                      </>
                    )}
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className={`${btnBase} ${page === totalPages ? "opacity-30 cursor-not-allowed" : dark ? "hover:bg-[#1a2130] text-[#98a2b5]" : "hover:bg-gray-100 text-[#374151]"}`}
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </motion.div>

          {/* Suggested actions */}
          <motion.div {...a(0.25, 10)} className="flex flex-col gap-4 shrink-0">
            <h3 className="font-semibold text-[#1a1d2e] text-[16px]">Suggested Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "↻", title: "Convert to recurring", desc: "Priya Sharma has been paid $1,200 on the 1st for 3 months.", action: "Set up recurring" },
                { icon: "📄", title: "Tax form renewals needed", desc: "Ravi Patel's W-8BEN expires in 2 days. Resend for e-signature.", action: "Resend form" },
                { icon: "🇧🇷", title: "Brazil payout method", desc: "2 contractors still use SWIFT. Switch to Pix for same-day arrival.", action: "Switch to Pix" },
              ].map((s, i) => (
                <div key={i} className={`${dark ? "bg-[#161c26] border-[#232b38]" : "bg-white border-[#e5e7eb]"} border rounded-xl p-5 flex flex-col gap-4`}>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-[#1a1d2e] text-[14px]">{s.title}</p>
                    <p className="text-[#6b7280] text-[13px] leading-[20px]">{s.desc}</p>
                  </div>
                  <button className="text-white text-[13px] font-semibold px-4 py-2 rounded-lg text-left w-fit" style={{ background: "linear-gradient(135deg, #5EEAD4, #00B5A6, #0D8080)" }}>
                    {s.action}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Detail panel overlay */}
      {selected && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute inset-0 bg-black/25"
            onClick={() => setSelected(null)}
          />
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: EASE }}
            className={`absolute top-0 right-0 bottom-0 w-[380px] ${dark ? "bg-[#161c26]" : "bg-white"} shadow-[-8px_0_12px_rgba(0,0,0,0.13)] flex flex-col overflow-auto z-10`}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between p-6 border-b border-[#e5e7eb] shrink-0">
              <p className="font-semibold text-[#1a1d2e] text-[18px]">Contractor Details</p>
              <button onClick={() => setSelected(null)} className="text-[#9ca3af] hover:text-[#374151] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 10m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0M7 7l6 6M13 7l-6 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
            {/* Panel body */}
            <div className="flex flex-col gap-8 p-6">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full flex items-center justify-center text-white font-bold text-[20px] shrink-0" style={{ background: selected.avatarBg }}>{selected.initials}</div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-[#1a1d2e] text-[18px]">{selected.name}</p>
                  <p className="text-[#6b7280] text-[14px]">{selected.location}</p>
                </div>
              </div>
              {/* Health card */}
              <div className="bg-[#f7f8fa] rounded-xl p-5 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[#6b7280] text-[13px]">Health Status</span>
                  <HealthBadge health={selected.health} />
                </div>
                <p className="text-[#374151] text-[13px] leading-[20px]">{selected.healthNote}</p>
              </div>
              {/* Stats */}
              <div className="flex flex-col gap-4">
                {[
                  { label: "Total Paid (6mo)", value: selected.paid6mo },
                  { label: "Invoices", value: selected.invoiceCount },
                  { label: "Avg. Approval Time", value: selected.avgApproval },
                  { label: "Payment Method", value: selected.paymentMethod },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col gap-1">
                    <p className="text-[#6b7280] text-[12px]">{row.label}</p>
                    <p className="font-medium text-[#1a1d2e] text-[14px]">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

// ── Root App ────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("payouts-inbox-loading");

  useEffect(() => {
    (function(c: any, l: any, a: string, r: string, i: string) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
      const t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "xtpftay5np");
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setScreen("payouts-inbox"), 1800);
    return () => clearTimeout(t);
  }, []);
  const [navItem, setNavItem] = useState<NavItem>("payments");
  const [showHighValueModal, setShowHighValueModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = (item: NavItem) => {
    setNavItem(item);
    if (item === "payments") setScreen("payouts-inbox");
    else if (item === "insights" || item === "contractors") setScreen("insights");
    else if (item === "dashboard") setScreen("payouts-inbox");
    else if (item === "settings") setScreen("settings-page");
  };

  const navigate = (s: Screen) => {
    setScreen(s);
    if (["payouts-inbox", "payouts-inbox-failed", "payouts-inbox-empty", "payouts-inbox-loading", "review-invoice", "payment-method", "payment-method-missing", "review-send", "payout-sent", "bulk-payout-sent", "set-recurring", "bulk-approve", "payout-failed-detail"].includes(s)) {
      setNavItem("payments");
    } else if (s === "insights") {
      setNavItem("insights");
    } else if (s === "settings-page") {
      setNavItem("settings");
    }
  };

  return (
    <ErrorBoundary>
    <DarkModeContext.Provider value={{ dark: darkMode, setDark: setDarkMode }}>
    <div className={`${darkMode ? "bg-[#0d1117]" : "bg-[#f8f9fa]"} flex flex-col size-full`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 min-h-0 w-full overflow-hidden">
        <Sidebar active={navItem} onNavigate={handleNav} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div key={screen} className={`flex-1 min-w-0 ${screen === "bulk-approve" ? "overflow-hidden flex h-full" : "overflow-auto"}`}>
          {screen === "payouts-inbox" && <PayoutsInbox onNavigate={navigate} />}
          {screen === "payouts-inbox-failed" && <PayoutsInboxFailed onNavigate={navigate} />}
          {screen === "payouts-inbox-empty" && <PayoutsInboxEmpty onNavigate={navigate} />}
          {screen === "payouts-inbox-loading" && <PayoutsInboxLoading />}
          {screen === "review-invoice" && <ReviewInvoice onNavigate={navigate} />}
          {screen === "payment-method" && <PaymentMethod onNavigate={navigate} />}
          {screen === "payment-method-missing" && <PaymentMethodMissing onNavigate={navigate} />}
          {screen === "review-send" && <ReviewAndSend onNavigate={navigate} onHighValue={() => setShowHighValueModal(true)} />}
          {screen === "payout-sent" && <PayoutSent onNavigate={navigate} />}
          {screen === "bulk-payout-sent" && <BulkPayoutSent onNavigate={navigate} />}
          {screen === "set-recurring" && <SetRecurring onNavigate={navigate} />}
          {screen === "bulk-approve" && <BulkApprove onNavigate={navigate} />}
          {screen === "payout-failed-detail" && <PayoutFailedDetail onNavigate={navigate} />}
          {screen === "insights" && <ContractorInsights onNavigate={navigate} />}
          {screen === "settings-page" && <SettingsPage onNavigate={navigate} />}
          {screen === "approval-policies" && <ApprovalPoliciesPage onNavigate={navigate} />}
          {screen === "create-policy" && <CreatePolicyPage onNavigate={navigate} />}
          {screen === "policy-detail" && <PolicyDetailPage onNavigate={navigate} />}
        </div>
      </div>

      {showHighValueModal && (
        <HighValueConfirmModal
          onClose={() => setShowHighValueModal(false)}
          onConfirm={() => { setShowHighValueModal(false); navigate("payout-sent"); }}
        />
      )}
    </div>
    </DarkModeContext.Provider>
    </ErrorBoundary>
  );
}
