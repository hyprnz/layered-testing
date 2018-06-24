export const oneWeek = (7 * 24 * 60 * 60 * 1000);

export function minDateAsTime(dates: Array<Date>): number {
    return dates.length === 0 ? 0 :
        dates.reduce((prev, curr) => curr.getTime() < prev.getTime() ? curr : prev).getTime()
}

export function withinOneWeekExcludingStart(dates: Array<Date>, startTime: number): Array<Date> {
    return dates
        .filter(x => x.getTime() > startTime && x.getTime() < startTime + oneWeek);
}
