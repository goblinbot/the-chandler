const { ASPECT_NAMES } = require("../constants/aspects/core");
const { ASPECTS } = require("../constants/aspects/_combined");
const { CHANCE_OF_STAINS } = require("../constants/aspects/rng.weights");
const { weightedRandom } = require("./random.utils");

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

const getAspectNameArray = () => ASPECTS.map((aspect) => aspect.name);
const getAspectWeightArray = () => ASPECTS.map((aspect) => aspect.weight);

// get a Balanced version of aspects/powers - with exception for Histories
const getDimmedAspectWeightArray = () =>
  ASPECTS.map((aspect) => {
    return aspect.name === ASPECT_NAMES.SECRET_HISTORIES ? 1 : 2;
  });

// Slashcommand: Do the weighted, random Vibe check for Aspects.
const getRandomizedAspectsForUser = (amount = 3) => {
  const aspects = [];
  const dupePreventionArray = [];
  let count = 0;

  while (count < amount) {
    let _name;

    // Final iteration; use a reduced "weights" to encourage receiving secondary powers as Stains.
    if (count === amount - 1) {
      // CoinFlip! do we add stains or not?
      if (Math.random() < CHANCE_OF_STAINS) {
        _name = weightedRandom(
          getAspectNameArray(),
          getDimmedAspectWeightArray()
        );
      }
      count++;
    } else {
      // All other instances; get weighted randoms
      _name = weightedRandom(getAspectNameArray(), getAspectWeightArray());
    }

    // check a secondary array of names (strings, plain) to prevent dupes instead of doing hocus pocus with object.Find/Filters
    if (_name && !dupePreventionArray.includes(_name)) {
      dupePreventionArray.push(_name);
      aspects.push(getAspectByName(_name));
      count++;
    }
  }

  return aspects;
};

module.exports = {
  getRandomAspect,
  getAspectIcon,
  getAspectNameArray,
  getAspectWeightArray,
  getDimmedAspectWeightArray,
  getAspectByName,
  getRandomizedAspectsForUser,
};
