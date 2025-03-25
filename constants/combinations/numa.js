const { ASPECT_NAMES } = require("../aspects/core");
const { ASPECT_COMBINATION_TYPES } = require("./_types");

const NUMA = {
  name: "Numa",
  description:
    "The touch of the mists; You are at the threshold of Numa, the labyrinth season - the season that lasts only a single day.\nNuma, shortest season, when the year loses it's way, when Time is a river and Memory a winged bird.\nIn Numa, oddities ripen in the gardens - unexpected visitors arrive - memory departs. Numa.",
  type: ASPECT_COMBINATION_TYPES.NUMA,
  aspects: [
    ASPECT_NAMES.MOON,
    ASPECT_NAMES.WINTER,
    ASPECT_NAMES.KNOCK,
    ASPECT_NAMES.ROSE,
  ],
};

module.exports = {
  NUMA,
};
