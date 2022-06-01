"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const schedule_controller_1 = require("./schedule.controller");
describe('ScheduleController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [schedule_controller_1.ScheduleController],
        }).compile();
        controller = module.get(schedule_controller_1.ScheduleController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=schedule.controller.spec.js.map