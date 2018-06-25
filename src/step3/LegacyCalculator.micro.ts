import {expect} from "chai";
import {LegacyCalculator} from "./LegacyCalculator";
import * as TypeMoq from "typemoq";
import {Moqs} from "../Moqs";
import {PlannedStartMaker} from "./PlannedStartMaker";

describe("LegacyCalculator mock example", () => {
    describe("calculate", () => {
        const date1 = new Date(2018, 0, 1);
        const date2 = new Date(2018, 0, 10);
        const date3 = new Date(2018, 0, 11);
        const dates = [date3, date1, date2];
        let mock: Moqs;
        let plannedStartMaker: TypeMoq.IMock<PlannedStartMaker>;
        let legacyCalculator: LegacyCalculator;

        beforeEach(() => {
            mock = new Moqs();
            plannedStartMaker = mock.ofType(PlannedStartMaker);
            legacyCalculator = new LegacyCalculator((dates, minimumCount) => plannedStartMaker.object)
        });

        it("make", () => {
            plannedStartMaker
                .setup(x => x.make())
                .returns(() => ({startTime: 100, count: 200}));

            expect(legacyCalculator.calculate(dates)).to.eql({startTime: 100, count: 200});

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