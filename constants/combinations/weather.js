const { ASPECT_NAMES } = require("../aspects/core");
const { ASPECT_COMBINATION_TYPES } = require("./_types");

const RAW_WEATHER = {
  SUNNY: {
    name: "Sunny",
    description: "The Sun is not what it was, but today he is smiling.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.LANTERN],
    },
  },
  RAIN: {
    name: "Rain",
    description:
      "Soft rain brings life. The sky is a drum; the earth is ready for its ecstasy.",
    aspects: {
      primary: [ASPECT_NAMES.NECTAR],
      secondary: [ASPECT_NAMES.GRAIL],
    },
  },
  STORM: {
    name: "Storm",
    description:
      "Thunder-roaring, lightning lashed skies.\nThere are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.HEART],
    },
  },
  HAIL: {
    name: "Hail",
    description:
      "The air crisps the skin. Ice raps on the roofs and tree-tops.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.EDGE],
    },
  },
  CLOUDS: {
    name: "Cloudy",
    description:
      "In this country the sky is rarely clear. The sun goes courteously cloaked.",
    aspects: {
      primary: [ASPECT_NAMES.MOTH],
      secondary: [ASPECT_NAMES.MOON],
    },
  },
};

// Create WEATHER object from the RAW obj + repeating defaults (type, required, etc)
const WEATHER = {};

for (const [key, properties] of Object.entries(RAW_WEATHER)) {
  WEATHER[key] = {
    ...properties,
    type: ASPECT_COMBINATION_TYPES.WEATHER,
    requireBoth: true,
  };
}

module.exports = {
  WEATHER,
};
