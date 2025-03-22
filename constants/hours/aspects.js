import { HOUR_NAMES } from "./names";
import { ASPECT_NAMES } from "../aspects/core";

/*
[HOUR_NAMES.<key>]: {
    primary: [aspect],
    secondary: [aspect, aspect]  -- min 0, max 2,
    requireBoth?: boolean
}
*/

const HOUR_ASPECTS = {
  [HOUR_NAMES.MOTH]: { primary: [ASPECT_NAMES.MOTH], secondary: [] },
  [HOUR_NAMES.WATCHMAN]: { primary: [ASPECT_NAMES.LANTERN], secondary: [] },
  [HOUR_NAMES.VELVET]: {
    primary: [ASPECT_NAMES.HEART],
    secondary: [ASPECT_NAMES.MOTH, ASPECT_NAMES.MOON],
  },
  [HOUR_NAMES.MALACHITE]: {
    primary: [ASPECT_NAMES.NECTAR],
    secondary: [ASPECT_NAMES.MOTH, ASPECT_NAMES.HEART],
  },
  [HOUR_NAMES.THUNDERSKIN]: {
    primary: [ASPECT_NAMES.HEART],
    secondary: [ASPECT_NAMES.SKY],
  },
  [HOUR_NAMES.MOTHER_OF_ANTS]: {
    primary: [ASPECT_NAMES.KNOCK],
    secondary: [ASPECT_NAMES.ROSE],
  },
  [HOUR_NAMES.WITCH_AND_SISTER]: {
    primary: [ASPECT_NAMES.GRAIL],
    secondary: [ASPECT_NAMES.MOON, ASPECT_NAMES.HEART],
  },
  [HOUR_NAMES.COLONEL]: {
    primary: [ASPECT_NAMES.EDGE],
    secondary: [ASPECT_NAMES.WINTER, ASPECT_NAMES.LANTERN],
  },
  [HOUR_NAMES.LIONSMITH]: {
    primary: [ASPECT_NAMES.EDGE],
    secondary: [ASPECT_NAMES.FORGE, ASPECT_NAMES.HEART],
  },
  [HOUR_NAMES.ELEGIAST]: {
    primary: [ASPECT_NAMES.WINTER],
    secondary: [ASPECT_NAMES.SCALE, ASPECT_NAMES.SKY],
  },
  [HOUR_NAMES.BEACHCOMBER]: {
    primary: [ASPECT_NAMES.SKY],
    secondary: [ASPECT_NAMES.GRAIL, ASPECT_NAMES.KNOCK],
  },
  [HOUR_NAMES.MENISCATE]: {
    primary: [ASPECT_NAMES.MOON],
    secondary: [ASPECT_NAMES.KNOCK, ASPECT_NAMES.LANTERN],
  },
  [HOUR_NAMES.SUN_IN_RAGS]: {
    primary: [ASPECT_NAMES.LANTERN],
    secondary: [ASPECT_NAMES.WINTER],
  },
  [HOUR_NAMES.HORNED_AXE]: {
    primary: [ASPECT_NAMES.KNOCK],
    secondary: [ASPECT_NAMES.SCALE, ASPECT_NAMES.WINTER],
  },
  [HOUR_NAMES.MADRUGAD]: {
    primary: [ASPECT_NAMES.WINTER],
    secondary: [ASPECT_NAMES.FORGE],
  },
  [HOUR_NAMES.RED_GRAIL]: { primary: [ASPECT_NAMES.GRAIL], secondary: [] },
  [HOUR_NAMES.WOLF_DIVIDED]: {
    primary: [ASPECT_NAMES.EDGE],
    secondary: [ASPECT_NAMES.WINTER, ASPECT_NAMES.SCALE],
  },
  [HOUR_NAMES.VAGABOND]: {
    primary: [ASPECT_NAMES.ROSE],
    secondary: [ASPECT_NAMES.MOTH, ASPECT_NAMES.SECRET_HISTORIES],
  },
  [HOUR_NAMES.SISTER_AND_WITCH]: {
    primary: [ASPECT_NAMES.HEART],
    secondary: [ASPECT_NAMES.MOON, ASPECT_NAMES.GRAIL],
  },
  [HOUR_NAMES.FLOWERMAKER]: {
    primary: [ASPECT_NAMES.GRAIL],
    secondary: [ASPECT_NAMES.LANTERN],
  },
  [HOUR_NAMES.FORGE_OF_DAYS]: { primary: [ASPECT_NAMES.FORGE], secondary: [] },
  [HOUR_NAMES.GIRIBRAGO]: {
    primary: [ASPECT_NAMES.KNOCK],
    secondary: [ASPECT_NAMES.MOTH, ASPECT_NAMES.SKY],
  },
  [HOUR_NAMES.CROWNED_GROWTH]: {
    primary: [ASPECT_NAMES.WINTER],
    secondary: [ASPECT_NAMES.GRAIL],
    requireBoth: true,
  },
  [HOUR_NAMES.MARE]: {
    primary: [ASPECT_NAMES.KNOCK],
    secondary: [ASPECT_NAMES.MOTH, ASPECT_NAMES.NECTAR],
    requireBoth: true,
  },

  [HOUR_NAMES.SEVEN_COILS]: {
    primary: [ASPECT_NAMES.EDGE],
    secondary: [ASPECT_NAMES.KNOCK, ASPECT_NAMES.ROSE],
    requireBoth: true,
  },
  [HOUR_NAMES.WHEEL]: {
    primary: [ASPECT_NAMES.MOON],
    secondary: [ASPECT_NAMES.NECTAR, ASPECT_NAMES.HEART],
    requireBoth: true,
  },
  [HOUR_NAMES.FLINT]: {
    primary: [ASPECT_NAMES.SCALE],
    secondary: [ASPECT_NAMES.FORGE],
    requireBoth: true,
  },
  [HOUR_NAMES.EGG]: {
    primary: [ASPECT_NAMES.SCALE],
    secondary: [ASPECT_NAMES.LANTERN],
    requireBoth: true,
  },
};

// eslint-disable-next-line no-unused-vars
const _unfilledHours = {
  [HOUR_NAMES.RISING_SPIDER]: { primary: [], secondary: [] },
  [HOUR_NAMES.APPLEBRIGHT]: { primary: [], secondary: [] },
  [HOUR_NAMES.WITNESS]: { primary: [], secondary: [] },
  [HOUR_NAMES.CHANDLER]: { primary: [], secondary: [] },
  [HOUR_NAMES.SNOW]: { primary: [], secondary: [] },
  [HOUR_NAMES.BLACKBONE]: {
    primary: [],
    secondary: [],
  },
  [HOUR_NAMES.TIDE]: { primary: [], secondary: [] },
  [HOUR_NAMES.SUN_IN_SPLENDOUR]: {
    primary: [],
    secondary: [],
  },
};

module.exports = {
  HOUR_ASPECTS,
};
