const { ASPECT_NAMES } = require("../aspects/core")

// Maybe on the feature list? WIP
const PROFESSIONS = {
    FISHERMAN: {
        name: "Fisherman",
        description: "",
        aspects: {
            primary: [ASPECT_NAMES.MOON],
            secondary: [ASPECT_NAMES.SKY],
        }
    }
}

// Miner Scale2 Moon1 Forge 1

module.exports = {
    PROFESSIONS,
}