import { motion } from "motion/react";
import svgPaths from "./svg-l4xk369zkf";

function IconMark() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="icon-mark">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">P</p>
    </div>
  );
}

function LogoSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo-section">
      <IconMark />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[20px] whitespace-nowrap">Paynetic</p>
    </div>
  );
}

function TopBar() {
  return (
    <motion.div className="bg-white h-[56px] relative shrink-0 w-full" data-name="top-bar">
      <div aria-hidden className="absolute border-[#e0e3e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <LogoSection />
        </div>
      </div>
    </motion.div>
  );
}

function LayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="layout-dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
        <g id="layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.p24b78f40} stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3dcaf980} stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p11bfec00} stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p39e3d180} stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <LayoutDashboard />
    </div>
  );
}

function Frame2() {
  return (
    <a className="bg-white cursor-pointer relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame3 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] text-left whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </a>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="credit-card">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
        <g id="credit-card">
          <path d={svgPaths.p38b0c380} id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CreditCard />
    </div>
  );
}

function Frame4() {
  return (
    <a className="bg-[#eef4ff] cursor-pointer relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] text-left whitespace-nowrap">Payments</p>
        </div>
      </div>
    </a>
  );
}

function Insights() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="insights">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
        <g id="insights">
          <path d={svgPaths.pe611000} fill="var(--fill-0, #9CA3AF)" id="Vector" />
          <path d={svgPaths.p29ac06f0} fill="var(--fill-0, #9CA3AF)" id="Vector_2" />
          <path d={svgPaths.p33b1f900} fill="var(--fill-0, #9CA3AF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Insights />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame7 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Insights</p>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
        <g id="users">
          <path d={svgPaths.p14c24680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Users />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame9 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Contractors</p>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
        <g id="settings">
          <path d={svgPaths.pbd6a600} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Settings />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame11 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <motion.div className="bg-white h-full relative shrink-0 w-[240px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start py-[24px] relative size-full">
        <Frame2 />
        <Frame4 />
        <Frame6 />
        <Frame8 />
        <Frame10 />
      </div>
    </motion.div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="x">
          <path d="M15 5L5 15M5 5L15 15" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <X />
    </div>
  );
}

function MainHeader() {
  return (
    <motion.div className="content-stretch flex items-center justify-between pb-[32px] relative shrink-0 w-full" data-name="main-header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[24px] whitespace-nowrap">{`Review & Send`}</p>
      <Frame13 />
    </motion.div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#e8eef4] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] whitespace-nowrap">Priya Sharma</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">🇮🇳 India</p>
      <div className="bg-[#9ca3af] relative rounded-[2px] shrink-0 size-[4px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">Bank Transfer</p>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-name="spacer" />;
}

function SummaryStrip() {
  return (
    <motion.div className="bg-white h-[73px] relative rounded-[12px] shrink-0 w-full" data-name="summary-strip">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Frame14 />
          <Frame15 />
          <Spacer />
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-right">
          <path d={svgPaths.p332df900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[32px] whitespace-nowrap">1,200.00 USD</p>
      <ArrowRight />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[40px] whitespace-nowrap">₹ 1,59,240 INR</p>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_4860)" id="lock">
          <path d={svgPaths.p28fe0540} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4860">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RateLock() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="rate-lock">
      <Lock />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f59e0b] text-[13px] whitespace-nowrap">Rate locked for 14:59</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">1 USD = 132.70 INR</p>
      <RateLock />
    </div>
  );
}

function FxMain() {
  return (
    <div className="relative shrink-0 w-full" data-name="fx-main">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[40px] relative size-full">
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563]">Transfer fee</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111827]">$2.00</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563]">FX margin (0.5%)</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111827]">$6.00</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-start justify-between relative shrink-0 text-[#111827] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[16px]">Total debit</p>
      <p className="relative shrink-0 text-[20px]">$1,208.00</p>
    </div>
  );
}

function FeeBreakdown() {
  return (
    <div className="relative shrink-0 w-full" data-name="fee-breakdown">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic p-[32px] relative size-full whitespace-nowrap">
        <Frame18 />
        <Frame19 />
        <Frame20 />
      </div>
    </div>
  );
}

function FxHeroCard() {
  return (
    <motion.div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="fx-hero-card">
      <FxMain />
      <div className="bg-[#e5e7eb] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <FeeBreakdown />
    </motion.div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="alert-triangle">
          <path d={svgPaths.p29d83900} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ComplianceBox() {
  return (
    <motion.div className="bg-white relative shrink-0 w-full" data-name="compliance-box">
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <AlertTriangle />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#4b5563] text-[14px]">India: TDS at 10% may be withheld by the recipient. Please ensure the contractor is aware of potential local tax obligations.</p>
      </div>
    </motion.div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sparkle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_4854)" id="sparkle">
          <path d={svgPaths.p2e2ab080} id="Vector" stroke="url(#paint0_linear_1_4854)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4854" x1="9.0702" x2="23.217" y1="17.3574" y2="3.21059">
            <stop stopColor="#5EEAD4" />
            <stop offset="0.55" stopColor="#00B5A6" />
            <stop offset="1" stopColor="#0D8080" />
          </linearGradient>
          <clipPath id="clip0_1_4854">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" style={{ backgroundImage: "linear-gradient(13.9317deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="btn">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Set as Recurring</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pt-[12px] relative shrink-0" data-name="actions">
      <Btn />
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(18.7999deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
        Dismiss
      </p>
    </div>
  );
}

function BannerText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px relative" data-name="banner-text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-full not-italic relative text-[#191d23] text-[16px] w-[min-content]">{`You've paid this contractor $1,200 on the 1st for 3 months`}</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4b5768] text-[14px] whitespace-nowrap">Make this recurring?</p>
      <Actions />
    </div>
  );
}

function AiBanner() {
  return (
    <motion.div className="bg-[#f0fdfc] h-[136px] relative rounded-[8px] shrink-0 w-full" data-name="ai-banner">
      <div aria-hidden className="absolute border-[#5eead4] border-l-3 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Sparkle />
        <BannerText />
      </div>
    </motion.div>
  );
}

function Frame21() {
  return (
    <a className="bg-[#1d568d] content-stretch cursor-pointer flex h-[56px] items-center justify-end px-[24px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-left text-white whitespace-nowrap">Send $1,200.00</p>
    </a>
  );
}

function CtaGroup() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0 w-full" data-name="cta-group">
      <Frame21 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Funds are debited from your USD account immediately.</p>
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <MainHeader />
        <SummaryStrip />
        <FxHeroCard />
        <ComplianceBox />
        <AiBanner />
        <CtaGroup />
      </div>
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="Frame">
      <Frame1 />
      <Frame12 />
    </div>
  );
}

export default function AdminPayoutInbox() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="admin-payout-inbox">
      <TopBar />
      <Frame />
    </div>
  );
}