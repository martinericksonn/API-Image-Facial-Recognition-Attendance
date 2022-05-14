import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { CRUDReturn } from './crud_return.interface';
export declare class DatabaseQuery {
    static commit(account: Account): Promise<CRUDReturn>;
    static getUser(id: string): Promise<any>;
    static hasID(id: string): Promise<boolean | any>;
    static deleteAccount(id: string): Promise<CRUDReturn>;
    static updateValues(id: string, account: Account): Promise<any>;
    static setOnLeave(id: string, key: String, status: String): Promise<any>;
    static getAllAccounts(): Promise<any>;
}
