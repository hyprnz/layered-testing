"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const LegacyCalculator_1 = require("./LegacyCalculator");
const Moqs_1 = require("../Moqs");
const PlannedStartMaker_1 = require("./PlannedStartMaker");
describe("LegacyCalculator mock example", () => {
    describe("calculate", () => {
        const date1 = new Date(2018, 0, 1);
        const date2 = new Date(2018, 0, 10);
        const date3 = new Date(2018, 0, 11);
        const dates = [date3, date1, date2];
        let mock;
        let plannedStartMaker;
        let legacyCalculator;
        beforeEach(() => {
            mock = new Moqs_1.Moqs();
            plannedStartMaker = mock.ofType(PlannedStartMaker_1.PlannedStartMaker);
            legacyCalculator = new LegacyCalculator_1.LegacyCalculator((dates, minimumCount) => plannedStartMaker.object);
        });
        it("make", () => {
            plannedStartMaker
                .setup(x => x.make())
                .returns(() => ({ startTime: 100, count: 200 }));
            chai_1.expect(legacyCalculator.calculate(dates)).to.eql({ startTime: 100, count: 200 });
            mock.verifyAll();
        });
    });
});
describe("LegacyCalculator fake example (to be completed)", () => {
    describe("calculate", () => {
        const date1 = new Date(2018, 0, 1);
        const date2 = new Date(2018, 0, 10);
        const date3 = new Date(2018, 0, 11);
        const dates = [date3, date1, date2];
        beforeEach(() => {
        });
        it("make", () => {
        });
    });
});
