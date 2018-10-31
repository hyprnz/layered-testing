"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withinOneWeekExcludingStart(dates, startOfFirstWeek) {
    return dates
        .filter(x => x.getTime() > startOfFirstWeek && x.getTime() < startOfFirstWeek + (7 * 24 * 60 * 60 * 1000))
        .length;
}
class LegacyCalculator {
    calculate(dates, requiredDays = 1) {
        dates.sort((a, b) => a.getTime() - b.getTime());
        let plannedStart = { startTime: 0, count: 0 };
        if (dates.length === 0) {
            return plannedStart;
        }
        const requiredNumberInFirstWeek = requiredDays;
        const startOfFirstWeek = dates[0].getTime();
        const startOfSecondWeek = startOfFirstWeek + (7 * 24 * 60 * 60 * 1000);
        const countsForFirstWeek = withinOneWeekExcludingStart(dates, startOfFirstWeek);
        const countsForSecondWeek = dates
            .filter(x => x.getTime() > startOfSecondWeek && x.getTime() < startOfSecondWeek + (7 * 24 * 60 * 60 * 1000))
            .length;
        if (countsForSecondWeek > countsForFirstWeek && countsForSecondWeek >= requiredNumberInFirstWeek) {
            plannedStart = { startTime: startOfSecondWeek, count: countsForSecondWeek };
        }
        return plannedStart;
    }
}
exports.LegacyCalculator = LegacyCalculator;
