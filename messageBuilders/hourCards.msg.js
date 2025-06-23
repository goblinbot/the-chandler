const { numberToHourstamp } = require("../utils/hours.utils");
const { romanizeNumber } = require("../utils/misc.utils");

const createTarotReplyFields = (hour) => {
    const _replyFields = [];

    if (hour.tarot) {
        _replyFields.push({
            name: `Major Arcana; this Hour as '${hour.tarot}'.`,
            value: `Quick Themes: ${hour.tarotRead}`,
        });
    }

    if (hour.tarotDescription) {
        _replyFields.push({
            name: '',
            value: hour.tarotDescription,
        });
    }

    return _replyFields;
}

const getHourHourString = (hour) => {
    return hour.number !== null ? `Associated with the hour ${romanizeNumber(hour.number)}, or ${numberToHourstamp(hour.number)}.\n` : 'One of the lost hours.'
}

const createAltNameReplyField = (hour) => {
    return hour.altName ? {
        name: '',
        value: `Also known as ${hour.altName}.`
    } : null;
}

const createHourDomainReplyField = (hour) => {
    return {
        name: hour.singletonDescription ? 'Theirs is the domain of:' : 'Domains:',
        value: hour.domains,
    };
}

module.exports = {
    createAltNameReplyField,
    getHourHourString,
    createTarotReplyFields,
    createHourDomainReplyField
}
