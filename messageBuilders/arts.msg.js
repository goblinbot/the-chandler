const { ART_MATCH_LINES } = require("../constants/aspects/arts");
const {
  findArtsContainingAspect,
  findMatchingArtsType,
} = require("../utils/arts.utils");
const { randomFromArray } = require("../utils/random.utils");

const createOptionalArtsField = (aspects) => {
  const _major = aspects[0].name;
  const _minor = aspects[1].name;

  const majorArts = findArtsContainingAspect(_major);

  if (majorArts) {
    const minorArts = findArtsContainingAspect(_minor);

    if (minorArts) {
      const _matchingArts = findMatchingArtsType(majorArts, minorArts);

      if (_matchingArts) {
        const _randomMatchLine = randomFromArray(ART_MATCH_LINES);
        const _keywords = _matchingArts.keywords
          .join(", ")
          .replace(/, ([^,]*)$/, " & $1");

        return {
          name: `Both your aspects are rooted in the ${_matchingArts.name}.`,
          value: `${_randomMatchLine} ${_keywords}.`,
        };
      }
    }
  }

  return null;
};

module.exports = {
  createOptionalArtsField,
};
