import { SystemMessage } from '../model/system_message.model';
export declare class ScheduleService {
    systemMessage: SystemMessage;
    scheduleWorking(): string;
    addSchedule(body: any): Promise<any>;
    getSchedule(): Promise<any>;
}
