const { RAW_EMOTIONS } = require("../constants/combinations/emotions");
const { NUMA_ACTIONS } = require("../constants/combinations/numa");
const { randomFromArray } = require("../utils/random.utils");

const createNumaIntro = () => {
  return {
    name: "You are at the threshold of Numa.",
    value:
      "Numa, shortest season, labyrinth season, when the year loses its way, when Time is a river and Memory a winged bird. In Numa, oddities ripen in the gardens of the Isle - unexpected visitors arrive - memory departs. One in Nine seasons might be Numa, but Numa is the vagabond, Numa has no heralds. Numa might arrive twice in one year - or four yers might pass without the touch of its mists.",
  };
};

const createNumaAction = () => {
  const _action = randomFromArray(NUMA_ACTIONS);

  return {
    name: "What happened?",
    value: _action,
  };
};

const createNumaEmotionField = () => {
  const _emotion = RAW_EMOTIONS.NUMA;
  const _prefix = _emotion.prefix || "are experiencing: ";
  const value = Array.isArray(_emotion.value)
    ? randomFromArray(_emotion.value)
    : _emotion.value;

  return {
    name: `You ${_prefix}${_emotion.name}`,
    value,
  };
};

module.exports = {
  createNumaIntro,
  createNumaAction,
  createNumaEmotionField,
};
