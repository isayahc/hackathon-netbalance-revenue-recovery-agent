import { motion } from "motion/react";
import svgPaths from "./svg-12ksxyqqeh";

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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="credit-card">
          <path d={svgPaths.p13ceb200} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trending-up">
          <path d={svgPaths.p2d3ae2e0} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="users">
          <path d={svgPaths.p15db900} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeWidth="2" />
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="settings">
          <path d={svgPaths.p59e22f0} id="Vector" stroke="var(--stroke-0, #1D568D)" strokeLinecap="round" strokeWidth="2" />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Profile</p>
      <div className="bg-[#e5e7eb] h-px opacity-10 relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[11px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[15px] whitespace-nowrap">Priya Sharma</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <Frame6 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">priya@designco.com</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4ebf1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Edit Profile</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Appearance</p>
      <div className="bg-[#e5e7eb] h-px opacity-10 relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Theme</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Choose how Paynetic looks to you</p>
    </div>
  );
}

function LightSegment() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-full relative rounded-[18px] shrink-0" data-name="light-segment">
      <div aria-hidden className="absolute border border-[#e4ebf1] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Light</p>
        </div>
      </div>
    </div>
  );
}

function DarkSegment() {
  return (
    <div className="h-full relative rounded-[18px] shrink-0" data-name="dark-segment">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Dark</p>
        </div>
      </div>
    </div>
  );
}

function PillToggle() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[40px] items-start p-[4px] relative rounded-[22px] shrink-0" data-name="pill-toggle">
      <LightSegment />
      <DarkSegment />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <PillToggle />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Compact view</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Reduce spacing in tables and lists</p>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #E4EBF1)" height="24" rx="12" width="44" />
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="thumb" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <Toggle />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Notifications</p>
      <div className="bg-[#e5e7eb] h-px opacity-10 relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Email summaries</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Get a weekly digest of payout activity</p>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="24" rx="12" width="44" />
          <circle cx="32" cy="12" fill="var(--fill-0, white)" id="thumb" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame16 />
      <Toggle1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Push notifications</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Real-time alerts for flagged payouts</p>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="24" rx="12" width="44" />
          <circle cx="32" cy="12" fill="var(--fill-0, white)" id="thumb" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame18 />
      <Toggle2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Compliance alerts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Immediate alerts for TDS and regulatory items</p>
    </div>
  );
}

function Toggle3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="24" rx="12" width="44" />
          <circle cx="32" cy="12" fill="var(--fill-0, white)" id="thumb" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame20 />
      <Toggle3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Security</p>
      <div className="bg-[#e5e7eb] h-px opacity-10 relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Two-factor authentication</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">SMS code required at login</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] whitespace-nowrap">Enabled</p>
    </div>
  );
}

function Toggle4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="toggle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #1D568D)" height="24" rx="12" width="44" />
          <circle cx="32" cy="12" fill="var(--fill-0, white)" id="thumb" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame25 />
      <Toggle4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Session timeout</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Auto sign-out after inactivity</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4ebf1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">30 minutes</p>
      <ChevronDown />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Change password</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Last changed 3 months ago</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-0 border-[#e4ebf1] border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] underline whitespace-nowrap">Update</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Integrations</p>
      <div className="bg-[#e5e7eb] h-px opacity-10 relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">Slack</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Send payout notifications to your workspace</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[11px] whitespace-nowrap">Connected</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame35 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Disconnect</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4ebf1] border-b border-solid inset-0 pointer-events-none" />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1a1d2e] text-[15px]">QuickBooks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7280] text-[13px]">Sync payouts to your accounting software</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4ebf1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1d2e] text-[14px] whitespace-nowrap">Connect</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-0 border-[#e4ebf1] border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function ContentCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[12px] shrink-0 w-[820px]" data-name="content-card">
      <div aria-hidden className="absolute border border-[#e4ebf1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1 />
      <Frame2 />
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame14 />
      <Frame15 />
      <Frame17 />
      <Frame19 />
      <Frame21 />
      <Frame22 />
      <Frame26 />
      <Frame29 />
      <Frame31 />
      <Frame32 />
      <Frame36 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#1d568d] content-stretch flex h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Save changes</p>
    </div>
  );
}

function FooterActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end pt-[32px] relative shrink-0 w-[820px]" data-name="footer-actions">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Cancel</p>
      <Frame39 />
    </div>
  );
}

function ScrollContent() {
  return (
    <motion.div className="flex-[1_0_0] min-h-px relative w-full" data-name="scroll-content">
      <div className="content-stretch flex flex-col items-start pb-[80px] pl-[80px] pt-[36px] relative size-full">
        <ContentCard />
        <FooterActions />
      </div>
    </motion.div>
  );
}

function MainArea() {
  return (
    <motion.div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="main-area">
      <TopBar />
      <ScrollContent />
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