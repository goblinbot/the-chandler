const assert = require('assert');
const exp = require('expect');
const fs = require('node:fs');

const { THE_HOURS, THE_HOURS_OBJECT_LIST } = require('../constants/hours/_combined');
const { HOUR_WEIGHTS } = require('../constants/hours/numbers');
const { HOUR_NAMES } = require('../constants/hours/names');
const { HOUR_ART_IS_UNOFFICIAL } = require('../constants/hours/images');

describe('Hours', () => {

    it('Should not have Hours without Aspects in the array', () => {
        const _hasIncorrectHour = THE_HOURS.find((h) => h.name === `The ${HOUR_NAMES.NEW_KING}`);
        exp.expect(_hasIncorrectHour).toBeFalsy();
    });

    it('Should have the Hour known as The Moth', () => {
        const _moth = THE_HOURS.find((h) => h.name === `The Moth`);
        exp.expect(_moth).toBeTruthy();
    });

    it('Should have AltNames for some of the Hours (Elegiast)', () => {
        const _dove = THE_HOURS_OBJECT_LIST['ELEGIAST'];
        exp.expect(_dove.altName).toBeTruthy();
    });

    it('Should have different pre-defined Weights', () => {
        exp.expect(HOUR_WEIGHTS.DEFAULT).not.toEqual(HOUR_WEIGHTS.TAROT);
        exp.expect(HOUR_WEIGHTS.UNOFFICIAL_TAROT).not.toEqual(HOUR_WEIGHTS.TAROT);
    });
});

describe('Hours (forEach)', () => {

    THE_HOURS.forEach((hour, i) => {
        it(`${i}:${hour.name} should have a PrimaryAspect`, () => {
            exp.expect(hour.primaryAspect).toBeTruthy()
        });

        it(`${i} their primaryAspect should be found in their aspects`, () => {
            const _includesAspect = hour.aspects.includes(hour.primaryAspect);
            exp.expect(_includesAspect).toBeTruthy();
        });

        it(`${i} should have domain(s)`, () => exp.expect(hour.domains).toBeTruthy());
        it(`${i} should have an image`, () => exp.expect(hour.image).toBeTruthy());

        it(`${i} should have an existing image file in directory`, () => {
            const _exists = fs.existsSync(`./image/hours/${hour.image}`);
            exp.expect(_exists).toBeTruthy();
        });

        it(`${i} should have a description`, () => {
            exp.expect(hour.description).toBeTruthy();
        });

        if (hour.requireMultipleAspects) {
            it(`${i} requires Multiple Aspects to match, Should have multiple aspects`, () => {
                exp.expect(hour.aspects.length).toBeGreaterThan(1);
            });
        }

        if (hour.tarot) {
            it(`${i} should have TarotDescription`, () => {
                exp.expect(hour.tarotDescription).toBeTruthy();
            });

            it(`${i} should have Tarot(quick)Read`, () => {
                exp.expect(hour.tarotRead).toBeTruthy();
            });

            if (hour.isUnofficialTarot) {
                it(`${i} has unofficial Tarot, should have WEIGHT.UNOFFICIAL`, () => {
                    assert.equal(hour.weight, HOUR_WEIGHTS.UNOFFICIAL_TAROT);
                });
            } else {
                it(`${i} has official Tarot, should have WEIGHT.TAROT`, () => {
                    assert.equal(hour.weight, HOUR_WEIGHTS.TAROT);
                });
            }

        } else {
            it(`${i} has no Tarot, should have WEIGHT.DEFAULT`, () => {
                assert.equal(hour.weight, HOUR_WEIGHTS.DEFAULT);
            });
        }

        // Artist credit check
        if (hour.image.includes('by-') || HOUR_ART_IS_UNOFFICIAL[hour.nameRaw]) {
            it(`Art:${i} Should have 'by-' in the image filename`, () => exp.expect(hour.image.includes('by-')).toBeTruthy());
            it(`Art:${i} Should have an ART_IS_UNOFFICIAL flag`, () => exp.expect(HOUR_ART_IS_UNOFFICIAL[hour.nameRaw]).toBeTruthy());

            it(`Art:${i} Should credit unofficial art in the footNote`, () => {
                const _filename = hour.image.split(".")[0].toLowerCase();
                const _artist = _filename.split("by-")[1];
                const _isCredited = hour.footNote.toLowerCase().includes(_artist);
                exp.expect(_isCredited).toBeTruthy();
            });
        }


    })
});