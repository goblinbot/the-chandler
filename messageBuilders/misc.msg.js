const { EMOTIONS_ARRAY } = require("../constants/combinations/emotions");

const createEmotionField = () => {
  const _randomEmotion =
    EMOTIONS_ARRAY[Math.floor(Math.random() * EMOTIONS_ARRAY.length)];

  const _prefix = _randomEmotion.prefix || "are experiencing: ";

  const value = Array.isArray(_randomEmotion.value)
    ? _randomEmotion.value[
        Math.floor(Math.random() * _randomEmotion.value.length)
      ]
    : _randomEmotion.value;

  return {
    name: `You ${_prefix}${_randomEmotion.name}`,
    value,
  };
};

module.exports = {
  createEmotionField,
};
