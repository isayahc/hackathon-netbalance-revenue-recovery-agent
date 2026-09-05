import assert from "node:assert/strict";
import test from "node:test";

import { buildPrismTracePayload, PRISM_AGENT_ID } from "../lib/prism/index";

test("builds a PRISM trace with stable run identity and business metadata", () => {
  const payload = buildPrismTracePayload(
    {
      sessionId: "NB-10482-test-run",
      stage: "completion_evaluation",
      output: "Technical success; business goal not achieved.",
      latencyMs: 17,
      metadata: { business_goal_achieved: false, recovered_amount: 0 },
    },
    "project-id",
  );

  assert.equal(payload.project_id, "project-id");
  assert.equal(payload.session_id, "NB-10482-test-run");
  assert.equal(payload.trace_id, "NB-10482-test-run:completion_evaluation");
  assert.equal(payload.agent_id, PRISM_AGENT_ID);
  assert.equal(payload.latency_ms, 17);
  assert.equal(payload.metadata.case_id, "NB-10482");
  assert.equal(payload.metadata.goal_amount, 42800);
  assert.equal(payload.metadata.business_goal_achieved, false);
  assert.equal(payload.metadata.recovered_amount, 0);
});
