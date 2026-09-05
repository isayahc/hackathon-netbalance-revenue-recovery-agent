import { motion } from "motion/react";
import svgPaths from "./svg-z8hfr0cp6w";

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

function Frame4() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Recurring Under $2K</p>
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Pause Policy</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Edit Policy</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">Created by</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#374151] text-[14px]">Priya Sharma</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">Last edited</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#374151] text-[14px]">Jul 1, 2026</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic p-[24px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#9ca3af] text-[14px] uppercase whitespace-nowrap">Rule Logic Summary</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#191d23] text-[18px] w-[min-content]">{`IF amount < $2,000 AND frequency = 'recurring' AND contractor_history >= 6 months THEN Auto-approve.`}</p>
        <Frame9 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#9ca3af] text-[14px]">Total Matched</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2332] text-[28px]">183</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#9ca3af] text-[14px]">Total Auto-Approved</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#16a34a] text-[28px]">142</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#9ca3af] text-[14px]">Total Flagged</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#d97706] text-[28px]">41</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[140px] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#9ca3af] text-[14px]">Est. Time Saved</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1d568d] text-[28px]">11.8 hours</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full" data-name="table-header">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[24px] items-start leading-[normal] not-italic px-[20px] py-[12px] relative size-full text-[#9ca3af] text-[11px] uppercase">
        <p className="flex-[1_0_0] min-w-px relative">Contractor</p>
        <p className="relative shrink-0 w-[120px]">Date</p>
        <p className="relative shrink-0 w-[120px]">Amount</p>
        <p className="relative shrink-0 w-[150px]">Action Taken</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0042</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] uppercase whitespace-nowrap">Auto-approved</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame23 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame19 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 5, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$1,200.00</p>
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">AC</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">Alex Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0038</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[11px] uppercase whitespace-nowrap">Flagged</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame28 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame24 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 4, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$2,400.00</p>
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">SM</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">Sarah Miller</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0035</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] uppercase whitespace-nowrap">Auto-approved</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame33 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame29 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 3, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$850.00</p>
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">DB</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">David Beck</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0031</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] uppercase whitespace-nowrap">Auto-approved</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame38 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame34 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 1, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$1,500.00</p>
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">JL</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">Jordan Lee</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0029</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[11px] uppercase whitespace-nowrap">Flagged</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame43 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame39 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jun 28, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$3,100.00</p>
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">MW</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px]">Marcus Webb</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[13px]">INV-2024-0025</p>
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
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] uppercase whitespace-nowrap">Auto-approved</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame48 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame44 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jun 25, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[16px] w-[120px]">$970.00</p>
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <TableRow4 />
        <TableRow5 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[18px] whitespace-nowrap">Matched Payouts Activity</p>
      <Frame18 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame2 />
        <Frame8 />
        <Frame12 />
        <Frame17 />
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