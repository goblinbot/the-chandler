const { ASPECTS } = require("../constants/aspects.constants");

const getRandomAspect = () => {
  return ASPECTS[Math.floor(Math.random() * ASPECTS.length)];
};

const getAspectByName = (aspectName) => {
  return ASPECTS.find((asp) => asp.name === aspectName);
};

const getAspectIcon = (aspect) => {
  if (!aspect || !aspect.icon) {
    return `${appRoot}/image/fallback.png`;
  } else {
    return `${appRoot}/image/powers/${aspect.icon}`;
  }
};

const getAspectNameArray = () => {
  return ASPECTS.map((aspect) => aspect.name);
};
const getAspectWeightArray = () => {
  return ASPECTS.map((aspect) => aspect.weight);
};

module.exports = {
  getRandomAspect,
  getAspectIcon,
  getAspectNameArray,
  getAspectWeightArray,
  getAspectByName,
};
