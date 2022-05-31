import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getHello(): string;
    getAccount(): Promise<any>;
    addSchedule(body: any): Promise<any>;
}
