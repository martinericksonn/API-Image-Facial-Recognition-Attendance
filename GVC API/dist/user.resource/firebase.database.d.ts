import 'firebase/auth';
import 'firebase/firestore';
import { CRUDReturn } from '../model/crud_return.interface';
import { Account } from '../model/account.model';
import { Attendance } from '../model/attendance.model';
export declare class DatabaseQuery {
    static commit(account: Account): Promise<CRUDReturn>;
    static getUser(id: string): Promise<any>;
    static hasID(id: string): Promise<boolean | any>;
    static deleteAccount(id: string): Promise<CRUDReturn>;
    static updateValues(id: string, account: Account): Promise<any>;
    static setOnLeave(id: string, status: String): Promise<any>;
    static setOnResigned(id: string, status: String): Promise<any>;
    static getAllAccounts(): Promise<any>;
    static commitAttendance(attendances: Attendance): Promise<CRUDReturn>;
    static getAttendance(id: string): Promise<any>;
    static login(id: string, password: string): Promise<any>;
    static getAttendanceOfAccount(id: string): Promise<any>;
    static hasID2(id: string): Promise<boolean | any>;
    static deleteAttendance(id: string): Promise<CRUDReturn>;
    static updateAttendance(id: string, attendances: Attendance): Promise<any>;
    static getAllAttendances(): Promise<any>;
}
