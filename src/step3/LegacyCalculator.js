"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlannedStartMaker_1 = require("./PlannedStartMaker");
class LegacyCalculator {
    constructor(factory = PlannedStartMaker_1.plannedStartFactory) {
        this.factory = factory;
    }
    calculate(dates, minimumCount = 1) {
        return this.factory(dates, minimumCount).make();
    }
}
exports.LegacyCalculator = LegacyCalculator;
