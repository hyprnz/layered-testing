"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneWeek = (7 * 24 * 60 * 60 * 1000);
function minDateAsTime(dates) {
    return dates.length === 0 ? 0 :
        dates.reduce((prev, curr) => curr.getTime() < prev.getTime() ? curr : prev).getTime();
}
exports.minDateAsTime = minDateAsTime;
function withinOneWeekExcludingStart(dates, startTime) {
    return dates
        .filter(x => x.getTime() > startTime && x.getTime() < startTime + exports.oneWeek);
}
exports.withinOneWeekExcludingStart = withinOneWeekExcludingStart;
