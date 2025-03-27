const { RANDOM_HOUR_INTROS } = require("../constants/hours/randomStrings");
const { romanizeNumber } = require("../utils/misc.utils");
const {
  findHoursMatchingAspects,
  numberToHourstamp,
} = require("../utils/hours.utils");
const { randomFromArray } = require("../utils/random.utils");

const createHoursReplyFields = (aspects) => {
  // Time to call a Lantern Adept about potential Hours
  const hour = findHoursMatchingAspects(aspects);

  if (hour) {
    const _nameStrings = [];
    const _valueStrings = [];

    // intro before name; grab a random from the list
    _nameStrings.push(randomFromArray(RANDOM_HOUR_INTROS));

    // Add name with/without altNames
    _nameStrings.push(
      hour.altName
        ? `${hour.name}, also known as ${hour.altName}.`
        : `${hour.name}.`
    );

    _valueStrings.push(
      hour.number !== null
        ? `One of the Hours, associated with the hour ${romanizeNumber(hour.number)}, or ${numberToHourstamp(hour.number)}.\n`
        : "One of the lost Hours."
    );

    _valueStrings.push(`Their main Aspect is ${hour.primaryAspect}.`);

    if (hour.precursorAspect) {
      _valueStrings.push(
        `Though before they were struck down, their principle was '${hour.precursorAspect}'.\n`
      );
    }

    if (hour.tarot) {
      _valueStrings.push(
        `This Hour takes the place of '${hour.tarot}' in Tarot.`
      );
    }

    if (hour.requireMultipleAspects) {
      _valueStrings.push(
        `For better or for worse, this Hour is an uncommon result.`
      );
    }

    // Maybe only show hour.description in a "pull Hour Card" tarot?
    // if (hour.description) {
    //   _valueStrings.push(`\n\n${hour.description}`);
    // }

    return {
      name: _nameStrings.join(" "),
      value: _valueStrings.join(" "),
    };
  } else {
    return {
      name: "Your aspects did not draw the attention of a specific hour.",
      value: "Maybe that's for the best. If you're an Obliviate, well done!",
    };
  }
};

module.exports = {
  createHoursReplyFields,
};
