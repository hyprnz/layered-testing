import {expect} from "chai";
import {LegacyCalculator} from "./LegacyCalculator";
import * as TypeMoq from "typemoq";
import {Moqs} from "../Moqs";
import {Week} from "./Week";

describe("LegacyCalculator mock example", () => {
    describe("calculate", () => {
        const date1 = new Date(2018, 0, 1);
        const date2 = new Date(2018, 0, 10);
        const date3 = new Date(2018, 0, 11);
        const dates = [date3, date1, date2];
        let mock: Moqs;
        let week: TypeMoq.IMock<Week>;
        let legacyCalculator: LegacyCalculator;

        beforeEach(() => {
            mock = new Moqs();
            week = mock.ofType(Week);
            legacyCalculator = new LegacyCalculator((dates, minimumCount) => week.object)
        });

        it("valid", () => {
            week
                .setup(x => x.isValid())
                .returns(() => true);

            week
                .setup(x => x.secondWeekAsTime())
                .returns(() => 100);

            week
                .setup(x => x.countForSecondWeek())
                .returns(() => 200);

            expect(legacyCalculator.calculate(dates)).to.eql({startTime: 100, count: 200});

            mock.verifyAll();
        });

        it("invalid", () => {
            week
                .setup(x => x.isValid())
                .returns(() => false);

            expect(legacyCalculator.calculate(dates)).to.eql({startTime: 0, count: 0});

            mock.verifyAll();
        });
    });
});