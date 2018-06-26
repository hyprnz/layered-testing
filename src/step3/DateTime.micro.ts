import {expect} from "chai";
import {oneWeek, withinOneWeekExcludingStart} from "./DateTime";

describe("DateTime", () => {
    const minDate = new Date(2018,3,20);
    const justAfterMinDate = new Date(minDate.getTime() + 1);
    const exactlyOneWeekAfterMinDate = new Date(minDate.getTime() + oneWeek);
    const moreThanOneWeekAfterMinDate = new Date(minDate.getTime() + oneWeek + 1);

    describe("oneWeek", () => {
        it("one week later", () => {
            const date1 = new Date(2018, 1, 1, 13, 1, 1, 1);
            const date2 = new Date(date1.getTime() + oneWeek);
            expect(date1.toUTCString()).to.eql("Thu, 01 Feb 2018 00:01:01 GMT");
            expect(date2.toUTCString()).to.eql("Thu, 08 Feb 2018 00:01:01 GMT");
        });
    });

    describe("withinOneWeekFromStart", () => {
        it("no dates", () => {
            expect(withinOneWeekExcludingStart([], minDate.getTime())).to.eql([]);
        });
        it("same date", () => {
            expect(withinOneWeekExcludingStart([minDate], minDate.getTime())).to.eql([]);
        });
        it("just after now", () => {
            expect(withinOneWeekExcludingStart([justAfterMinDate], minDate.getTime())).to.eql([justAfterMinDate]);
        });
        it("exactly one week later", () => {
            expect(withinOneWeekExcludingStart([exactlyOneWeekAfterMinDate], minDate.getTime())).to.eql([]);
        });
        it("more than one week later", () => {
            expect(withinOneWeekExcludingStart([moreThanOneWeekAfterMinDate], minDate.getTime())).to.eql([]);
        });
        it("with many dates", () => {
            expect(withinOneWeekExcludingStart([
                minDate, justAfterMinDate, moreThanOneWeekAfterMinDate, exactlyOneWeekAfterMinDate, justAfterMinDate
            ], minDate.getTime())).to.eql([justAfterMinDate, justAfterMinDate]);
        });
    });
});