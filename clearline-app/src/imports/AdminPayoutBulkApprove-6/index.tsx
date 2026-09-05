import { motion } from "motion/react";
import svgPaths from "./svg-4s5wm7x3hw";

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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[20px] whitespace-nowrap">Paynetic</p>
    </div>
  );
}

function TopBar() {
  return (
    <motion.div className="bg-white h-[56px] relative shrink-0 w-full" data-name="top-bar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
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

function Frame7() {
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
          <Frame7 />
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

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Insights />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame9 />
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Users />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame11 />
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

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Settings />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame13 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[240px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start py-[24px] relative size-full">
        <Frame2 />
        <Frame4 />
        <Frame8 />
        <Frame10 />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[12px] uppercase whitespace-nowrap">3 Pending</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Payouts</p>
      <Frame16 />
    </div>
  );
}

function BulkApprove() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0 w-[134px]" data-name="bulk-approve">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[15px] whitespace-nowrap">New Payout</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Bulk Approve</p>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="header-actions">
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <BulkApprove />
      <HeaderActions />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#1d568d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-white h-[2px] relative rounded-[1px] shrink-0 w-[10px]" data-name="Rectangle" />
    </div>
  );
}

function BulkActionBar() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="bulk-action-bar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[12px] relative size-full">
          <Checkbox />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">2 of 5 selected</p>
        </div>
      </div>
    </div>
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

function Checkbox1() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#1d568d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function NameRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="name-row">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] whitespace-nowrap">Priya Sharma</p>
    </div>
  );
}

function ContractorInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contractor-info">
      <NameRow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">INV-2024-0042</p>
    </div>
  );
}

function IconDoc() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-doc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-doc">
          <path d={svgPaths.p282b3900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnReview() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="btn-review">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Review</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[16px] relative size-full">
          <Checkbox1 />
          <Avatar />
          <ContractorInfo />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 3, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] w-[100px]">$1,200.00</p>
          <IconDoc />
          <BtnReview />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white opacity-50 relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">AC</p>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4869)" id="alert-triangle">
          <path d={svgPaths.p27077b00} id="Vector" stroke="var(--stroke-0, #F05A4A)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4869">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AnomalyBadge() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="anomaly-badge">
      <AlertTriangle />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f05a4a] text-[11px] uppercase whitespace-nowrap">Anomaly</p>
    </div>
  );
}

function NameRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="name-row">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] whitespace-nowrap">Alex Chen</p>
      <AnomalyBadge />
    </div>
  );
}

function ContractorInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contractor-info">
      <NameRow1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">INV-2024-0038</p>
    </div>
  );
}

function IconDoc1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-doc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-doc">
          <path d={svgPaths.p282b3900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnReview1() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="btn-review">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Review</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-[#fef2f1] relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#f05a4a] border-b border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[16px] relative size-full">
          <Checkbox2 />
          <Avatar1 />
          <ContractorInfo1 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 4, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] w-[100px]">$2,400.00</p>
          <IconDoc1 />
          <BtnReview1 />
        </div>
      </div>
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

function Checkbox3() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#1d568d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#ec4899] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">SM</p>
    </div>
  );
}

function NameRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="name-row">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] whitespace-nowrap">Sarah Miller</p>
    </div>
  );
}

function ContractorInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contractor-info">
      <NameRow2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">INV-2024-0045</p>
    </div>
  );
}

function IconDoc2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-doc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-doc">
          <path d={svgPaths.p282b3900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnReview2() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="btn-review">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Review</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[16px] relative size-full">
          <Checkbox3 />
          <Avatar2 />
          <ContractorInfo2 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 3, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] w-[100px]">$850.00</p>
          <IconDoc2 />
          <BtnReview2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-white opacity-50 relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#10b981] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JL</p>
    </div>
  );
}

function AlertTriangle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4869)" id="alert-triangle">
          <path d={svgPaths.p27077b00} id="Vector" stroke="var(--stroke-0, #F05A4A)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4869">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AnomalyBadge1() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="anomaly-badge">
      <AlertTriangle1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f05a4a] text-[11px] uppercase whitespace-nowrap">Anomaly</p>
    </div>
  );
}

function NameRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="name-row">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] whitespace-nowrap">Jordan Lee</p>
      <AnomalyBadge1 />
    </div>
  );
}

function ContractorInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contractor-info">
      <NameRow3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">INV-2024-0051</p>
    </div>
  );
}

function IconDoc3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-doc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-doc">
          <path d={svgPaths.p282b3900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnReview3() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="btn-review">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Review</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-[#fef2f1] relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#f05a4a] border-b border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[16px] relative size-full">
          <Checkbox4 />
          <Avatar3 />
          <ContractorInfo3 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 5, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] w-[100px]">$3,100.00</p>
          <IconDoc3 />
          <BtnReview3 />
        </div>
      </div>
    </div>
  );
}

function Check2() {
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

function Checkbox6() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#1d568d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check2 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Checkbox6 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">MW</p>
    </div>
  );
}

function NameRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="name-row">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] whitespace-nowrap">Marcus Webb</p>
    </div>
  );
}

function ContractorInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contractor-info">
      <NameRow4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">INV-2024-0047</p>
    </div>
  );
}

function IconDoc4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-doc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-doc">
          <path d={svgPaths.p282b3900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnReview4() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="btn-review">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] whitespace-nowrap">Review</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[20px] py-[16px] relative size-full">
          <Checkbox5 />
          <Avatar4 />
          <ContractorInfo4 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[120px]">Jul 2, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[15px] w-[100px]">$970.00</p>
          <IconDoc4 />
          <BtnReview4 />
        </div>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="table-body">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <TableRow4 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
    </div>
  );
}

function TableOuter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table-outer">
      <BulkActionBar />
      <TableBody />
    </div>
  );
}

function PendingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="pending-section">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[24px] whitespace-nowrap">Pending Review</p>
      <TableOuter />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-start px-[32px] py-[14px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Approve Selected</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="footer">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">DB</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[12px] uppercase whitespace-nowrap">Sent</p>
    </div>
  );
}

function CompletedRow() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="completed-row">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <Frame20 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[14px] text-black">David Beck</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Jul 1, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-right w-[100px]">$1,500.00</p>
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function CompletedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start opacity-60 relative shrink-0 w-full" data-name="completed-section">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] whitespace-nowrap">Completed This Month</p>
      <CompletedRow />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="content-scroll">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame14 />
        <PendingSection />
        <Footer />
        <CompletedSection />
      </div>
    </div>
  );
}

function Workspace() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="workspace">
      <ContentScroll />
    </div>
  );
}

function MainColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="main-column">
      <Workspace />
    </div>
  );
}

function Frame6() {
  return (
    <motion.div className="content-stretch flex flex-[1_0_0] h-[947px] items-center justify-between min-w-px py-[10px] relative">
      <Frame1 />
      <MainColumn />
    </motion.div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full">
      <Frame6 />
    </div>
  );
}

export default function AdminPayoutBulkApprove() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="admin-payout-bulk-approve">
      <TopBar />
      <Frame5 />
    </div>
  );
}