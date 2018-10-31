"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateTime_1 = require("./DateTime");
function plannedStartFactory(dates, minimumCount) {
    return new PlannedStartMaker(dates, minimumCount);
}
exports.plannedStartFactory = plannedStartFactory;
class PlannedStartMaker {
    constructor(dates, minimumCount) {
        this.dates = dates;
        this.minimumCount = minimumCount;
    }
    make() {
        if (this.hasValidData()) {
            return { startTime: this.addWeeksToMinDate(1), count: this.count(1) };
        }
        return { startTime: 0, count: 0 };
    }
    count(weekNumber = 1) {
        return DateTime_1.withinOneWeekExcludingStart(this.dates, this.addWeeksToMinDate(weekNumber)).length;
    }
    hasValidData() {
        return this.dates.length > 0 &&
            this.count(1) > this.count(0) &&
            this.count(1) >= this.minimumCount;
    }
    addWeeksToMinDate(weeks) {
        return DateTime_1.minDateAsTime(this.dates) + (weeks * DateTime_1.oneWeek);
    }
}
exports.PlannedStartMaker = PlannedStartMaker;
