const core = require('@actions/core');

try {
  if (core.getState("end_time") < Date.now()) {
    core.setFailed(`THIS JOB TOOK MORE THAN ${core.getInput('duration')}s !`);
  }
} catch (error) {
  core.setFailed(error.message);
}
