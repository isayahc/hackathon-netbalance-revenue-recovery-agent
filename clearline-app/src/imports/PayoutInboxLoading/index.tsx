import { motion } from "motion/react";
import svgPaths from "./svg-ywc8xczdgf";

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

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Users />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame7 />
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

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Settings />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame9 />
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
      </div>
    </motion.div>
  );
}

function Frame13() {
  return <div className="bg-[#eff6ff] h-[24px] relative rounded-[6px] shrink-0 w-[80px]" data-name="Frame" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[32px] whitespace-nowrap">Payouts</p>
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return <div className="bg-[#e5e7eb] h-[44px] relative rounded-[100px] shrink-0 w-[120px]" data-name="Frame" />;
}

function Frame11() {
  return (
    <motion.div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame14 />
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame17 />
      <p className="[word-break:break-word] font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">AI is reviewing this invoice…</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Rectangle" />
      <div className="bg-[#f3f4f6] h-[10px] relative rounded-[5px] shrink-0 w-[80px]" data-name="Rectangle" />
    </div>
  );
}

function Frame21() {
  return <div className="bg-[#f3f4f6] h-[40px] relative rounded-[100px] shrink-0 w-[100px]" data-name="Frame" />;
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="var(--fill-0, #E5E7EB)" id="Ellipse" r="16" />
            </svg>
          </div>
          <Frame20 />
          <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[100px]" data-name="Rectangle" />
          <div className="bg-[#e5e7eb] h-[14px] relative rounded-[7px] shrink-0 w-[90px]" data-name="Rectangle" />
          <div className="bg-[#f3f4f6] relative rounded-[4px] shrink-0 size-[20px]" data-name="Rectangle" />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Rectangle" />
      <div className="bg-[#f3f4f6] h-[10px] relative rounded-[5px] shrink-0 w-[80px]" data-name="Rectangle" />
    </div>
  );
}

function Frame24() {
  return <div className="bg-[#f3f4f6] h-[40px] relative rounded-[100px] shrink-0 w-[100px]" data-name="Frame" />;
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="var(--fill-0, #E5E7EB)" id="Ellipse" r="16" />
            </svg>
          </div>
          <Frame23 />
          <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[100px]" data-name="Rectangle" />
          <div className="bg-[#e5e7eb] h-[14px] relative rounded-[7px] shrink-0 w-[90px]" data-name="Rectangle" />
          <div className="bg-[#f3f4f6] relative rounded-[4px] shrink-0 size-[20px]" data-name="Rectangle" />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Rectangle" />
      <div className="bg-[#f3f4f6] h-[10px] relative rounded-[5px] shrink-0 w-[80px]" data-name="Rectangle" />
    </div>
  );
}

function Frame27() {
  return <div className="bg-[#f3f4f6] h-[40px] relative rounded-[100px] shrink-0 w-[100px]" data-name="Frame" />;
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[20px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="var(--fill-0, #E5E7EB)" id="Ellipse" r="16" />
            </svg>
          </div>
          <Frame26 />
          <div className="bg-[#e5e7eb] h-[12px] relative rounded-[6px] shrink-0 w-[100px]" data-name="Rectangle" />
          <div className="bg-[#e5e7eb] h-[14px] relative rounded-[7px] shrink-0 w-[90px]" data-name="Rectangle" />
          <div className="bg-[#f3f4f6] relative rounded-[4px] shrink-0 size-[20px]" data-name="Rectangle" />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame19 />
        <Frame22 />
        <Frame25 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame15() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <Frame18 />
    </motion.div>
  );
}

function Frame10() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <Frame11 />
        <Frame15 />
      </div>
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="Frame">
      <Frame1 />
      <Frame10 />
    </div>
  );
}

export default function PayoutInboxLoading() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="payout-inbox-loading">
      <TopBar />
      <Frame />
    </div>
  );
}