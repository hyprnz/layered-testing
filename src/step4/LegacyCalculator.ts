import {PlannedStart} from "../PlannedStart";
import {buildWeek, Week} from "./Week";

export class LegacyCalculator {
    constructor(private weekBuilder: (dates: Array<Date>, minimumCount: number) => Week = buildWeek) {
    }

    calculate(dates: Array<Date>, minimumCount = 1): PlannedStart {
        const week = this.weekBuilder(dates, minimumCount);

        if (week.isValid()) {
            return {startTime: week.secondWeekAsTime(), count: week.countForSecondWeek()}
        }

        return {startTime: 0, count: 0};
    }
}