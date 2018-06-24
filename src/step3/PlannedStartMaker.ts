import {PlannedStart} from "../PlannedStart";
import {minDateAsTime, oneWeek, withinOneWeekExcludingStart} from "./DateTime";

export function plannedStartFactory(dates: Array<Date>, minimumCount: number): PlannedStartMaker {
    return new PlannedStartMaker(dates, minimumCount)
}

export class PlannedStartMaker {

    constructor(private dates: Array<Date>, public minimumCount: number) {
    }

    make(): PlannedStart {
        if (this.hasValidData()) {
            return {startTime: this.addWeeksToMinDate(1), count: this.count(1)}
        }

        return {startTime: 0, count: 0};
    }

    count(weekNumber: number = 1): number {
        return withinOneWeekExcludingStart(this.dates, this.addWeeksToMinDate(weekNumber)).length
    }

    private hasValidData() {
        return this.dates.length > 0 &&
            this.count(1) > this.count(0) &&
            this.count(1) >= this.minimumCount
    }

    private addWeeksToMinDate(weeks: number): number {
        return minDateAsTime(this.dates) + (weeks * oneWeek);
    }
}

