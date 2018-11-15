import {expect} from "chai";
import {PlannedStartCalculator} from "./PlannedStartCalculator";

describe("PlannedStartCalculator", () => {
    describe("calculate", () => {
        it("empty", () => {
            expect(new PlannedStartCalculator().calculate([])).to.eql({startTime: 0, count: 0});
        });
        it("with one date", () => {
            expect(new PlannedStartCalculator().calculate([new Date()])).to.eql({startTime: 0, count: 0});
        });

        it("with many dates", () => {
            expect(new PlannedStartCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 10),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ])).to.eql({startTime: 1515322800000, count: 3});
        });

        it("with many all in first week", () => {
            expect(new PlannedStartCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 3),
                new Date(2018, 0, 4),
                new Date(2018, 0, 5),
            ])).to.eql({startTime: 0, count: 0});
        });

        it("with many dates but less in second week", () => {
            expect(new PlannedStartCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 3),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ])).to.eql({startTime: 0, count: 0});
        });

        it("with many dates more in second week but less than required in first week", () => {
            expect(new PlannedStartCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 10),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ],
                100)
            ).to.eql({startTime: 0, count: 0});
        });

    });
});