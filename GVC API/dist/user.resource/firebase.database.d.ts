import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { Attendance } from '../model/attendance.model';
import { CRUDReturn } from './crud_return.interface';
export declare class DatabaseQuery {
    static commit(account: Account): Promise<CRUDReturn>;
    static getUser(id: string): Promise<any>;
    static hasID(id: string): Promise<boolean | any>;
    static deleteAccount(id: string): Promise<CRUDReturn>;
    static updateValues(id: string, account: Account): Promise<any>;
    static setOnLeave(id: string, status: String): Promise<any>;
    static setOnResigned(id: string, status: String): Promise<any>;
    static getAllAccounts(): Promise<any>;

    //
    static commitAttendance(account: Attendance): Promise<CRUDReturn>;
    static getAttendance(id: string): Promise<any>;
    static deleteAttendance(id: string): Promise<CRUDReturn>;
    static updateAttendance(id: string, account: Attendance): Promise<any>;
    static getAllAttendance(): Promise<any>;
}
