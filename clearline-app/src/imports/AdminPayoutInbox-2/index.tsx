import { motion } from "motion/react";
import svgPaths from "./svg-jsy1k8lty7";

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

function Frame14() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <X />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[32px] relative shrink-0 w-full" data-name="main-header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[24px] whitespace-nowrap">Payment Method</p>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border-6 border-[#5eead4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function AiBadge() {
  return (
    <div className="bg-[#e6f9f8] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="ai-badge">
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(9.86581deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
        AI suggested ✦
      </p>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="help-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_4822)" id="help-circle">
          <path d={svgPaths.p26423ac2} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4822">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AiBadgeGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ai-badge-group">
      <AiBadge />
      <HelpCircle />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title-row">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#191d23] text-[16px] whitespace-nowrap">Bank Transfer</p>
      <AiBadgeGroup />
    </div>
  );
}

function Details() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-name="details">
      <p className="relative shrink-0">🕐 Estimated 2-3 business days</p>
      <p className="relative shrink-0">$ $2.00 flat fee</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="card-content">
      <TitleRow />
      <Details />
    </div>
  );
}

function RadioCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,179,164,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="radio-card">
      <div aria-hidden className="absolute border-2 border-[#5eead4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Frame15 />
        <CardContent />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TitleRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title-row">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#191d23] text-[16px] whitespace-nowrap">Crypto (USDC)</p>
    </div>
  );
}

function Details1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-name="details">
      <p className="relative shrink-0">⚡ Within 1 hour</p>
      <p className="relative shrink-0">~$0.50 network gas</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="card-content">
      <TitleRow1 />
      <Details1 />
    </div>
  );
}

function RadioCard1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="radio-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Frame16 />
        <CardContent1 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TitleRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title-row">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#191d23] text-[16px] whitespace-nowrap">Wallet Balance</p>
    </div>
  );
}

function Details2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-name="details">
      <p className="relative shrink-0">⚡ Instant</p>
      <p className="relative shrink-0">Free</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="card-content">
      <TitleRow2 />
      <Details2 />
    </div>
  );
}

function RadioCard2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="radio-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Frame17 />
        <CardContent2 />
      </div>
    </div>
  );
}

function OptionsStack() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="options-stack">
      <RadioCard />
      <RadioCard1 />
      <RadioCard2 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar">
          <path d={svgPaths.p58fbb00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InfoRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[24px] relative shrink-0" data-name="info-row">
      <Calendar />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">
        <span className="leading-[20px]">{`📅 Estimated arrival: `}</span>
        <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[20px]">Friday, July 11, 2026</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <motion.div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <MainHeader />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">Select how Priya Sharma will receive this payment.</p>
      <OptionsStack />
      <InfoRow />
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-start px-[32px] py-[14px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Continue</p>
    </div>
  );
}

function Footer() {
  return (
    <motion.div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="footer">
      <Frame18 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame13 />
        <Footer />
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