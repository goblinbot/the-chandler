const { ASPECT_NAMES } = require("../aspects/core");
const { ASPECT_COMBINATION_TYPES } = require("./_types");

const RAW_WEATHER = {
  SUNNY: {
    name: "Sunny",
    description: "The Sun is not what it was, but today he is smiling.",
    aspects: [ASPECT_NAMES.SKY, ASPECT_NAMES.LANTERN],
  },
  RAIN: {
    name: "Rain",
    description:
      "Soft rain brings life. The sky is a drum; the earth is ready for its ecstasy.",
    aspects: [ASPECT_NAMES.NECTAR, ASPECT_NAMES.GRAIL],
  },
  STORM: {
    name: "Storm",
    description:
      "Thunder-roaring, lightning lashed skies.\nThere are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
    aspects: [ASPECT_NAMES.SKY, ASPECT_NAMES.HEART],
  },
  HAIL: {
    name: "Hail",
    description:
      "The air crisps the skin. Ice raps on the roofs and tree-tops.",
    aspects: [ASPECT_NAMES.EDGE, ASPECT_NAMES.SKY],
  },
  CLOUDS: {
    name: "Cloudy",
    description:
      "In this country the sky is rarely clear. The sun goes courteously cloaked.",
    aspects: [ASPECT_NAMES.MOTH, ASPECT_NAMES.MOON],
  },
  GALE: {
    name: "Gale",
    description: "Trees bend, walls creak, travellers bend low against the blast.",
    aspects: [ASPECT_NAMES.HEART, ASPECT_NAMES.SKY],
  },
  FOG: {
    name: "Fog",
    description: "Coastal fog - moon-mared, sea-dulling.",
    aspects: [ASPECT_NAMES.KNOCK, ASPECT_NAMES.MOON],
  },
  SNOW: {
    name: "Snow",
    description: "The world is pale today. 'The White is west of the world, and winter does not wait forever', Solomon Husher once said.",
    aspects: [ASPECT_NAMES.WINTER, ASPECT_NAMES.SKY],
  },
};

// Create WEATHER object from the RAW obj + repeating defaults (type, required, etc)
const WEATHER = {};
const WEATHER_ARRAY = [];

for (const [key, properties] of Object.entries(RAW_WEATHER)) {
  WEATHER[key] = {
    ...properties,
    type: ASPECT_COMBINATION_TYPES.WEATHER,
    requireBoth: true,
  };

  WEATHER_ARRAY.push(properties);
}

module.exports = {
  WEATHER,
  WEATHER_ARRAY,
};
