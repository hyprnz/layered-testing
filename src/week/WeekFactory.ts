import {Week} from "./Week";

export class WeekFactory {

    createEarliestWeekFromStartDates(startDates: Array<Date>) {
        if (startDates === undefined) { throw new Error('Start Dates can not be undefined')};
        if (startDates.length === 0) { throw new Error('Start Dates can not be empty')};
        let firstDate: Date = startDates.sort((a, b,) => a.getTime() - b.getTime())[0];
        return new Week(firstDate);
    }
}