import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getHello(): string;
    getAccount(): string;
    addSchedule(body: any): Promise<any>;
}
