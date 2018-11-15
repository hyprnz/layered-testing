import {PlannedStart} from "./PlannedStart";
import {WeekFactory} from "../week/WeekFactory";

export class PlannedStartCalculator {

    private static NO_START_DATE: PlannedStart = {startTime: 0, count: 0};

    constructor(
        private weekFactory: WeekFactory = new WeekFactory()
    ) {}

    calculate(dates: Array<Date>, requiredNumberInFirstWeek = 1): PlannedStart {
        if (dates.length === 0) {
            return PlannedStartCalculator.NO_START_DATE;
        }
        const firstWeek =  this.weekFactory.createEarliestWeekFromStartDates(dates);
        const countsForFirstWeek = firstWeek.countDatesWithinWeek(dates);

        const secondWeek = firstWeek.getNextWeek();
        const countsForSecondWeek = secondWeek.countDatesWithinWeek(dates);

        if (countsForSecondWeek < requiredNumberInFirstWeek) {
            return PlannedStartCalculator.NO_START_DATE;
        }

        if (countsForSecondWeek <= countsForFirstWeek) {
            return PlannedStartCalculator.NO_START_DATE;
        }
        return {startTime: secondWeek.getStart().getTime(), count: countsForSecondWeek};
    }
}
