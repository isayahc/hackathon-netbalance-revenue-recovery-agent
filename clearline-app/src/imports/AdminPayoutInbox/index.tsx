import { motion } from "motion/react";
import svgPaths from "./svg-r3vmwqr9ji";

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

function Frame15() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[12px] uppercase whitespace-nowrap">3 Pending</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Payouts</p>
      <Frame15 />
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

function Frame17() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Bulk Approve</p>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="header-actions">
      <Frame17 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <BulkApprove />
      <HeaderActions />
    </div>
  );
}

function Frame13() {
  return (
    <motion.div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame16 />
    </motion.div>
  );
}

function PendingReviewHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="pending-review-header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[18px] whitespace-nowrap">Pending Review</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-black whitespace-nowrap">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">INV-2024-0042</p>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="file-text">
          <path d={svgPaths.p26ce0680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Frame">
      <FileText />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[15px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame21 />
          <Frame22 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[150px]">Jul 5, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[16px] w-[120px]">$1,200.00</p>
          <Frame23 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">AC</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-black whitespace-nowrap">Alex Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">INV-2024-0038</p>
    </div>
  );
}

function FileText1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="file-text">
          <path d={svgPaths.p26ce0680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Frame">
      <FileText1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[15px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame26 />
          <Frame27 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[150px]">Jul 4, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[16px] w-[120px]">$2,400.00</p>
          <Frame28 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#ec4899] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">SM</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[15px] text-black whitespace-nowrap">Sarah Miller</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#9ca3af] text-[13px] w-[min-content]">INV-2024-0035</p>
    </div>
  );
}

function FileText2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="file-text">
          <path d={svgPaths.p26ce0680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Frame">
      <FileText2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[15px] whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <Frame31 />
          <Frame32 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] w-[150px]">Jul 3, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[16px] w-[120px]">$850.00</p>
          <Frame33 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame20 />
        <Frame25 />
        <Frame30 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame18() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <PendingReviewHeader />
      <Frame19 />
    </motion.div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">DB</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[12px] uppercase whitespace-nowrap">Sent</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <Frame37 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[14px] text-black">David Beck</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Jul 1, 2026</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-right w-[100px]">$1,500.00</p>
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[16px] items-start opacity-60 relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[16px] whitespace-nowrap">Completed This Month</p>
      <Frame36 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame13 />
        <Frame18 />
        <Frame35 />
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