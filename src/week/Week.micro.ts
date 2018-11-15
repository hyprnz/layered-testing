import {expect} from "chai";
import {Week} from "./Week";


const weekInMillis = (7 * 24 * 60 * 60 * 1000);

describe("Week", () => {
    it("getStartDate", () => {
        let now = new Date();
        expect(new Week(now).getStart()).to.eq(now);
    });

    it("date of now", () => {
        let now = new Date();
        let expectedEnd = new Date(now.getTime() + weekInMillis);
        expect(new Week(now).getEndDate()).to.eql(expectedEnd);
    });

    it("getNextWeek", () => {
        let now = new Date();
        expect(new Week(now).getStart()).to.eq(now);
    });

    describe("countDatesWithinWeek", () => {

        it("using one date that is start date", () => {
            let start = new Date()
            expect(new Week(new Date()).countDatesWithinWeek([start])).to.eql(0);
        });

        it("using one date that is end date", () => {
            let start = new Date()
            let endDate = new Date(start.getTime() + weekInMillis);
            expect(new Week(new Date()).countDatesWithinWeek([endDate])).to.eql(1);
        });

        it("using one date that is just after start date", () => {
            let start = new Date();
            let included = new Date(start.getTime() + 1);

            expect(new Week(new Date()).countDatesWithinWeek([included])).to.eql(1);
        });

        it("using multiple dates just after startdate", () => {
            let start = new Date();
            let included1 = new Date(start.getTime() + 1);
            let included2 = new Date(start.getTime() + 2);
            let included3 = new Date(start.getTime() + 3);

            expect(new Week(new Date()).countDatesWithinWeek([included1, included2, included3])).to.eql(3);
        });

        it("using one date  that is just before start date", () => {
            let start = new Date();
            let included = new Date(start.getTime() - 1);

            expect(new Week(new Date()).countDatesWithinWeek([included])).to.eql(0);
        });

        it("using multiple dates that are just before startdate", () => {
            let start = new Date();
            let included1 = new Date(start.getTime() - 1);
            let included2 = new Date(start.getTime() - 2);
            let included3 = new Date(start.getTime() - 3);

            expect(new Week(new Date()).countDatesWithinWeek([included1, included2, included3])).to.eql(0);
        });

        it("using multiple dates some after some before and some in week", () => {
            let start = new Date();
            let before1 = new Date(start.getTime() - 1);
            let included1 = new Date(start.getTime() +1);
            let included2 = new Date(start.getTime() + 2);
            let after1 = new Date(start.getTime() + weekInMillis + 1);
            let after2 = new Date(start.getTime() + weekInMillis + 2);

            expect(new Week(new Date()).countDatesWithinWeek([before1, included1, included2, after1, after2 ])).to.eql(2);
        });

    });
});