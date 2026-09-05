"use client";

import {
  PresentationChartIcon,
  FileTextIcon,
  FolderSimpleIcon,
  GearSixIcon,
  PulseIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/demo", label: "Demo story", icon: PresentationChartIcon },
  { href: "/", label: "Cases", icon: FolderSimpleIcon },
  { href: "/activity", label: "Activity", icon: PulseIcon },
  { href: "/documents", label: "Documents", icon: FileTextIcon },
  { href: "/settings", label: "Settings", icon: GearSixIcon },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-frame">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Netbalance home">
          <span className="brand-mark"><SquaresFourIcon size={18} weight="fill" /></span>
          <span>Netbalance</span>
        </Link>
        <div className="environment"><span /> Hackathon demo</div>
      </header>
      <aside className="sidebar" aria-label="Primary navigation">
        <nav>
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
                <Icon size={18} weight={active ? "fill" : "regular"} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <p className="synthetic-note">Synthetic data<br />Demo environment</p>
      </aside>
      <main className="workspace">{children}</main>
    </div>
  );
}
