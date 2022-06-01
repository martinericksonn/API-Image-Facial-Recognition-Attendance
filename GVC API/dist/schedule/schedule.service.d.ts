import { SystemMessage } from '../model/system_message.model';
export declare class ScheduleService {
    systemMessage: SystemMessage;
    scheduleWorking(): string;
    addSchedule(body: any): Promise<any>;
    getAllSchedule(): Promise<any>;
    getSchedule(id: string): Promise<any>;
}
