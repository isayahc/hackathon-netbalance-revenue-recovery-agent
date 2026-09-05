import { CheckCircleIcon, CloudCheckIcon, CodeIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";

import { demoConfig } from "@/config/demo";

export default function SettingsPage() {
  const prismConfigured = Boolean(process.env.PRISMTRACE_HOST && process.env.PRISMTRACE_PROJECT_ID && process.env.PRISMTRACE_API_KEY);
  return (
    <div className="screen settings-screen">
      <header className="screen-header"><div><p className="breadcrumb">Demo controls</p><h1>Settings</h1><p className="screen-description">Read-only readiness details for the hackathon environment.</p></div></header>
      <div className="settings-grid">
        <section className="panel setting-card"><span className="setting-icon"><CodeIcon size={22} /></span><div><p className="overline">Completion condition</p><h2>{demoConfig.completionCondition === "claim_submitted" ? "Claim submitted" : "Recovery verified"}</h2><p>Controlled by one safe value in <code>config/demo.ts</code>.</p></div><span className="setting-state amber">Baseline</span></section>
        <section className="panel setting-card"><span className="setting-icon"><EyeIcon size={22} /></span><div><p className="overline">PRISM tracing</p><h2>{prismConfigured ? "Connected" : "Not configured"}</h2><p>One session ID groups the full recovery workflow.</p></div><span className={`setting-state ${prismConfigured ? "green" : "neutral"}`}>{prismConfigured ? "Ready" : "Pending"}</span></section>
        <section className="panel setting-card"><span className="setting-icon"><CloudCheckIcon size={22} /></span><div><p className="overline">Vercel deployment</p><h2>Deployment ready</h2><p>Next.js UI and serverless API routes use one project.</p></div><span className="setting-state green">Ready</span></section>
        <section className="panel setting-card"><span className="setting-icon"><CheckCircleIcon size={22} /></span><div><p className="overline">Synthetic safeguards</p><h2>Demo data only</h2><p>No production customer records or retailer systems are connected.</p></div><span className="setting-state green">Safe</span></section>
      </div>
    </div>
  );
}
