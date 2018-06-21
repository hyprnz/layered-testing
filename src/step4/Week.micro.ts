import {expect} from "chai";
import {oneWeek, Week} from "./Week";

describe("WeekCounter", () => {
    const now = new Date();
    const justAfterNow = new Date(now.getTime() + 1);
    const exactlyOneWeekAfter = new Date(now.getTime() + oneWeek);
    const moreThanOneWeekAfter = new Date(now.getTime() + oneWeek + 1);

    describe("oneWeek", () => {
        it("one week later", () => {
            const date1 = new Date(2018, 1, 1, 13, 1, 1, 1);
            const date2 = new Date(date1.getTime() + oneWeek);
            expect(date1.toUTCString()).to.eql("Thu, 01 Feb 2018 00:01:01 GMT");
            expect(date2.toUTCString()).to.eql("Thu, 08 Feb 2018 00:01:01 GMT");
        });
    });

    describe("count", () => {
        it("no dates", () => {
            expect(new Week([], 1).count(now.getTime())).to.eql(0);
        });
        it("same date", () => {
            expect(new Week([now], 1).count(now.getTime())).to.eql(0);
        });
        it("just after now", () => {
            expect(new Week([justAfterNow], 1).count(now.getTime())).to.eql(1);
        });
        it("exactly one week later", () => {
            expect(new Week([exactlyOneWeekAfter], 1).count(now.getTime())).to.eql(0);
        });
        it("more than one week later", () => {
            expect(new Week([moreThanOneWeekAfter], 1).count(now.getTime())).to.eql(0);
        });
        it("with many dates", () => {
            expect(new Week([
                now, justAfterNow, moreThanOneWeekAfter, exactlyOneWeekAfter, justAfterNow
            ], 1).count(now.getTime())).to.eql(2);
        });
    });
});