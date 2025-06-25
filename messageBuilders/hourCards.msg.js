const { numberToHourstamp } = require("../utils/hours.utils");
const { romanizeNumber } = require("../utils/misc.utils");

const createTarotReplyFields = (hour) => {
    const _replyFields = [];

    if (hour.tarot) {
        const _intro = hour.isUnofficialTarot ? `Unconfirmed; this Hour might take the place of ${hour.tarot}.` : `Major Arcana; this Hour as '${hour.tarot}'.`

        _replyFields.push({
            name: _intro,
            value: `Quick Themes: ${hour.tarotRead}`,
        });

        if (hour.tarotDescription) {
            _replyFields.push({
                name: '',
                value: hour.tarotDescription,
            });
        }
    } else {
        _replyFields.push({
            name: "Major Arcana",
            value: "This Hour does not have a tarot equivalent.\nFor better or for worse, this is an uncommon result."
        })
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
