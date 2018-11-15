import {expect} from "chai";
import {WeekFactory} from "./WeekFactory";
import {Week} from "./Week";

describe("WeekFactory", () => {
    describe("createEarliestWeekFromStartDates", () => {
        // it("no dates", () => {
        //     expect(new WeekFactory().createEarliestWeekFromStartDates([])).to.throw().eql('Start Dates can not be empty');
        // });

        it("when one date provided", () => {
            let dates = [new Date()]
            expect(new WeekFactory().createEarliestWeekFromStartDates(dates)).to.eql(new Week(dates[0]));
        });

        it("when many dates the same are provided", () => {
            let  date = new Date();
            let dates = [date, date, date]
            expect(new WeekFactory().createEarliestWeekFromStartDates(dates)).to.eql(new Week(date));
        });


        it("when many different dates provided", () => {
           let  earliestDate = new Date();
           let dates = [new Date(earliestDate.getTime() + 20), earliestDate, new Date(earliestDate.getTime() + 1)]
           expect(new WeekFactory().createEarliestWeekFromStartDates(dates)).to.eql(new Week(earliestDate));
        });

    });
});