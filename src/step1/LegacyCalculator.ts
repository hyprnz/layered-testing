import {WeekCounter} from "./WeekCounter";
import {PlannedStart} from "./PlannedStart";

export class LegacyCalculator {
    calculate(dates: Array<Date>, requiredDays = 1): PlannedStart {
        dates.sort((a, b,) => a.getTime() - b.getTime());

        let plannedStart = new PlannedStart(0, 0);
        let previousDate;

        const requiredNumberInFirstWeek = requiredDays;

        dates.every(function (date) {

            const startOfFirstWeek = date.getTime();
            const startOfSecondWeek = startOfFirstWeek + 7 * 24 * 60 * 60 * 1000;

            const countsForFirstWeek = new WeekCounter().count(startOfFirstWeek, dates);
            const countsForSecondWeek = new WeekCounter().count(startOfSecondWeek, dates);

            if (countsForSecondWeek > countsForFirstWeek && countsForSecondWeek >= requiredNumberInFirstWeek) {
                plannedStart = new PlannedStart(startOfSecondWeek, countsForSecondWeek);
                return false;
            }
            previousDate = date;
            return true;
        });

        return plannedStart;
    }
}