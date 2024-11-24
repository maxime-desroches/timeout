const core = require('@actions/core');

try {
  core.saveState("end_time", Date.now() + (core.getInput('duration') * 1000));
} catch (error) {
  core.setFailed(error.message);
}
