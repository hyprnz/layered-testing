export const oneWeek = (7 * 24 * 60 * 60 * 1000);

export function buildWeek(dates: Array<Date>, minimumCount: number): Week {
    return new Week(dates, minimumCount)
}

export class Week {

    constructor(private dates: Array<Date>, public minimumCount: number) {
    }

    secondWeekAsTime(): number {
        return minDate(this.dates) + oneWeek;
    }

    countForSecondWeek(): number {
        return this.count(this.secondWeekAsTime())
    }

    private firstWeekAsTime(): number {
        return minDate(this.dates)
    }

    private countForFirstWeek(): number {
        return this.count(this.firstWeekAsTime())
    }

    count(startTime: number): number {
        return this.dates
            .filter(x => x.getTime() > startTime && x.getTime() < startTime + oneWeek)
            .length;
    }

    isValid() {
        return this.dates.length > 0 &&
            this.countForSecondWeek() > this.countForFirstWeek() &&
            this.countForSecondWeek() >= this.minimumCount
    }
}

function minDate(dates: Array<Date>): number {
    return dates.length === 0 ? 0 :
        dates.reduce((prev, curr) => curr.getTime() < prev.getTime() ? curr : prev).getTime()
}