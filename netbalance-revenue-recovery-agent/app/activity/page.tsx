import { demoConfig } from "@/config/demo";
import { RecoveryRunner } from "../recovery-runner";

export default async function ActivityPage() {
  return (
    <div className="screen activity-screen">
      <header className="screen-header">
        <div><p className="breadcrumb">Cases / ATLAS-42800</p><h1>Agent activity</h1><p className="screen-description">Follow each evidence gate from outage verification to recovery decision.</p></div>
      </header>
      <RecoveryRunner completionCondition={demoConfig.completionCondition} targetRecoveryAmount={demoConfig.targetRecoveryAmount} />
    </div>
  );
}
