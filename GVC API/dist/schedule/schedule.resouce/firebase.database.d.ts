import 'firebase/auth';
import 'firebase/firestore';
import { Schedule } from '../../model/schedule.model';
import { CRUDReturn } from '../../model/crud_return.interface';
export declare class DatabaseQuery {
    static commitScedule(subject: Schedule): Promise<CRUDReturn>;
    static getAllSchedule(): Promise<CRUDReturn>;
    static getSchedule(id: string): Promise<CRUDReturn>;
}
