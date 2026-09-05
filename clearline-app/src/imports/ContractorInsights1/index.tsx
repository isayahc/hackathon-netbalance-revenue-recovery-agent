import { motion } from "motion/react";
import svgPaths from "./svg-f34gqcfggc";

function Frame() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">P</p>
    </div>
  );
}

function LogoSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo-section">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[20px] whitespace-nowrap">Paynetic</p>
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
      <svg className="absolute block inset-0 size-full" fill="none" height="16.2" preserveAspectRatio="none" viewBox="0 0 16.2 16.2" width="16.2">
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <LayoutDashboard />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame2 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="credit-card">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.2" preserveAspectRatio="none" viewBox="0 0 16.2 16.2" width="16.2">
        <g id="credit-card">
          <path d={svgPaths.p38b0c380} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CreditCard />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame4 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Payments</p>
        </div>
      </div>
    </div>
  );
}

function Insights() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="insights">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.2" preserveAspectRatio="none" viewBox="0 0 16.2 16.2" width="16.2">
        <g id="insights">
          <path d={svgPaths.pe611000} fill="var(--fill-0, #1D568D)" id="Vector" />
          <path d={svgPaths.p29ac06f0} fill="var(--fill-0, #1D568D)" id="Vector_2" />
          <path d={svgPaths.p33b1f900} fill="var(--fill-0, #1D568D)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Insights />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#eef4ff] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame6 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16406a] text-[14px] whitespace-nowrap">Insights</p>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.2" preserveAspectRatio="none" viewBox="0 0 16.2 16.2" width="16.2">
        <g id="users">
          <path d={svgPaths.p14c24680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Users />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame8 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Contractors</p>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16.2px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.2" preserveAspectRatio="none" viewBox="0 0 16.2 16.2" width="16.2">
        <g id="settings">
          <path d={svgPaths.pbd6a600} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Settings />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame10 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <motion.div className="bg-white h-full relative shrink-0 w-[240px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start py-[24px] relative size-full">
        <Frame1 />
        <Frame3 />
        <Frame5 />
        <Frame7 />
        <Frame9 />
      </div>
    </motion.div>
  );
}

function TitleGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="title-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[24px]">Contractor Insights</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">AI-generated summary of contractor payment activity</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">This Quarter</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">Last Quarter</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Last 6 Months</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">Last 12 Months</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start p-[4px] relative rounded-[100px] shrink-0" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Frame">
          <rect height="31" rx="5.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p2fabc980} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="actions">
      <Frame11 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">Last updated 2h ago</p>
      <Frame16 />
    </div>
  );
}

