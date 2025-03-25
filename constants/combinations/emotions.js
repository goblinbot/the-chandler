const { ASPECT_NAMES } = require("../aspects/core");
const { ASPECT_COMBINATION_TYPES } = require("./_types");

// WIP
const RAW_EMOTIONS = {
  RESTLESSNESS: {
    name: "Restlessness",
    description:
      "A restless longing has you. You feel that you want to do... something. What exactly?",
    aspects: [
      ASPECT_NAMES.LANTERN,
      ASPECT_NAMES.FORGE,
      ASPECT_NAMES.HEART,
      ASPECT_NAMES.MOTH,
      ASPECT_NAMES.GRAIL,
    ],
  },
  CONTENTMENT: {
    name: "Contentment",
    description:
      "Some peace after trouble. You're happy, we think. Going for a calm swim, engaging with a loyal beast or even enjoying some nice Blackberry Jam can help you extend this moment of Solace.",
    aspects: [ASPECT_NAMES.HEART, ASPECT_NAMES.SKY, ASPECT_NAMES.LANTERN],
  },
  //   DREAD: {
  //     name: "Bleak Thoughts",
  //     description: "Dark days. You must be careful not to let the doubts creep in."
  //   },
};

const EMOTIONS_ARRAY = [];

for (const [key, properties] of Object.entries(RAW_EMOTIONS)) {
  EMOTIONS_ARRAY.push({
    key,
    ...properties,
    type: ASPECT_COMBINATION_TYPES.EMOTION,
  });
}

module.exports = {
  RAW_EMOTIONS,
  EMOTIONS_ARRAY,
};
