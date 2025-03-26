// const { ASPECT_NAMES } = require("../aspects/core");
const { ASPECT_COMBINATION_TYPES } = require("./_types");

// WIP, also disabled Aspects to stick to Math.Random magic for now.
const RAW_EMOTIONS = {
  RESTLESSNESS: {
    name: "Restlessness",
    prefix: "are feeling: ",
    value:
      "A restless longing has you. You feel that you want to do... something. What exactly?",
    // aspects: [
    //   ASPECT_NAMES.LANTERN,
    //   ASPECT_NAMES.FORGE,
    //   ASPECT_NAMES.HEART,
    //   ASPECT_NAMES.MOTH,
    //   ASPECT_NAMES.GRAIL,
    // ],
  },
  CONTENTMENT: {
    name: "Contentment",
    prefix: "feel: ",
    value:
      "Some peace after trouble. You're happy, we think. Going for a calm swim, engaging with a loyal beast or even enjoying some nice Blackberry Jam can help you extend this moment of Solace.",
    // aspects: [ASPECT_NAMES.HEART, ASPECT_NAMES.SKY, ASPECT_NAMES.LANTERN],
  },
  DREAD: {
    name: "Bleak Thoughts",
    value:
      "Dark days. You must be careful not to let the doubts creep in. Maybe you've recently seen too much?",
  },
  DETECTIVE_WARNINGS: {
    name: "Fear of the Invisible Arts.",
    prefix: "face: ",
    value:
      "As the Bureau strongly recommends:\nReport dreams of moonlight. Report dreams of a night-bound forest. Draw back your curtains to be woken by the sun. Do not cut your hair before you sleep. Never sleep before a cracked mirror.",
  },
  GLIMMERING: {
    name: "Glimmering",
    value:
      "Your emotions run higher than usual. There are things you'll never understand, and those things will always be precious, but just now you're closer to them.",
  },
  PASSION_ART: {
    name: "Creative Sparks",
    value:
      "Maybe you should paint. You could paint those sights half-remembered from your dreams, or a fellow person! Something to remember them by, perhaps.",
  },
  AWARENESS_APPETITE: {
    name: "An Awareness of Appetite",
    prefix: "feel: ",
    value:
      "Every sense is heightened; every sensation, deepened. It's time to sate your appetite, lest it becomes difficult to control oneself.",
  },
  FATIGUE: {
    name: "Fatigue",
    value: "Rest. Take a while. Recover. This is just a temporary setback.",
  },
  CHOR: {
    name: "Chor",
    value:
      "Exuberance; Instinct; Rhythm! The heart beats proudly and loudly. Dance! Listen! Learn!",
  },
  BUZZING: {
    name: "A Buzzing in the Brain",
    value: "in gi rum imus noc te et con sumi - snip snip snip",
  },
  SHAPT: {
    name: "Shapt",
    value:
      "An increase in Eloquence and Understanding, the doors that open both ways.\nYour words can open new thresholds, should you wish.",
  },
  METTLE: {
    name: "Strong Mettle",
    value:
      "Will; self-discipline; that part of us which makes the right choice.\nYou could push through difficulties, or take this time to better understand who you are.",
  },
  FASCINATION: {
    name: "Fascination",
    value:
      "Light LEAKS through the CRACKS. My mind is BRIGHTER than it EVER was. THE HIGHER I RISE THE MORE I SEE-",
  },
  STREETS_MOONLIGHT: {
    name: "Uncanny Wanderlust",
    value:
      "Sometimes, the light of the moon is a key to other spaces. You've found a place where, for a night or two, the streets curve in unfamiliar ways. If you walk here, you might find insight, or be touched by madness.",
  },
  CURIOUSITY: {
    name: "Curiousity",
    value:
      "Today is extra curious. Go out - Examine; appreciate; catalogue. There's always more to know!",
  },
  SATISFACTION: {
    name: "Satisfaction",
    value:
      "Some appetites are easier to satisfy than others.	Reading, conversation, or even simple acts such as throwing a penny down a well would get you here.",
  },
  NYCTODROMY: {
    name: "Nyctodromy",
    value:
      "It's time to travel through the darkness and hidden places.\nTravelling at night is neither faster nor safer. That's why we do it.",
  },
  ITHASTRY: {
    name: "Ithastry",
    value:
      "The wisdom once associated with alchemists and metallurgists - It's time to alter something!",
  },
  HINDSIGHT: {
    name: "Hindsight",
    value: "Some things we can only really understand when they're gone.",
  },
  REVELATIONS: {
    name: "Revelation",
    value:
      "Eureka! Some truths come to us from inside, outside, or above. What will you do with your Revelation?",
  },
  TEMPTATION_SENSATION: {
    name: "Sensation",
    prefix: "are feeling Temptations: ",
    value: "..You could achieve experiences of an intensity few could imagine.",
  },
  TEMPTATION_POWER: {
    name: "Power",
    prefix: "are feeling Temptations: ",
    value: "..You could pursue power. You might already hold the key.",
  },
  TEMPTATION_CHANGE: {
    name: "Change",
    prefix: "are feeling Temptations: ",
    value:
      "Some nights there is the wing-lift of something more. What more could you become?",
  },
  TEMPTATION_ENLIGHTEMENT: {
    name: "Enlightement",
    prefix: "are feeling Temptations: ",
    value:
      "..You could dedicate yourself to the pursuit of Knowledge. The key to Wisdom might be in your grasp.",
  },
  VITALITY: {
    name: "Vitality",
    prefix: "are rushing with ",
    value: "Exercise, or something rarer, has invigorated you.",
  },
  ROMANCE: {
    name: "Trysts and Interludes",
    prefix: "are going through: ",
    value:
      "If you have a particular friend, now is the time to renew your connection.",
  },
  UNEXPECTED: {
    name: "Something Unexpected",
    value: "Every life has its impossible corners.",
  },
  REBELLION: {
    name: "Rebellious thoughts",
    prefix: "are going through: ",
    value:
      "As when the Lionsmith learned a Secret of great Betrayal, you too might be looking to unshackle your chains - or are your plans already in motion?",
  },
  SCENT: {
    name: "Peculiar Scents",
    prefix: "are sensing: ",
    value:
      "Green scents recall rain. Scent is the sense that is strongest in our memories. Be it the smell of sun-warmed soil after rain, or something else - something has caught your nose.",
  },
  NUMA: {
    name: "Mists and Silence",
    prefix: "find yourself in ",
    value: [
      "Mist presses against the walls and stroke the flagstones with its fingers. A drum taps an irregular rhythm somewhere below the streets. Numa.",
      "The streets are quiet. The signs are written in a language nobody can read. No-one comes when knocking doors. Numa.",
      "The local inn is crowded with Numa's heralds and pilgrims. They will be gone by morning. Until then you could offer your services for payment. You might regret it. Numa.",
      "The local smithy's fire still glows, but through the windows one sees a gaunt, eyeless shape working the bellows. There is no sign of the smith. You know better than to interrupt this visitor. Numa.",
      "Post-office. The telephone-line crackles. The mists surges and retreats. From far away - maybe above - one hears the post-mistress' voice crying out lamentations. But there is no sign of her here. Numa.",
    ],
  },
};

const EMOTIONS_ARRAY = [];

for (const [key, properties] of Object.entries(RAW_EMOTIONS)) {
  EMOTIONS_ARRAY.push({
    key,
    ...properties,
    type: ASPECT_COMBINATION_TYPES.EMOTION,
  });
}

module.exports = {
  RAW_EMOTIONS,
  EMOTIONS_ARRAY,
};
