import {PlannedStart} from "../PlannedStart";

let makeCount = function (dates: Array<Date>, startOfFirstWeek: number) {
    return dates
        .filter(x => x.getTime() > startOfFirstWeek && x.getTime() < startOfFirstWeek + (7 * 24 * 60 * 60 * 1000))
        .length;
};

export class LegacyCalculator {
    calculate(dates: Array<Date>, requiredDays = 1): PlannedStart {
        dates.sort((a, b,) => a.getTime() - b.getTime());

        let plannedStart = {startTime: 0, count: 0};

        if (dates.length === 0) {
            return plannedStart;
        }

        const requiredNumberInFirstWeek = requiredDays;

        const startOfFirstWeek = dates[0].getTime();
        const startOfSecondWeek = startOfFirstWeek + (7 * 24 * 60 * 60 * 1000);

        const countsForFirstWeek = makeCount(dates, startOfFirstWeek);

        const countsForSecondWeek = dates
            .filter(x => x.getTime() > startOfSecondWeek && x.getTime() < startOfSecondWeek + (7 * 24 * 60 * 60 * 1000))
            .length;

        if (countsForSecondWeek > countsForFirstWeek && countsForSecondWeek >= requiredNumberInFirstWeek) {
            plannedStart = {startTime: startOfSecondWeek, count: countsForSecondWeek};
        }

        return plannedStart;
    }
}