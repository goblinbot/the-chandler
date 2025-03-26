const { ARTS } = require("../constants/aspects/arts");

const findArtsContainingAspect = (aspectName) => {
  return ARTS.filter((_art) => _art.aspects.includes(aspectName));
};

const findMatchingArtsType = (firstArr, secondArr) => {
  return firstArr.find((a) => secondArr.includes(a));
};

module.exports = {
  findArtsContainingAspect,
  findMatchingArtsType,
};
