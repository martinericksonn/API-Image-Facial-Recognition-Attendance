import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getHello(): string;
    setAllSchedule(): Promise<any>;
    setSchedule(id: string): Promise<any>;
    addSchedule(body: any): Promise<any>;
}
