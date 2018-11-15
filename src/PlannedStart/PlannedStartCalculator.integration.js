"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const LegacyCalculator_1 = require("./PlannedStartCalculator");
describe("PlannedStartCalculator", () => {
    describe("calculate", () => {
        it("empty", () => {
            chai_1.expect(new LegacyCalculator_1.PlannedStartCalculator().calculate([])).to.eql({ startTime: 0, count: 0 });
        });
        it("with one date", () => {
            chai_1.expect(new LegacyCalculator_1.PlannedStartCalculator().calculate([new Date()])).to.eql({ startTime: 0, count: 0 });
        });
        it("with many dates", () => {
            chai_1.expect(new LegacyCalculator_1.PlannedStartCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 10),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ])).to.eql({ startTime: 1515322800000, count: 3 });
        });
    });
});
