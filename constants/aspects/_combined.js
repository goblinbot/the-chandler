const { RAW_ASPECTS } = require("./core");
const { ASPECT_CONCEPTS } = require("./concepts");
const { ASPECT_WEIGHTS } = require("./rng.weights");

const ASPECTS = RAW_ASPECTS.map((aspect) => {
  aspect.concept = ASPECT_CONCEPTS[aspect.name];
  aspect.weight = ASPECT_WEIGHTS[aspect.name];
  return aspect;
});

module.exports = {
  ASPECTS,
};
