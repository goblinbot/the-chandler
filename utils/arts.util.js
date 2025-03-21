const { ARTS, ART_MATCH_LINES } = require("../constants/aspects/arts");

const findArtsContainingAspect = (aspectName) => {
  return ARTS.filter((_art) => _art.aspects.includes(aspectName));
};

const findMatchingArtsType = (firstArr, secondArr) => {
  return firstArr.find((a) => secondArr.includes(a));
};

const createReplyFieldIfArtsMatch = (majorAspectName, minorAspectName) => {
  const majorArts = findArtsContainingAspect(majorAspectName);

  if (majorArts) {
    const minorArts = findArtsContainingAspect(minorAspectName);

    if (minorArts) {
      const _matchingArts = findMatchingArtsType(majorArts, minorArts);

      if (_matchingArts) {
        const _randomMatchLine =
          ART_MATCH_LINES[Math.floor(Math.random() * ART_MATCH_LINES.length)];

        const _keywords = _matchingArts.keywords
          .join(", ")
          .replace(/, ([^,]*)$/, " & $1");

        return {
          name: `Both your aspects are rooted in the ${_matchingArts.name}`,
          value: `${_randomMatchLine}${_keywords}.`,
        };
      }
    }
  }

  return null;
};

module.exports = {
  findArtsContainingAspect,
  findMatchingArtsType,
  createReplyFieldIfArtsMatch,
};
