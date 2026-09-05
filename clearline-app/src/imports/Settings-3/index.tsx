import { motion } from "motion/react";
import svgPaths from "./svg-uf7mjr7gv8";

function Frame() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">P</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="logo">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[20px] relative size-full">
          <Frame />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[20px] whitespace-nowrap">Paynetic</p>
        </div>
      </div>
    </div>
  );
}

function LayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="layout-dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.pff0fc00} stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1d76d410} stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2f091200} stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p39897300} stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <LayoutDashboard />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="credit-card">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="credit-card">
          <path d={svgPaths.p2c855700} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavPayments() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="nav-Payments">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <CreditCard />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Payments</p>
        </div>
      </div>
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="trending-up">
          <path d={svgPaths.p2f69dc80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavInsights() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="nav-Insights">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <TrendingUp />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Insights</p>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="users">
          <path d={svgPaths.p270f6480} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavContractors() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="nav-Contractors">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Users />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Contractors</p>
        </div>
      </div>
    </div>
  );
}

function Settings1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="settings">
          <path d={svgPaths.p2a60fe80} id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavSettings() {
  return (
    <div className="bg-[#eef4ff] h-[40px] relative shrink-0 w-full" data-name="nav-Settings">
      <div aria-hidden className="absolute border-[#1d568d] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Settings1 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full" data-name="nav-list">
      <NavDashboard />
      <NavPayments />
      <NavInsights />
      <NavContractors />
      <NavSettings />
    </div>
  );
}

function Sidebar() {
  return (
    <motion.div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-[220px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[#e4ebf1] border-r border-solid inset-0 pointer-events-none" />
      <Logo />
      <NavList />
    </motion.div>
  );
}

function TopBar() {
  return (
    <motion.div className="bg-white h-[56px] relative shrink-0 w-full" data-name="top-bar">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[22px] whitespace-nowrap">Settings</p>
        </div>
      </div>
    </motion.div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Create Approval Policy</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Exit Builder</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] whitespace-nowrap">Recurring Under $2K</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Auto-approve recurring under $2,000 with 6+ months clean history</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] uppercase whitespace-nowrap">{`Policy Name & Description`}</p>
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[11px] whitespace-nowrap">AND</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">OR</p>
    </div>
  );
}

function LogicConnector() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start p-[2px] relative rounded-[6px] shrink-0" data-name="logic-connector">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] uppercase whitespace-nowrap">If Conditions Match</p>
      <LogicConnector />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">amount</p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">{`<`}</p>
      <Icon1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] whitespace-nowrap">$2,000.00</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p45f0a80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <Frame20 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">frequency</p>
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">=</p>
      <Icon4 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] whitespace-nowrap">recurring</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p45f0a80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon5 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <Frame26 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">contractor_history</p>
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[8px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14 8" width="14">
        <g id="Icon">
          <path d="M2 1.5L7 6.5L12 1.5" id="Vector" stroke="var(--stroke-0, #8390A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#191d23] text-[14px]">{`>=`}</p>
      <Icon7 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] whitespace-nowrap">6 months</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p45f0a80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon8 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <Frame32 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame21 />
      <Frame27 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p4f31472} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon9 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Add Condition</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <Frame14 />
      <Frame33 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <circle cx="8" cy="8" fill="var(--fill-0, #1D568D)" id="Ellipse" r="7" stroke="var(--stroke-0, #1D568D)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] whitespace-nowrap">Auto-approve</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse" r="7" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Flag for review</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse" r="7" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Require manager approval</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse" r="7" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Block payout</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] uppercase whitespace-nowrap">Then Take Action</p>
      <Frame35 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#191d23] text-[14px]">Backtest Rule</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">See matches against the last 30 days of data.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Run Test</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#16406a] text-[16px]">18 payouts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#374151] text-[14px]">would have auto-approved ($21,600 total value)</p>
    </div>
  );
}

function TestResult() {
  return (
    <div className="bg-[#f0fdfc] relative rounded-[8px] shrink-0 w-full" data-name="test-result">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <Frame44 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame41 />
      <TestResult />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Save as Draft</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Save & Activate`}</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0 w-full" data-name="Frame">
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[820px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 756 1" width="756">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="756" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 756 1" width="756">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="756" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame34 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 756 1" width="756">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="756" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame40 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 756 1" width="756">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="756" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame2 />
        <Frame5 />
      </div>
    </div>
  );
}

function MainArea() {
  return (
    <motion.div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="main-area">
      <TopBar />
      <Frame1 />
    </motion.div>
  );
}

export default function Settings() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start relative size-full" data-name="Settings">
      <Sidebar />
      <MainArea />
    </div>
  );
}