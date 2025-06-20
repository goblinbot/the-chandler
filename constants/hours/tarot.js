const { HOUR_NAMES } = require("./names");

const HOUR_TAROT = {
  [HOUR_NAMES.MOTH]: "The Fool",
  [HOUR_NAMES.WATCHMAN]: "The Magician",
  [HOUR_NAMES.VELVET]: "The High Priestess",
  [HOUR_NAMES.MALACHITE]: "The Empress",
  [HOUR_NAMES.WITCH_AND_SISTER]: "The Lovers",
  [HOUR_NAMES.COLONEL]: "The Chariot",
  [HOUR_NAMES.LIONSMITH]: "Strength",
  [HOUR_NAMES.ELEGIAST]: "The Hermit",
  [HOUR_NAMES.THUNDERSKIN]: "The Emperor",
  [HOUR_NAMES.BEACHCOMBER]: "The Wheel of Fortune",
  [HOUR_NAMES.MENISCATE]: "Justice",
  [HOUR_NAMES.SUN_IN_RAGS]: "The Hanged Man",
  [HOUR_NAMES.HORNED_AXE]: "Death",
  [HOUR_NAMES.MOTHER_OF_ANTS]: "Hierophant",
  [HOUR_NAMES.MADRUGAD]: "Temperance",
  [HOUR_NAMES.RED_GRAIL]: "The Devil",
  [HOUR_NAMES.WOLF_DIVIDED]: "The Tower",
  [HOUR_NAMES.VAGABOND]: "The Star",
  [HOUR_NAMES.SISTER_AND_WITCH]: "The Moon",
  [HOUR_NAMES.FLOWERMAKER]: "The Sun",
  [HOUR_NAMES.FORGE_OF_DAYS]: "Judgement",
  [HOUR_NAMES.GIRIBRAGO]: "The World",
};

const TAROT_QUICK_READINGS = {
  [HOUR_NAMES.MOTH]: "Folly, mania, delirium, frenzy",
  [HOUR_NAMES.WATCHMAN]: "Energy, power, potential",
  [HOUR_NAMES.VELVET]: "Secrets, mystery",
  [HOUR_NAMES.MALACHITE]: "Fruitfulness, initiative",
  [HOUR_NAMES.WITCH_AND_SISTER]: "Attraction, love, beauty",
  [HOUR_NAMES.COLONEL]: "Aid, triumph, vengeance",
  [HOUR_NAMES.LIONSMITH]: "Courage, compassion",
  [HOUR_NAMES.ELEGIAST]: "Introspection, solitude",
  [HOUR_NAMES.THUNDERSKIN]: "Authority, initiative",
  [HOUR_NAMES.BEACHCOMBER]: "Fate, change",
  [HOUR_NAMES.MENISCATE]: "Fairness, decision, duty",
  [HOUR_NAMES.SUN_IN_RAGS]: "Wisdom, sacrifice",
  [HOUR_NAMES.HORNED_AXE]: "End, transition, corruption",
  [HOUR_NAMES.MOTHER_OF_ANTS]: "Alliance, inspiration",
  [HOUR_NAMES.MADRUGAD]: "Balance, compromise",
  [HOUR_NAMES.RED_GRAIL]: "Violence, force, hopelessness",
  [HOUR_NAMES.WOLF_DIVIDED]: "Calamity, misery, disgrace",
  [HOUR_NAMES.VAGABOND]: "Hope, bright prospects",
  [HOUR_NAMES.SISTER_AND_WITCH]: "Fear, illusion, occult forces",
  [HOUR_NAMES.FLOWERMAKER]: "Material happiness, vitality",
  [HOUR_NAMES.FORGE_OF_DAYS]: "Rebirth, absolution",
  [HOUR_NAMES.GIRIBRAGO]: "Voyage, assured success",
}

module.exports = {
  HOUR_TAROT,
  TAROT_QUICK_READINGS
};
