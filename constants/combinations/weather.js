const { ASPECT_NAMES } = require("../aspects/core");


const WEATHER = {
  STORM: {
    name: "Storm",
    description: "There are storms great enough to shake the moon from the sky, and one's thoughts from one's skull.",
    aspects: {
      primary: [ASPECT_NAMES.SKY],
      secondary: [ASPECT_NAMES.HEART]
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