function MainHeader() {
  return (
    <motion.div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="main-header">
      <TitleGroup />
      <Actions />
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Frame">
          <rect fill="url(#paint0_linear_24_504)" height="32" rx="16" width="32" />
          <path d={svgPaths.p3d8f3100} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_504" x1="11.3138" x2="33.9415" y1="24.5691" y2="1.94145">
            <stop stopColor="#5EEAD4" />
            <stop offset="0.55" stopColor="#00B5A6" />
            <stop offset="1" stopColor="#0D8080" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="Frame">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-[transparent] uppercase whitespace-nowrap" style={{ backgroundImage: "linear-gradient(10.3591deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
        AI Summary
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#374151] text-[14px] w-[min-content]">
        <span className="leading-[22px]">{`You paid 38 contractors $412,600 over the last 6 months - up 8% from the prior 6-month period. 33 contractors remained fully consistent throughout. `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22px] text-[#00b5a6] underline">5 need attention</span>
        <span className="leading-[22px]">{`: `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22px] text-[#00b5a6] underline">3 anomaly flags</span>
        <span className="leading-[22px]">{`, `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22px] text-[#00b5a6] underline">1 expiring tax document</span>
        <span className="leading-[22px]">, and 1 new bank account unverified.</span>
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">How was this generated? ↗</p>
    </div>
  );
}

function AiSummary() {
  return (
    <motion.div className="bg-[#f0fafa] relative rounded-[16px] shrink-0 w-full" data-name="ai-summary">
      <div aria-hidden className="absolute border border-[#b2e8e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[20px] items-start p-[24px] relative size-full">
        <Frame17 />
        <Frame18 />
      </div>
    </motion.div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Total Paid</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start justify-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a1d2e] text-[28px]">$412,600</p>
      <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[13px] text-[transparent]" style={{ backgroundImage: "linear-gradient(8.20235deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
        +8% vs prior 6mo
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame20 />
        <Frame21 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Active Contractors</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">38</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame23 />
        <Frame24 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Consistent</p>
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p1e9cc380} id="Vector" stroke="url(#paint0_linear_24_502)" strokeWidth="2" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_502" x1="8.07114" x2="22.2134" y1="16.3557" y2="2.21341">
                <stop stopColor="#5EEAD4" />
                <stop offset="0.55" stopColor="#00B5A6" />
                <stop offset="1" stopColor="#0D8080" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">33</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame26 />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Needs Attention</p>
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 20 14" width="20">
            <path d={svgPaths.p326afa80} id="Vector" stroke="var(--stroke-0, #F87171)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame29 />
        <Frame30 />
      </div>
    </div>
  );
}

function KpiRow() {
  return (
    <motion.div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="kpi-row">
      <Frame19 />
      <Frame22 />
      <Frame25 />
      <Frame28 />
    </motion.div>
  );
}

function YAxis() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-right w-[60px]" data-name="y-axis">
      <p className="relative shrink-0 w-full">$80k</p>
      <p className="relative shrink-0 w-full">$60k</p>
      <p className="relative shrink-0 w-full">$40k</p>
      <p className="relative shrink-0 w-full">$20k</p>
      <p className="relative shrink-0 w-full">0</p>
    </div>
  );
}

function BarsTrack() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bars-track">
      <div className="absolute h-0 left-[40px] top-[270px] w-[944px]" data-name="grid-line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 944 1" width="944">
            <line id="grid-line" opacity="0.8" stroke="var(--stroke-0, #E6E6E6)" x2="944" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[202.5px] w-[944px]" data-name="grid-line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 944 1" width="944">
            <line id="grid-line" opacity="0.8" stroke="var(--stroke-0, #E6E6E6)" x2="944" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[135px] w-[944px]" data-name="grid-line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 944 1" width="944">
            <line id="grid-line" opacity="0.8" stroke="var(--stroke-0, #E6E6E6)" x2="944" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[67.5px] w-[944px]" data-name="grid-line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 944 1" width="944">
            <line id="grid-line" opacity="0.8" stroke="var(--stroke-0, #E6E6E6)" x2="944" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-0 w-[944px]" data-name="grid-line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 944 1" width="944">
            <line id="grid-line" opacity="0.8" stroke="var(--stroke-0, #E6E6E6)" x2="944" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[262.5px] left-[40px] top-[7.5px] w-[944px]" data-name="area-fill">
        <svg className="absolute block inset-0 size-full" fill="none" height="262.5" preserveAspectRatio="none" viewBox="0 0 944 262.5" width="944">
          <path d={svgPaths.p19b4f780} fill="url(#paint0_linear_24_491)" id="area-fill" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_491" x1="472" x2="472" y1="12.3" y2="262.5">
              <stop stopColor="#0F4C8A" stopOpacity="0.15" />
              <stop offset="1" stopColor="#0F4C8A" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[93.5px] left-[40.5px] top-[6.5px] w-[943.5px]" data-name="line-graph">
        <div className="absolute inset-[-1.34%_-0.13%]">
          <svg className="block size-full" fill="none" height="96.0003" preserveAspectRatio="none" viewBox="0 0 946.001 96.0003" width="946.001">
            <path d={svgPaths.p32c86e80} id="line-graph" stroke="var(--stroke-0, #0F4C8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[36px] size-[8px] top-[96px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute left-[224.8px] size-[8px] top-[33.8px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute left-[413.6px] size-[8px] top-[63px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute left-[602.4px] size-[8px] top-[38px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute left-[791.2px] size-[8px] top-[3px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="absolute left-[980px] size-[8px] top-[51.8px]" data-name="data-point">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="data-point" r="2.75" stroke="var(--stroke-0, #0F4C8A)" strokeWidth="2.5" />
        </svg>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">Apr</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[228.8px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">May</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[417.6px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">Jun</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[606.4px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">Jul</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[795.2px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">Aug</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[984px] not-italic text-[#808080] text-[12px] text-center top-[282px] whitespace-nowrap">Sep</p>
    </div>
  );
}

function ChartContainer() {
  return (
    <div className="content-stretch flex gap-[60px] h-[300px] items-end relative shrink-0 w-full" data-name="chart-container">
      <YAxis />
      <BarsTrack />
    </div>
  );
}

function LegendItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="legend-item">
      <div className="bg-[#0f4c8a] relative rounded-[2px] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Monthly payout</p>
    </div>
  );
}

function LegendItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="legend-item">
      <div className="h-px opacity-35 relative shrink-0 w-[24px]" style={{ backgroundImage: "linear-gradient(2.38594deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">6mo avg</p>
    </div>
  );
}

function LegendItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="legend-item">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="var(--fill-0, #F87171)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Anomaly flagged</p>
    </div>
  );
}

function ChartLegend() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="chart-legend">
      <LegendItem />
      <LegendItem1 />
      <LegendItem2 />
    </div>
  );
}

function ChartCard() {
  return (
    <motion.div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="chart-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[16px] whitespace-nowrap">Payout Volume by Month</p>
        <ChartContainer />
        <ChartLegend />
      </div>
    </motion.div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#0f4c8a] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">All</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function TableFilters() {
  return (
    <div className="content-stretch flex gap-[12px] items-start p-[20px] relative shrink-0" data-name="table-filters">
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full" data-name="table-header">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[24px] items-start leading-[normal] not-italic px-[20px] py-[12px] relative size-full text-[#6b7280] text-[11px] uppercase">
        <p className="flex-[1_0_0] min-w-px relative">Contractor</p>
        <p className="relative shrink-0 w-[120px]">Total Paid</p>
        <p className="relative shrink-0 w-[140px]">Invoices</p>
        <p className="relative shrink-0 w-[120px]">Health Status</p>
        <p className="relative shrink-0 w-[120px]">Last Payout</p>
        <p className="relative shrink-0 text-right w-[100px]">Action</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#f87171] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇳 IN</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#991b1b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" height="8.4" preserveAspectRatio="none" viewBox="0 0 12 8.4" width="12">
            <path d={svgPaths.p8899d80} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f87171] text-[13px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <Frame42 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame36 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$7,200</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 83%</p>
          <Frame39 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 12, 2026</p>
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#f87171] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RP</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Ravi Patel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇳 IN</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#991b1b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" height="8.4" preserveAspectRatio="none" viewBox="0 0 12 8.4" width="12">
            <path d={svgPaths.p8899d80} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f87171] text-[13px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <Frame50 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame44 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$18,600</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">12 · 75%</p>
          <Frame47 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 14, 2026</p>
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">AC</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Alex Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#92400e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame52 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$14,400</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame55 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 5, 2026</p>
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JL</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Jordan Lee</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#92400e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame59 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$8,400</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">5 · 80%</p>
          <Frame62 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Aug 28, 2026</p>
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">SM</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Sarah Miller</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇬🇧 GB</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame70 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame66 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$10,200</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame69 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 15, 2026</p>
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">MW</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Marcus Webb</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame77 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame73 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$6,800</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">4 · 100%</p>
          <Frame76 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 10, 2026</p>
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">EV</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Elena Vasquez</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇲🇽 MX</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame84 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame80 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$9,600</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame83 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 8, 2026</p>
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">DB</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">David Beck</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇩🇪 DE</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame87 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$7,500</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">5 · 100%</p>
          <Frame90 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Aug 30, 2026</p>
          <Frame92 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">AT</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Aiko Tanaka</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇯🇵 JP</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame98 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame94 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$12,000</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame97 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 14, 2026</p>
          <Frame99 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">LO</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">{`Liam O'Brien`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇪 IE</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame105 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame101 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$8,100</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame104 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 11, 2026</p>
          <Frame106 />
        </div>
      </div>
    </div>
  );
}

function TableSection() {
  return (
    <motion.div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="table-section">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableFilters />
        <TableHeader />
        <Frame35 />
        <Frame43 />
        <Frame51 />
        <Frame58 />
        <Frame65 />
        <Frame72 />
        <Frame79 />
        <Frame86 />
        <Frame93 />
        <Frame100 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </motion.div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p2779ba80} id="Vector" stroke="url(#paint0_linear_24_483)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_483" x1="7.07114" x2="21.2134" y1="15.3557" y2="1.21341">
              <stop stopColor="#5EEAD4" />
              <stop offset="0.55" stopColor="#00B5A6" />
              <stop offset="1" stopColor="#0D8080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[16px] whitespace-nowrap">Suggested Actions</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="url(#paint0_linear_24_510)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_510" x1="7.07114" x2="21.2134" y1="15.3557" y2="1.21341">
              <stop stopColor="#5EEAD4" />
              <stop offset="0.55" stopColor="#00B5A6" />
              <stop offset="1" stopColor="#0D8080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Convert to recurring</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" style={{ backgroundImage: "linear-gradient(12.9645deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Set Up Recurring</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame112 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame110 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">{`Priya Sharma's invoices have been identical at $1,200/mo for 6 months. Consider auto-approving recurring invoices.`}</p>
        <Frame111 />
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="url(#paint0_linear_24_510)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_510" x1="7.07114" x2="21.2134" y1="15.3557" y2="1.21341">
              <stop stopColor="#5EEAD4" />
              <stop offset="0.55" stopColor="#00B5A6" />
              <stop offset="1" stopColor="#0D8080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Tax form renewals needed</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" style={{ backgroundImage: "linear-gradient(12.2005deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Request Renewals</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame116 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame114 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">{`3 contractors' W-8BEN forms expire within 30 days. Request renewals to avoid payment holds.`}</p>
        <Frame115 />
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="url(#paint0_linear_24_510)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_510" x1="7.07114" x2="21.2134" y1="15.3557" y2="1.21341">
              <stop stopColor="#5EEAD4" />
              <stop offset="0.55" stopColor="#00B5A6" />
              <stop offset="1" stopColor="#0D8080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Brazil payout method</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" style={{ backgroundImage: "linear-gradient(13.431deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }} data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Switch to Wallet</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame120 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame118 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">2 bank payouts to Brazil failed this quarter. Switching to Wallet has a 98% success rate.</p>
        <Frame119 />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame109 />
      <Frame113 />
      <Frame117 />
    </div>
  );
}

function SuggestedActions() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="suggested-actions">
      <Frame107 />
      <Frame108 />
    </motion.div>
  );
}

function ContentScroll() {
  return (
    <motion.div className="flex-[1_0_0] h-[2012px] min-w-px relative" data-name="content-scroll">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <MainHeader />
        <AiSummary />
        <KpiRow />
        <ChartCard />
        <TableSection />
        <SuggestedActions />
      </div>
    </motion.div>
  );
}

function PageBody() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="page-body">
      <Sidebar />
      <ContentScroll />
    </div>
  );
}

export default function ContractorInsights() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col items-start relative size-full" data-name="contractor-insights 1">
      <TopBar />
      <PageBody />
    </div>
  );
}