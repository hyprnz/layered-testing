"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DateTime_1 = require("./DateTime");
const PlannedStartMaker_1 = require("./PlannedStartMaker");
describe("PlannedStartMaker", () => {
    const minDate = new Date(2018, 5, 11);
    const justAfterNow = new Date(minDate.getTime() + 1);
    const moreThanOneWeekAfter = new Date(minDate.getTime() + DateTime_1.oneWeek + 1);
    describe("make", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker_1.PlannedStartMaker([], 0);
            chai_1.expect(plannedStartMaker.make()).to.eql({ startTime: 0, count: 0 });
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker_1.PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);
            chai_1.expect(plannedStartMaker.make()).to.eql({ startTime: minDate.getTime() + DateTime_1.oneWeek, count: 1 });
        });
    });
    describe("count", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker_1.PlannedStartMaker([], 1);
            chai_1.expect(plannedStartMaker.count()).to.eql(0);
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker_1.PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);
            chai_1.expect(plannedStartMaker.count(0)).to.eql(0);
            chai_1.expect(plannedStartMaker.count(1)).to.eql(1);
        });
        it("with one valid date in first and second week", () => {
            const plannedStartMaker = new PlannedStartMaker_1.PlannedStartMaker([minDate, justAfterNow, moreThanOneWeekAfter], 0);
            chai_1.expect(plannedStartMaker.count(0)).to.eql(1);
            chai_1.expect(plannedStartMaker.count(1)).to.eql(1);
        });
    });
});
