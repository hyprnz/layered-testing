export class Week {
    private WEEK_IN_SECONDS = (7 * 24 * 60 * 60 * 1000);
    constructor(
        private startDate: Date
    ) {}

    getStart(): Date {
        return this.startDate;
    }

    getNextWeek(): Week {
        return new Week(this.getEndDate());
    }

    getEndDate() {
        return new Date(this.startDate.getTime() + this.WEEK_IN_SECONDS);
    }

    private isWithinWeek(date: Date) {
        return date.getTime() > this.startDate.getTime() && date.getTime() <= this.getEndDate().getTime();
    }

    countDatesWithinWeek(dates: Array<Date>) {
        return dates.filter(x => this.isWithinWeek(x)).length;
    }
}