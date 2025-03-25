const { ASPECT_COMBINATION_TYPES } = require("../combinations/_types");
const { HOUR_NAMES, HOUR_ALT_NAMES } = require("./names");
const { HOUR_NUMBERS } = require("./numbers");
const { HOUR_TAROT } = require("./tarot");
const {
  HOUR_ASPECTS,
  HOUR_PRIMARY_ASPECTS,
  HOURS_REQUIRING_AT_LEAST_TWO,
} = require("./aspects");

const THE_HOURS = [];

for (const [key, name] of Object.entries(HOUR_NAMES)) {
  // Only use Hours with defined Aspects
  if (HOUR_ASPECTS[name]) {
    const _hour = {
      key,
      name: `The ${name}`,
      type: ASPECT_COMBINATION_TYPES.HOUR,
      number: HOUR_NUMBERS[name],
      primaryAspect: HOUR_PRIMARY_ASPECTS[name],
      aspects: HOUR_ASPECTS[name],
    };

    if (HOUR_ALT_NAMES[name]) {
      _hour.altName = `The ${HOUR_ALT_NAMES[name]}`;
    }

    if (HOUR_TAROT[name]) {
      _hour.tarot = HOUR_TAROT[name];
    }

    if (HOURS_REQUIRING_AT_LEAST_TWO.includes(name)) {
      _hour.requireMultipleAspects = true;
    }

    THE_HOURS.push(_hour);
  }
}

module.exports = {
  THE_HOURS,
};
