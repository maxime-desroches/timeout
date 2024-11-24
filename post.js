const core = require('@actions/core');

try {
  if (core.getState("end_time") < Date.now()) {
    core.setFailed(`THIS JOB TOOK MORE THAN ${core.getInput('timeout')}s !`);
  }
} catch (error) {
  core.setFailed(error.message);
}
