import {expect} from "chai";
import {LegacyCalculator} from "./LegacyCalculator";

describe("LegacyCalculator", () => {
    describe("calculate", () => {
        it("empty", () => {
            expect(new LegacyCalculator().calculate([])).to.eql({startTime: 0, count: 0});
        });
        it("with one date", () => {
            expect(new LegacyCalculator().calculate([new Date()])).to.eql({startTime: 0, count: 0});
        });
        it("with many dates", () => {
            expect(new LegacyCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 10),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ])).to.eql({startTime: 1515322800000, count: 3});
        });
    });
});