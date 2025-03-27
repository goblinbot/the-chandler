const { EMOTIONS_ARRAY } = require("../constants/combinations/emotions");
const { randomFromArray } = require("../utils/random.utils");

const createEmotionField = () => {
  const _randomEmotion = randomFromArray(EMOTIONS_ARRAY);

  const _prefix = _randomEmotion.prefix || "are experiencing: ";

  const value = Array.isArray(_randomEmotion.value)
    ? randomFromArray(_randomEmotion.value)
    : _randomEmotion.value;

  return {
    name: `You ${_prefix}${_randomEmotion.name}`,
    value,
  };
};

module.exports = {
  createEmotionField,
};
