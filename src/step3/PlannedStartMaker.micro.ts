import {expect} from "chai";
import {oneWeek} from "./DateTime";
import {PlannedStartMaker} from "./PlannedStartMaker";

describe("PlannedStartMaker", () => {
    const minDate = new Date(2018, 5, 11);
    const justAfterNow = new Date(minDate.getTime() + 1);
    const moreThanOneWeekAfter = new Date(minDate.getTime() + oneWeek + 1);

    describe("make", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker([], 0);

            expect(plannedStartMaker.make()).to.eql({startTime: 0, count: 0});
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);

            expect(plannedStartMaker.make()).to.eql({startTime: minDate.getTime() + oneWeek, count: 1});
        });
    });

    describe("count", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker([], 1);

            expect(plannedStartMaker.count()).to.eql(0);
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);

            expect(plannedStartMaker.count(0)).to.eql(0);
            expect(plannedStartMaker.count(1)).to.eql(1);
        });
        it("with one valid date in first and second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, justAfterNow, moreThanOneWeekAfter], 0);

            expect(plannedStartMaker.count(0)).to.eql(1);
            expect(plannedStartMaker.count(1)).to.eql(1);
        });
    });

});