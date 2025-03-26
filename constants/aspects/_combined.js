const { RAW_ASPECTS } = require("./core");
const { ASPECT_CONCEPTS } = require("./concepts");
const { ASPECT_WEIGHTS } = require("./rng.weights");
const { ASPECT_DESCRIPTIONS } = require("./descriptions");

const ASPECTS = RAW_ASPECTS.map((aspect) => {
  aspect.concept = ASPECT_CONCEPTS[aspect.name];
  aspect.weight = ASPECT_WEIGHTS[aspect.name];
  aspect.descriptionShort = ASPECT_DESCRIPTIONS[aspect.name].short;
  aspect.descriptionExpanded = `${ASPECT_DESCRIPTIONS[aspect.name].short} ${ASPECT_DESCRIPTIONS[aspect.name].expanded}`;
  return aspect;
});

module.exports = {
  ASPECTS,
};
