const { ASPECT_NAMES } = require("../aspects/core");


const WEATHER = {
  SUNNY: {
    name: "Sunny",
    description: "The Sun is not what it was, but today he is smiling.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.LANTERN],
      requireBoth: true,
    }
  },
  RAIN: {
    name: "Rain",
    description: "Soft rain brings life.",
    aspects: {
      primary: [ASPECT_NAMES.NECTAR],
      secondary: [ASPECT_NAMES.GRAIL],
      requireBoth: true,
    }
  },
  STORM: {
    name: "Storm",
    description: "There are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.HEART],
      requireBoth: true,
    }
  },
  NUMA: {
    name: "Numa Bruma",
    description: "...",
    aspects: {
      primary: [ASPECT_NAMES.MOON],
      secondary: [ASPECT_NAMES.WINTER, ASPECT_NAMES.KNOCK, ASPECT_NAMES.ROSE],
    }
  }
}




module.exports = {
  WEATHER,
};
