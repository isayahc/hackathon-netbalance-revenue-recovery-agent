import { motion } from "motion/react";
import svgPaths from "./svg-attxrjhvhd";

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
    <a className="bg-white cursor-pointer relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame3 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] text-left whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </a>
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
    <a className="bg-[#eef4ff] cursor-pointer relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d568d] text-[14px] text-left whitespace-nowrap">Payments</p>
        </div>
      </div>
    </a>
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

function X() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="x">
          <path d="M15 5L5 15M5 5L15 15" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <X />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2332] text-[24px] whitespace-nowrap">Review Invoice</p>
      <Frame15 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[28.8px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8 28.8">
        <g id="file-text">
          <path d={svgPaths.p3391f4c0} id="Vector" stroke="url(#paint0_linear_1_4805)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4805" x1="11.5886" x2="28.146" y1="20.8273" y2="7.58373">
            <stop stopColor="#5EEAD4" />
            <stop offset="0.55" stopColor="#00B5A6" />
            <stop offset="1" stopColor="#0D8080" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <FileText />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(7.87394deg, rgb(94, 234, 212) 29.289%, rgb(0, 181, 166) 68.18%, rgb(13, 128, 128) 100%)" }}>
        ✦ AI EXTRACTED
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px] uppercase">Invoice #</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] text-black">INV-2024-0042</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative">Design Services</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 whitespace-nowrap">$850.00</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative">Dev hours</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 whitespace-nowrap">$300.00</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative">Tools</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 whitespace-nowrap">$50.00</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] text-black w-full" data-name="Frame">
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap">Line Items</p>
      <Frame24 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-black">Total Amount</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#1a2332] text-[24px]">$1,200.00 USD</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame22 />
      <Frame23 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 1">
            <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="532" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <Frame18 />
        <Frame21 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[19.2px] text-white whitespace-nowrap">PS</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black">Priya Sharma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[14px]">priya@studio.in</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="relative shrink-0 text-[#9ca3af] text-[12px]">Country</p>
      <p className="relative shrink-0 text-[14px] text-black">🇮🇳 India</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="relative shrink-0 text-[#9ca3af] text-[12px]">Local Currency</p>
      <p className="relative shrink-0 text-[14px] text-black">INR</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#ffe3de] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="mr-[-14px] relative shrink-0 size-[14px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#ff715b] text-[13px] whitespace-nowrap">Contractor Matched</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] uppercase whitespace-nowrap">Matched Contractor</p>
      <Frame31 />
      <Frame34 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#1d568d] text-[14px]">
        <span className="leading-[normal]">{`Invoice submitted by contractor on `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">Jul 5, 2026</span>
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame30 />
        <Frame38 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <Frame29 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#1d568d] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">{`Continue `}</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function Frame13() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[32px] items-start pb-[64px] relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame16 />
      <Frame39 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Frame13 />
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