const { ASPECT_COMBINATION_TYPES } = require("../combinations/_types");
const { HOUR_NAMES, HOUR_ALT_NAMES } = require("./names");
const { HOUR_NUMBERS, HOUR_WEIGHTS } = require("./numbers");
const { HOUR_TAROT, TAROT_QUICK_READINGS, HOUR_TAROT_DESCRIPTIONS, HOUR_UNOFFICIAL_TAROT } = require("./tarot");
const {
  HOUR_ASPECTS,
  HOUR_PRIMARY_ASPECTS,
  HOURS_REQUIRING_AT_LEAST_TWO,
  HOUR_PRECURSOR_ASPECTS,
} = require("./aspects");
const { HOUR_DESCRIPTIONS, HOUR_SINGLETON_DOMAINS, HOUR_DOMAINS } = require("./descriptions");
const { HOUR_MATERIALS } = require("./materials");
const { HOUR_IMAGES } = require("./images");
const { HOUR_FOOTNOTES } = require("./footNotes");

const THE_HOURS = [];
const THE_HOURS_OBJECT_LIST = {};

for (const [key, name] of Object.entries(HOUR_NAMES)) {
  // Only use Hours with defined Aspects
  if (HOUR_ASPECTS[name]) {
    const _hour = {
      key,
      name: `The ${name}`,
      nameRaw: name,
      type: ASPECT_COMBINATION_TYPES.HOUR,
      number: HOUR_NUMBERS[name],
      primaryAspect: HOUR_PRIMARY_ASPECTS[name],
      aspects: HOUR_ASPECTS[name],
      image: HOUR_IMAGES[name],
      description: HOUR_DESCRIPTIONS[name],
      domains: HOUR_DOMAINS[name],
      weight: HOUR_WEIGHTS.DEFAULT,
    };

    if (HOUR_ALT_NAMES[name]) _hour.altName = `The ${HOUR_ALT_NAMES[name]}`;

    if (HOUR_PRECURSOR_ASPECTS[name]) _hour.precursorAspect = HOUR_PRECURSOR_ASPECTS[name];
    if (HOUR_DESCRIPTIONS[name]) _hour.description = HOUR_DESCRIPTIONS[name];
    if (HOUR_MATERIALS[name]) _hour.materials = HOUR_MATERIALS[name];
    if (HOUR_SINGLETON_DOMAINS[name]) _hour.singletonDescription = true;
    if (HOUR_FOOTNOTES[name]) _hour.footNote = HOUR_FOOTNOTES[name];

    if (HOUR_TAROT[name]) {
      _hour.tarot = HOUR_TAROT[name];
      _hour.tarotDescription = HOUR_TAROT_DESCRIPTIONS[name];
      _hour.tarotRead = TAROT_QUICK_READINGS[name];
      _hour.weight = HOUR_WEIGHTS.TAROT;
    };

    if (HOUR_UNOFFICIAL_TAROT[name]) {
      _hour.isUnofficialTarot = true;
      _hour.weight = HOUR_WEIGHTS.UNOFFICIAL_TAROT;
    }

    if (HOURS_REQUIRING_AT_LEAST_TWO.includes(name)) {
      _hour.requireMultipleAspects = true;
    }

    THE_HOURS.push(_hour);
    THE_HOURS_OBJECT_LIST[key] = _hour;
  }
}

module.exports = {
  THE_HOURS,
  THE_HOURS_OBJECT_LIST
};
