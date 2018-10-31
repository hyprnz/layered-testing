"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DateTime_1 = require("./DateTime");
describe("DateTime", () => {
    const minDate = new Date(2018, 3, 20);
    const justAfterMinDate = new Date(minDate.getTime() + 1);
    const exactlyOneWeekAfterMinDate = new Date(minDate.getTime() + DateTime_1.oneWeek);
    const moreThanOneWeekAfterMinDate = new Date(minDate.getTime() + DateTime_1.oneWeek + 1);
    describe("oneWeek", () => {
        it("one week later", () => {
            const date1 = new Date(2018, 1, 1, 13, 1, 1, 1);
            const date2 = new Date(date1.getTime() + DateTime_1.oneWeek);
            chai_1.expect(date1.toUTCString()).to.eql("Thu, 01 Feb 2018 00:01:01 GMT");
            chai_1.expect(date2.toUTCString()).to.eql("Thu, 08 Feb 2018 00:01:01 GMT");
        });
    });
    describe("withinOneWeekFromStart", () => {
        it("no dates", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([], minDate.getTime())).to.eql([]);
        });
        it("same date", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([minDate], minDate.getTime())).to.eql([]);
        });
        it("just after now", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([justAfterMinDate], minDate.getTime())).to.eql([justAfterMinDate]);
        });
        it("exactly one week later", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([exactlyOneWeekAfterMinDate], minDate.getTime())).to.eql([]);
        });
        it("more than one week later", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([moreThanOneWeekAfterMinDate], minDate.getTime())).to.eql([]);
        });
        it("with many dates", () => {
            chai_1.expect(DateTime_1.withinOneWeekExcludingStart([
                minDate, justAfterMinDate, moreThanOneWeekAfterMinDate, exactlyOneWeekAfterMinDate, justAfterMinDate
            ], minDate.getTime())).to.eql([justAfterMinDate, justAfterMinDate]);
        });
    });
});
