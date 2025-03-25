const { THE_HOURS } = require("../constants/hours/_combined");
const { RANDOM_HOUR_INTROS } = require("../constants/hours/randomStrings");
const { romanizeNumber } = require("./misc.utils");

const findHoursMatchingAspects = (aspectsArray) => {
  const _major = aspectsArray[0];
  const _minor = aspectsArray[1];
  const _aspectNames = aspectsArray.map((a) => a.name);

  const _hours = [...THE_HOURS];
  let _matches = _hours.filter((hour) => hour.primaryAspect === _major.name);

  const _aspectMatches = [];
  let _result = null;

  if (_matches) {
    // singular results only can be boring; attempt to find secondary matches!
    if (_matches.length === 1) {
      const _optionalMatches = _hours.filter(
        (hour) =>
          hour.primaryAspect === _minor.name &&
          hour.aspects.includes(_major.name)
      );

      if (_optionalMatches) {
        _matches = [..._matches, ..._optionalMatches];
      }
    }

    _matches.forEach((_hour) => {
      // Ignore if a Result has been found already; in case of "requireMultiple" matches.
      if (!_result) {
        const _sharedAspects = _aspectNames.filter((a) =>
          _hour.aspects.includes(a)
        );

        if (_hour.requireMultipleAspects) {
          if (_sharedAspects.length > 1) {
            _result = _hour;
          }
        } else {
          _aspectMatches.push({
            name: [_hour.name],
            hour: _hour,
            count: _sharedAspects.length,
          });
        }
      }
    });

    if (!_result) {
      if (_aspectMatches && _aspectMatches.length > 0) {
        if (_aspectMatches.length === 1) {
          _result = _aspectMatches[0].hour;
        } else {
          const _highestCount = Math.max(..._aspectMatches.map((o) => o.count));
          const _reducedMatches = _aspectMatches.filter(
            (m) => m.count === _highestCount
          );

          // If highest result is singular; return as result, otherwise, random from remaining
          if (_reducedMatches.length === 1) {
            _result = _reducedMatches[0].hour;
          } else {
            _result =
              _reducedMatches[
                Math.floor(Math.random() * _reducedMatches.length)
              ].hour;
          }
        }
      }
    }

    return _result;
  }
};

const numberToHourstamp = (num) => (num <= 9 ? `0${num}:00` : `${num}:00`);

const createHoursResultReplyField = (aspects) => {
  const hour = findHoursMatchingAspects(aspects);

  if (hour) {
    const _nameStrings = [];
    const _valueStrings = [];

    // intro before name; grab a random from the list
    _nameStrings.push(
      RANDOM_HOUR_INTROS[Math.floor(Math.random() * RANDOM_HOUR_INTROS.length)]
    );

    // Add name with/without altNames
    _nameStrings.push(
      hour.altName
        ? `${hour.name}, also known as The ${hour.altName}`
        : hour.name
    );

    _valueStrings.push(
      hour.number !== null
        ? `One of the Hours, associated with the hour ${romanizeNumber(hour.number)}, or ${numberToHourstamp(hour.number)}.`
        : "One of the lost Hours."
    );

    _valueStrings.push(`Their main Aspect is ${hour.primaryAspect}.`);

    if (hour.tarot) {
      _valueStrings.push(
        `This hour can be associated with the specific Tarot card: ${hour.tarot}.`
      );
    }

    // Hour.Description

    if (hour.requireMultipleAspects) {
      _valueStrings.push(
        `\nFor better or for worse, this Hour is an uncommon result.`
      );
    }

    return {
      name: _nameStrings.join(" "),
      value: _valueStrings.join(" "),
    };
  } else {
    return;
  }
};

module.exports = {
  numberToHourstamp,
  romanizeNumber,
  findHoursMatchingAspects,
  createHoursResultReplyField,
};
