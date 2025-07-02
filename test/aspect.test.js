const assert = require('assert');
const exp = require('expect');
const fs = require('node:fs');
const { RAW_ASPECTS, ASPECT_NAMES } = require('../constants/aspects/core');
const { ASPECTS } = require('../constants/aspects/_combined');
const { checkIfNuma } = require('../utils/numa.utils');
const { ASPECT_DESCRIPTIONS } = require('../constants/aspects/descriptions');
const { getAspectByName } = require('../utils/aspects.utils');

describe('Aspect Utils', () => {

    it('Should find an aspect by Name (Knock)', () => {
        const _knock = getAspectByName(ASPECT_NAMES.KNOCK);
        const _manualKnockResult = ASPECTS.find((a) => a.name === ASPECT_NAMES.KNOCK);

        exp.expect(_knock).toBeTruthy();
        exp.expect(_knock).toEqual(_manualKnockResult);
    });

    it('Should not find a nonsense name aspect', () => {
        const _woodcutting = getAspectByName('WOODCUTTING');
        exp.expect(_woodcutting).toBeFalsy();
    });

});

describe('Aspects', () => {

    it('Should have a combined aspect array', () => {
        exp.expect(ASPECTS.length).toBeGreaterThan(0);
    });

    it('Should have an equal amount of RAW Aspects as Combined Aspects', () => {
        exp.expect(RAW_ASPECTS.length).toEqual(ASPECTS.length);
    });

    it('Should have higher weights for a Principle (Lantern) than a Power (Moon)', () => {
        const _lantern = getAspectByName(ASPECT_NAMES.LANTERN);
        const _moon = getAspectByName(ASPECT_NAMES.MOON);

        exp.expect(_lantern.weight).toBeGreaterThan(_moon.weight);
    });

    it('Should have an even lower weight for Secret Histories', () => {
        const _nectar = getAspectByName(ASPECT_NAMES.NECTAR);
        const _secretHistories = getAspectByName(ASPECT_NAMES.SECRET_HISTORIES);

        exp.expect(_nectar.weight).toBeGreaterThan(_secretHistories.weight)
    });

});

describe('Aspects (forEach)', () => {

    ASPECTS.forEach((aspect, i) => {
        it(`Aspect ${i}: (${aspect.name}) should have a short description`, () => {
            exp.expect(aspect.descriptionShort).toBeTruthy();
            exp.expect(aspect.descriptionShort).toEqual(ASPECT_DESCRIPTIONS[aspect.name].short);
        });

        it(`Aspect ${i} should have an expanded description`, () => {
            exp.expect(aspect.descriptionExpanded).toBeTruthy();
        });

        it(`Aspect ${i} should have a longer Expanded than Short description`, () => {
            const _baseDescriptionLength = aspect.descriptionShort.length + 1;
            exp.expect(aspect.descriptionExpanded.length).toBeGreaterThan(_baseDescriptionLength);
        });

        it(`Aspect ${i} image exists in the image folder`, () => {
            const _exists = fs.existsSync(`./image/powers/${aspect.icon}`);
            exp.expect(_exists).toBeTruthy();
        });

    });

});

describe('Numa', () => {



    it('Should register a combination of 3 (out of 4) specific aspects as NUMA', () => {
        const mockAspects = [{ name: ASPECT_NAMES.KNOCK }, { name: ASPECT_NAMES.ROSE }, { name: ASPECT_NAMES.MOON }];
        const isNuma = checkIfNuma(mockAspects);
        exp.expect(isNuma).toBeTruthy();
    });

    it('Should also register as Numa while replacing KNOCK with WINTER', () => {
        const mockAspects = [{ name: ASPECT_NAMES.WINTER }, { name: ASPECT_NAMES.ROSE }, { name: ASPECT_NAMES.MOON }];
        const isNuma = checkIfNuma(mockAspects);
        exp.expect(isNuma).toBeTruthy();
    });

    it('Should not be Numa when providing only two (valid) aspects', () => {
        const mockAspects = [{ name: ASPECT_NAMES.KNOCK }, { name: ASPECT_NAMES.MOON }];
        const isNuma = checkIfNuma(mockAspects);
        exp.expect(isNuma).toBeFalsy();
    });

    it('Should not be Numa when one Aspect does not belong', () => {
        const mockAspects = [{ name: ASPECT_NAMES.KNOCK }, { name: ASPECT_NAMES.GRAIL }, { name: ASPECT_NAMES.MOON }];
        const isNuma = checkIfNuma(mockAspects);
        exp.expect(isNuma).toBeFalsy();
    });

});