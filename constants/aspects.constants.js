const ASPECT_NAMES = {
  EDGE: "Edge",
  FORGE: "Forge",
  GRAIL: "Grail",
  HEART: "Heart",
  SECRET_HISTORIES: "Secret Histories",
  KNOCK: "Knock",
  LANTERN: "Lantern",
  MOTH: "Moth",
  MOON: "Moon",
  NECTAR: "Nectar",
  ROSE: "Rose",
  SCALE: "Scale",
  SKY: "Sky",
  WINTER: "Winter",
};

const ASPECT_TYPES = {
  PRINCIPLE: "Principle",
  POWER: "Power",
  PRECURSOR: "Precursor",
};

const ASPECT_CONCEPTS = {
  APOLLONIAN: "Apollonian",
  DYONISIAN: "Dyonisian",
  UNCERTAIN: "Uncertain",
  TRANSCENDANT: "Transcendant",
};

// moth > lantern > forge > edge > winter > heart > grail > ...

const ASPECTS = [
  {
    name: ASPECT_NAMES.EDGE,
    icon: `aspect${ASPECT_NAMES.EDGE}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
    subvertedBy: ASPECT_NAMES.WINTER,
  },
  {
    name: ASPECT_NAMES.FORGE,
    icon: `aspect${ASPECT_NAMES.FORGE}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
    subvertedBy: ASPECT_NAMES.EDGE,
  },
  {
    name: ASPECT_NAMES.GRAIL,
    icon: `aspect${ASPECT_NAMES.GRAIL}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.DYONISIAN,
    subvertedBy: ASPECT_NAMES.MOTH,
  },
  {
    name: ASPECT_NAMES.HEART,
    icon: `aspect${ASPECT_NAMES.HEART}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.DYONISIAN,
    subvertedBy: ASPECT_NAMES.GRAIL,
  },
  {
    name: ASPECT_NAMES.SECRET_HISTORIES,
    icon: `aspectHistories.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 1,
    concept: ASPECT_CONCEPTS.UNCERTAIN,
  },
  {
    name: ASPECT_NAMES.KNOCK,
    icon: `aspect${ASPECT_NAMES.KNOCK}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.TRANSCENDANT,
  },
  {
    name: ASPECT_NAMES.LANTERN,
    icon: `aspect${ASPECT_NAMES.LANTERN}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
    subvertedBy: ASPECT_NAMES.FORGE,
  },
  {
    name: ASPECT_NAMES.MOON,
    icon: `aspect${ASPECT_NAMES.MOON}.png`,
    type: ASPECT_TYPES.POWER,
    weight: 2,
    concept: ASPECT_CONCEPTS.UNCERTAIN,
  },
  {
    name: ASPECT_NAMES.MOTH,
    icon: `aspect${ASPECT_NAMES.MOTH}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.DYONISIAN,
    subvertedBy: ASPECT_NAMES.LANTERN,
  },
  {
    name: ASPECT_NAMES.NECTAR,
    icon: `aspect${ASPECT_NAMES.NECTAR}.png`,
    type: ASPECT_TYPES.POWER,
    weight: 2,
    concept: ASPECT_CONCEPTS.DYONISIAN,
  },
  {
    name: ASPECT_NAMES.ROSE,
    icon: `aspect${ASPECT_NAMES.ROSE}.png`,
    type: ASPECT_TYPES.POWER,
    weight: 2,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
  },
  {
    name: ASPECT_NAMES.SCALE,
    icon: `aspect${ASPECT_NAMES.SCALE}.png`,
    type: ASPECT_TYPES.POWER,
    weight: 2,
    concept: ASPECT_CONCEPTS.DYONISIAN,
  },
  {
    name: ASPECT_NAMES.SKY,
    icon: `aspect${ASPECT_NAMES.SKY}.png`,
    type: ASPECT_TYPES.POWER,
    weight: 2,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
  },
  {
    name: ASPECT_NAMES.WINTER,
    icon: `aspect${ASPECT_NAMES.WINTER}.png`,
    type: ASPECT_TYPES.PRINCIPLE,
    weight: 3,
    concept: ASPECT_CONCEPTS.APOLLONIAN,
    subvertedBy: ASPECT_NAMES.HEART,
  },
];

module.exports = {
  ASPECT_NAMES,
  ASPECT_TYPES,
  ASPECT_CONCEPTS,
  ASPECTS,
};
