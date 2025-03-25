const { NUMA } = require("../constants/combinations/numa");

const _numaAspectRequirement = 3;

const checkIfNuma = (aspectsArray) => {
  if (aspectsArray && aspectsArray.length >= _numaAspectRequirement) {
    const _aspectNames = aspectsArray.map((a) => a.name);
    const _matchingAspects = _aspectNames.filter((a) =>
      NUMA.aspects.includes(a)
    );
    return _matchingAspects.length >= _numaAspectRequirement;
  }

  return false;
};

module.exports = {
  checkIfNuma,
};
