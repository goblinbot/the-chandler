const { ASPECT_NAMES } = require("../aspects/core");

// WIP: Combinations by aspects. Primary aspects and Secondary aspects, or in other words,
// "Required, and also required but.."
const SEASON_NUMA = {
  primary: [ASPECT_NAMES.MOON],
  secondary: [ASPECT_NAMES.WINTER, ASPECT_NAMES.KNOCK, ASPECT_NAMES.ROSE],
};

module.exports = {
  SEASON_NUMA,
};
