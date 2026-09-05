import { motion } from "motion/react";
import svgPaths from "./svg-erkdd4mj9i";

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
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[12px] uppercase whitespace-nowrap">4 Active</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Approval Policies</p>
      <Frame4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p4f31472} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1d568d] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Create Policy</p>
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

function Frame7() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">All Policies</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Active (4)</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] whitespace-nowrap">Paused (1)</p>
    </div>
  );
}

function TableFilters() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start p-[4px] relative rounded-[100px] shrink-0" data-name="table-filters">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full" data-name="table-header">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[24px] items-start leading-[normal] not-italic px-[20px] py-[12px] relative size-full text-[#9ca3af] text-[11px] uppercase">
        <p className="flex-[1_0_0] min-w-px relative">Policy Details</p>
        <p className="relative shrink-0 w-[120px]">Status</p>
        <p className="relative shrink-0 w-[120px]">Created</p>
        <p className="relative shrink-0 w-[120px]">Last Triggered</p>
        <p className="relative shrink-0 text-right w-[100px]">Matches</p>
        <p className="relative shrink-0 w-[80px]">​</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px] whitespace-nowrap">Recurring Under $2K</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">Auto-approve recurring under $2,000 with 6+ months clean history</p>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 40 20" width="40">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="20" rx="10" width="40" />
          <circle cx="30" cy="10" fill="var(--fill-0, white)" id="thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Toggle />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute inset-[0_-2.3%_0_0]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.4142 18" width="18.4142">
          <g id="Icon">
            <path d="M1 9H17M9 17L17 9L9 1" id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[80px]" data-name="Frame">
      <Icon1 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame11 />
          <Frame12 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 1, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">2 hours ago</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] text-right w-[100px]">142</p>
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px] whitespace-nowrap">Tenure Gate Tier 1</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">Flag payouts to contractors with less than 2 months of history</p>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 40 20" width="40">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="20" rx="10" width="40" />
          <circle cx="30" cy="10" fill="var(--fill-0, white)" id="thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Toggle1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute inset-[0_-2.3%_0_0]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.4142 18" width="18.4142">
          <g id="Icon">
            <path d="M1 9H17M9 17L17 9L9 1" id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[80px]" data-name="Frame">
      <Icon2 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame14 />
          <Frame15 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jun 14, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">1 day ago</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] text-right w-[100px]">28</p>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px] whitespace-nowrap">High Value Executive Escalation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">Require manager approval for any single payout above $10,000</p>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 40 20" width="40">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="20" rx="10" width="40" />
          <circle cx="30" cy="10" fill="var(--fill-0, white)" id="thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Toggle2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute inset-[0_-2.3%_0_0]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.4142 18" width="18.4142">
          <g id="Icon">
            <path d="M1 9H17M9 17L17 9L9 1" id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[80px]" data-name="Frame">
      <Icon3 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame17 />
          <Frame18 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">May 28, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">3 days ago</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] text-right w-[100px]">7</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px] whitespace-nowrap">LATAM Geofence Route</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">Auto-approve bank transfers to MX/BR under $1,500</p>
    </div>
  );
}

function Toggle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 40 20" width="40">
        <g id="toggle">
          <rect fill="var(--fill-0, #E5E7EB)" height="20" rx="10" width="40" />
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Toggle3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute inset-[0_-2.3%_0_0]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.4142 18" width="18.4142">
          <g id="Icon">
            <path d="M1 9H17M9 17L17 9L9 1" id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[80px]" data-name="Frame">
      <Icon4 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame20 />
          <Frame21 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Apr 12, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Never</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] text-right w-[100px]">0</p>
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#191d23] text-[15px] whitespace-nowrap">Expiring Docs Hold</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">Block payout execution if W-8BEN is within 15 days of expiration</p>
    </div>
  );
}

function Toggle4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 40 20" width="40">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="20" rx="10" width="40" />
          <circle cx="30" cy="10" fill="var(--fill-0, white)" id="thumb" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Toggle4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute inset-[0_-2.3%_0_0]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.4142 18" width="18.4142">
          <g id="Icon">
            <path d="M1 9H17M9 17L17 9L9 1" id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[80px]" data-name="Frame">
      <Icon5 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame23 />
          <Frame24 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Mar 3, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">5 hours ago</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#191d23] text-[14px] text-right w-[100px]">11</p>
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <TableRow4 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <TableFilters />
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame2 />
        <Frame6 />
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