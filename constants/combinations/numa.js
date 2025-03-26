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

const NUMA_ACTIONS = [
  "You might try to host a party. Perhaps someone has tried to hold one in Numa at some point. Perhaps at several points. We'll never know, because no records of an attempt have survived. Numa.",
  "You could write in a book that no-one reads. Include a truth so powerful that they, tentatively, believe themselves. You might write a New History altogether. Numa.",
  "You have eaten. You have drunk. The meats were unfamiliar, the drinks unknown. A cloying taste lingers, your lips are stained with grey. An electric bulb flares like a marsh-light: Numa.",
  "It was a work day. Afterwards you don't remember what work you performed, except in scents and sensations - leaf-mould, a rhythmic musical clicking like melodious castanets, soft blue flame like antique gaslight. And cold; you remember that where we went, it was cold. Numa.",
];

module.exports = {
  NUMA,
  NUMA_ACTIONS,
};
