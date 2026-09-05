import { motion } from "motion/react";
import svgPaths from "./svg-rj36hz5kfq";

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
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame3 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
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
    <div className="bg-[#eef4ff] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Payments</p>
        </div>
      </div>
    </div>
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

function XCircle() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="x-circle">
          <path d={svgPaths.p3bd3c280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ff715b] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <XCircle />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] not-italic relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#1a2332] text-[34px] whitespace-nowrap">Payout Failed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[18px] text-center w-[540px]">₹1,59,240 to Priya Sharma was rejected by the beneficiary bank.</p>
    </div>
  );
}

function Frame13() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Frame14 />
      <Frame15 />
    </motion.div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p3a29f280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#16a34a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <Check />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a2332] text-[14px]">Initiated</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">July 3, 2026</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[12px] relative" data-name="Frame">
      <div className="bg-[#007b6b] flex-[1_0_0] h-[2px] min-w-px relative" data-name="Rectangle" />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p3a29f280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#16a34a] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <Check1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a2332] text-[14px]">Processing</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">July 3, 2026</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[12px] relative" data-name="Frame">
      <div className="bg-[#ff715b] flex-[1_0_0] h-[2px] min-w-px relative" data-name="Rectangle" />
    </div>
  );
}

function XCircle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_5959)" id="x-circle">
          <path d={svgPaths.p1f533700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5959">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#ff715b] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <XCircle1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#ff715b] text-[14px]">Failed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">July 4, 2026 · 09:14 AM</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[140px]" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Timeline() {
  return (
    <motion.div className="content-stretch flex items-start relative shrink-0 w-[540px]" data-name="timeline">
      <Frame16 />
      <Frame19 />
      <Frame20 />
      <Frame23 />
      <Frame24 />
    </motion.div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative shrink-0 text-[14px]" data-name="Frame">
      <p className="leading-[1.5] relative shrink-0 text-[#1a2332] w-[500px]">The transfer was rejected by HDFC Bank. This is typically caused by an account number mismatch or account closure. Your funds were not debited.</p>
      <p className="leading-[normal] relative shrink-0 text-[#4b5563] w-[460px]">If a debit did occur, funds will be returned within 3–5 business days.</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_5969)" id="copy">
          <path d={svgPaths.p2d325300} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5969">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[13px] whitespace-nowrap">PAY-2026-0047183</p>
      <Copy />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Reference ID</p>
      <Frame30 />
    </div>
  );
}

function Frame27() {
  return (
    <motion.div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[540px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">What Happened</p>
      <Frame28 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 1">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="500" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame29 />
    </motion.div>
  );
}

function Sparkles() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="sparkles">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_5972)" id="sparkles">
          <path d={svgPaths.p1bbba4f0} id="Vector" stroke="url(#paint0_linear_1_5972)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5972" x1="7.5585" x2="19.3461" y1="14.465" y2="2.67596">
            <stop stopColor="#5EEAD4" />
            <stop offset="0.55" stopColor="#00B5A6" />
            <stop offset="1" stopColor="#0D8080" />
          </linearGradient>
          <clipPath id="clip0_1_5972">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Sparkles />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#083117] text-[16px] whitespace-nowrap">Retry via Global Wallet</p>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="help-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_5956)" id="help-circle">
          <path d={svgPaths.p38f73f00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5956">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame34 />
      <HelpCircle />
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[100px]" style={{ backgroundImage: "linear-gradient(9.69444deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="Frame">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Retry via Wallet</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#5eead4] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(7.28402deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
            Retry same method
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f0fdfc] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[540px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#5eead4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame33 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">98% success rate to this contractor · Arrives in ~2 hours · +$1.50 vs. bank transfer</p>
      <Frame35 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] text-center underline w-full">Contact support</p>
    </div>
  );
}

function Frame31() {
  return (
    <motion.div className="content-stretch flex flex-col items-start relative shrink-0 w-[540px]" data-name="Frame">
      <Frame32 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[60px] relative size-full">
          <Frame13 />
          <Timeline />
          <Frame27 />
          <Frame31 />
          <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] underline whitespace-nowrap">Go to dashboard</p>
        </div>
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

export default function PayoutFailedDetail() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="payout-failed-detail">
      <TopBar />
      <Frame />
    </div>
  );
}