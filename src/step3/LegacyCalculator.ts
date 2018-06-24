import {PlannedStart} from "../PlannedStart";
import {plannedStartFactory, PlannedStartMaker} from "./PlannedStartMaker";

export class LegacyCalculator {
    constructor(private factory: (dates: Array<Date>, minimumCount: number) => PlannedStartMaker = plannedStartFactory) {
    }

    calculate(dates: Array<Date>, minimumCount = 1): PlannedStart {
        return this.factory(dates, minimumCount).make();
    }
}