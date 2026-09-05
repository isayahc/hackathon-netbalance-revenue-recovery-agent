import { motion } from "motion/react";
import svgPaths from "./svg-tdlgvqufgm";
import imgEllipse from "./d73b316c8bf3dbf8f56dfa5d32244f0bd5cd2dd0.png";

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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <div className="absolute bottom-1/4 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.0001">
            <path d={svgPaths.p3c093cf0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse} width="32" />
      </div>
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
          <Frame1 />
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
          <path d={svgPaths.p38b0c380} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
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
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Payments</p>
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
          <path d={svgPaths.pe611000} fill="var(--fill-0, #1D568D)" id="Vector" />
          <path d={svgPaths.p29ac06f0} fill="var(--fill-0, #1D568D)" id="Vector_2" />
          <path d={svgPaths.p33b1f900} fill="var(--fill-0, #1D568D)" id="Vector_3" />
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
    <a className="bg-[#eef4ff] cursor-pointer relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame7 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16406a] text-[14px] text-left whitespace-nowrap">Insights</p>
        </div>
      </div>
    </a>
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

function Sidebar() {
  return (
    <motion.div className="bg-white h-full relative shrink-0 w-[240px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
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

function TitleGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="title-group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[24px]">Contractor Insights</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">AI-generated summary of contractor payment activity</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">This Quarter</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">Last Quarter</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Last 6 Months</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">Last 12 Months</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start p-[4px] relative rounded-[100px] shrink-0" data-name="Frame">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
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
      <Frame12 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">Last updated 2h ago</p>
      <Frame17 />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="main-header">
      <TitleGroup />
      <Actions />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #00B5A6)" height="32" rx="16" width="32" />
          <path d={svgPaths.p3d8f3100} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00b5a6] text-[14px] uppercase whitespace-nowrap">AI Summary</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#374151] text-[14px] w-[min-content]">
        <span className="leading-[22px]">{`You paid 38 contractors $412,600 over the last 6 months — up 8% from the prior 6-month period. 33 contractors remained fully consistent throughout. `}</span>
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
    <div className="bg-[#f0fafa] relative rounded-[16px] shrink-0 w-full" data-name="ai-summary">
      <div aria-hidden className="absolute border border-[#b2e8e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[20px] items-start p-[24px] relative size-full">
        <Frame18 />
        <Frame19 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Total Paid</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start justify-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a1d2e] text-[28px]">$412,600</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#00b5a6] text-[13px]">+8% vs prior 6mo</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame21 />
        <Frame22 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Active Contractors</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">38</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame24 />
        <Frame25 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Consistent</p>
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p1e9cc380} id="Vector" stroke="var(--stroke-0, #00B5A6)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">33</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame27 />
        <Frame28 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Needs Attention</p>
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p326afa80} id="Vector" stroke="var(--stroke-0, #F87171)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[28px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Frame30 />
        <Frame31 />
      </div>
    </div>
  );
}

function KpiRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="kpi-row">
      <Frame20 />
      <Frame23 />
      <Frame26 />
      <Frame29 />
    </div>
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

function Frame33() {
  return <div className="bg-[#0f4c8a] h-[234px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame33 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Apr</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[8px] top-[-45px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Frame">
          <circle cx="4" cy="4" fill="var(--fill-0, #F87171)" id="Ellipse" r="3" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#0f4c8a] content-stretch flex flex-col h-[258px] items-start relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame">
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame35 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">May</p>
    </div>
  );
}

function Frame38() {
  return <div className="bg-[#0f4c8a] h-[267px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame38 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Jun</p>
    </div>
  );
}

function Frame40() {
  return <div className="bg-[#0f4c8a] h-[272px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame40 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Jul</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#1a1d2e] content-stretch drop-shadow-[0px_4px_4px_rgba(0,0,0,0.13)] flex items-start px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">2 flags — view</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-1/2 top-[-45px]" data-name="Frame">
      <Frame44 />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #F87171)" id="Ellipse" r="3" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#0f4c8a] content-stretch flex flex-col h-[278px] items-start relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame">
      <Frame43 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame42 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Aug</p>
    </div>
  );
}

function Frame46() {
  return <div className="bg-[#0f4c8a] h-[238px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[40px]" data-name="Frame" />;
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[60px]" data-name="Frame">
      <Frame46 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Sep</p>
    </div>
  );
}

function BarsTrack() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px relative" data-name="bars-track">
      <Frame32 />
      <Frame34 />
      <Frame37 />
      <Frame39 />
      <Frame41 />
      <Frame45 />
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

function ChartCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="chart-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[16px] whitespace-nowrap">Payout Volume by Month</p>
        <ChartContainer />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#0f4c8a] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">All</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex h-[28px] items-center px-[16px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function TableFilters() {
  return (
    <div className="content-stretch flex gap-[12px] items-start p-[20px] relative shrink-0" data-name="table-filters">
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
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

function Frame53() {
  return (
    <div className="bg-[#f87171] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇳 IN</p>
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
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#991b1b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.4">
            <path d={svgPaths.p8899d80} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Attention</p>
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

function Frame58() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f87171] text-[13px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <Frame58 />
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
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$7,200</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 83%</p>
          <Frame55 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 12, 2026</p>
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#f87171] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RP</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Ravi Patel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇳 IN</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#991b1b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.4">
            <path d={svgPaths.p8899d80} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f87171] text-[13px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <Frame66 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame60 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$18,600</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">12 · 75%</p>
          <Frame63 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 14, 2026</p>
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">AC</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Alex Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame69 />
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#92400e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame72 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame68 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$14,400</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame71 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 5, 2026</p>
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JL</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Jordan Lee</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#92400e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">Watch</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame75 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$8,400</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">5 · 80%</p>
          <Frame78 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Aug 28, 2026</p>
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">SM</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Sarah Miller</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇬🇧 GB</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame86 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame82 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$10,200</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame85 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 15, 2026</p>
          <Frame87 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">MW</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Marcus Webb</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇺🇸 US</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame93 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame89 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$6,800</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">4 · 100%</p>
          <Frame92 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 10, 2026</p>
          <Frame94 />
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">EV</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Elena Vasquez</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇲🇽 MX</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame100 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame96 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$9,600</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame99 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 8, 2026</p>
          <Frame101 />
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">DB</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">David Beck</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇩🇪 DE</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame107 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame103 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$7,500</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">5 · 100%</p>
          <Frame106 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Aug 30, 2026</p>
          <Frame108 />
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">AT</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">Aiko Tanaka</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇯🇵 JP</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame114 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame110 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$12,000</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame113 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 14, 2026</p>
          <Frame115 />
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-[#94a3b8] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">LO</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[14px]">{`Liam O'Brien`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px]">🇮🇪 IE</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#ccfaf6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d7a70] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d7a70] text-[12px] whitespace-nowrap">Consistent</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame121 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[100px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[13px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[14px] relative size-full">
          <Frame117 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] w-[120px]">$8,100</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[140px]">6 · 100%</p>
          <Frame120 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[120px]">Sep 11, 2026</p>
          <Frame122 />
        </div>
      </div>
    </div>
  );
}

function TableSection() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="table-section">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableFilters />
        <TableHeader />
        <Frame51 />
        <Frame59 />
        <Frame67 />
        <Frame74 />
        <Frame81 />
        <Frame88 />
        <Frame95 />
        <Frame102 />
        <Frame109 />
        <Frame116 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2779ba80} id="Vector" stroke="var(--stroke-0, #00B5A6)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[16px] whitespace-nowrap">Suggested Actions</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="var(--stroke-0, #00B5A6)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Convert to recurring</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#00b5a6] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Set Up Recurring</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame128 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame126 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">{`Priya Sharma's invoices have been identical at $1,200/mo for 6 months. Consider auto-approving recurring invoices.`}</p>
        <Frame127 />
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="var(--stroke-0, #00B5A6)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Tax form renewals needed</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#00b5a6] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Request Renewals</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame132 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame130 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">{`3 contractors' W-8BEN forms expire within 30 days. Request renewals to avoid payment holds.`}</p>
        <Frame131 />
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p27b4370} id="Vector" stroke="var(--stroke-0, #00B5A6)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Brazil payout method</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#00b5a6] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Switch to Wallet</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <Frame136 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Dismiss</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame134 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]">2 bank payouts to Brazil failed this quarter. Switching to Wallet has a 98% success rate.</p>
        <Frame135 />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame125 />
      <Frame129 />
      <Frame133 />
    </div>
  );
}

function SuggestedActions() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="suggested-actions">
      <Frame123 />
      <Frame124 />
    </div>
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

function XCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_4928)" id="x-circle">
          <path d={svgPaths.p30a06080} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4928">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[18px] whitespace-nowrap">Contractor Details</p>
          <XCircle />
        </div>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#f87171] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1d2e] text-[18px]">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[14px]">🇮🇳 Bangalore, India</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame140 />
      <Frame141 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#991b1b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[0_0_30%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.4">
            <path d={svgPaths.p8899d80} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[12px] whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">Health Status</p>
      <Frame144 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#f7f8fa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Frame143 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">An anomaly was detected in August. Payout was 45% higher than previous 6-month average.</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px]">Total Paid (6mo)</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[14px]">$7,200</p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px]">Invoices</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[14px]">6 submitted</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px]">Avg. Approval Time</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[14px]">4.2 hours</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[12px]">Payment Method</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[14px]">Global Wallet</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame146 />
      <Frame147 />
      <Frame148 />
      <Frame149 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <Frame139 />
        <Frame142 />
        <Frame145 />
      </div>
    </div>
  );
}

function Panel() {
  return (
    <motion.div className="absolute bg-white bottom-0 content-stretch drop-shadow-[-8px_0px_12px_rgba(0,0,0,0.13)] flex flex-col items-start right-0 top-0 w-[380px]" data-name="panel">
      <Frame137 />
      <Frame138 />
    </motion.div>
  );
}

function PanelWrapper() {
  return (
    <motion.div className="absolute bottom-0 content-stretch flex items-start left-0 top-0 w-[1512px]" data-name="panel-wrapper">
      <motion.div className="bg-[rgba(0,0,0,0.25)] flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle" />
      <Panel />
    </motion.div>
  );
}

export default function ContractorInsights() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col items-start relative size-full" data-name="contractor-insights 5">
      <TopBar />
      <PageBody />
      <PanelWrapper />
    </div>
  );
}