export class WeekCounter {
    count(startTime: number, dates: Array<Date>): number {
        return dates
            .filter(x => x.getTime() > startTime && x.getTime() < startTime + (7 * 24 * 60 * 60 * 1000))
            .length;
    }
}