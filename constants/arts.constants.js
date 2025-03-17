// Import ASPECTS to bind to arts;

const { ASPECT_NAMES } = require("./aspects.constants");

// bright edgeForgeLanternKnock
// Night GrailMothKnockWinter
// Unregarded Grail,Heart,Moth,History

const ARTS = [
  {
    id: "bright",
    name: "Bright Arts",
    keywords: [
      "Knowledge",
      "Violence",
      "Creation",
      "Radiation",
      "Super Natural Order",
    ],
    aspects: [
      ASPECT_NAMES.EDGE,
      ASPECT_NAMES.FORGE,
      ASPECT_NAMES.LANTERN,
      ASPECT_NAMES.KNOCK,
    ],
  },
  {
    id: "night",
    name: "Night Arts",
    keywords: [
      "Secrets",
      "Endings",
      "Absence",
      "Darkness",
      "Super Natural Horror",
    ],
    aspects: [
      ASPECT_NAMES.GRAIL,
      ASPECT_NAMES.MOON,
      ASPECT_NAMES.KNOCK,
      ASPECT_NAMES.WINTER,
    ],
  },
  {
    id: "unregarded",
    name: "Arts Unregarded",
    keywords: ["Life", "Persistence", "Music", "Nature", "Super Natural Chaos"],
    aspects: [
      ASPECT_NAMES.GRAIL,
      ASPECT_NAMES.HEART,
      ASPECT_NAMES.MOTH,
      ASPECT_NAMES.SECRET_HISTORIES,
    ],
  },
];

module.exports = {
  ARTS,
};
