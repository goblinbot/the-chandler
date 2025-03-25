// Import ASPECTS to bind to arts;

const { ASPECT_NAMES } = require("./core");

// bright edgeForgeLanternKnock
// Night GrailMothKnockWinter
// Unregarded Grail,Heart,Moth,History

const ART_MATCH_LINES = [
  "Be wary of intricate woven dreams, whose silken strands are ",
  "Steps upon your stairs of wisdom may include ",
  "Willing or Unwilling - Within or Without - these are the arts of ",
  "Some words are spelt correctly only when the proper ink is used:\n",
  // "Memories from the labyrinthine mists have power. This is what you'll recall:\n",
  "These are the sights you'll see:\n",
  "Gervinus van Lauren was notoriously fond of these as well:\n",
  "Adepts avoid these answers when asked 'What May Be Lost?'\n",
  "Wheter afflicted by, or mastering them on purpose - arts have power in:\n",
  // "when the year loses its way, when Time is a river and Memory a winged bird, keep the following close to heart:\n",
  // "Moldywarp keeps her crowns in the moss and her feet in the dirt and the trees locked jaw-tight. Moldywarp has these warnings for you:\n",
];

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
  ART_MATCH_LINES,
  ARTS,
};
