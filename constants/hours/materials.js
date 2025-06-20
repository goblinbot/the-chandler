const { HOUR_NAMES } = require("./names");

const HOUR_MATERIALS = {
    [HOUR_NAMES.WATCHMAN]: {
        type: 'material',
        name: 'amber'
    },
    [HOUR_NAMES.MALACHITE]: {
        type: 'metal',
        name: 'copper'
    },
    [HOUR_NAMES.WITCH_AND_SISTER]: {
        type: 'materials',
        name: 'pearl/coral/amber'
    },
    [HOUR_NAMES.COLONEL]: {
        type: 'metals',
        name: 'steel/iron'
    },
    [HOUR_NAMES.LIONSMITH]: {
        type: 'metals',
        name: 'brass/gold'
    },
    [HOUR_NAMES.MENISCATE]: {
        type: 'metal',
        name: 'silver'
    },
    [HOUR_NAMES.SUN_IN_RAGS]: {
        type: 'metal',
        name: 'tin'
    },
    [HOUR_NAMES.MADRUGAD]: {
        type: 'metal',
        name: 'gold'
    },
    [HOUR_NAMES.WOLF_DIVIDED]: {
        type: 'mineral',
        name: 'cinnabar'
    },
    [HOUR_NAMES.SISTER_AND_WITCH]: {
        type: 'materials',
        name: 'pearl/coral/amber'
    },
    [HOUR_NAMES.FLOWERMAKER]: {
        type: 'metal',
        name: 'gold'
    },
    [HOUR_NAMES.FORGE_OF_DAYS]: {
        type: 'metal',
        name: 'mercury'
    },
};

module.exports = {
    HOUR_MATERIALS,
}