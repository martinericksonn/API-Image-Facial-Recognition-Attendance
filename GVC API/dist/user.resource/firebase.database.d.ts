import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { CRUDReturn } from './crud_return.interface';
export declare class DatabaseQuery {
    static commit(account: Account): Promise<CRUDReturn>;
    static getUser(id: string): Promise<any>;
    static hasID(id: string): Promise<boolean | any>;
    static deleteAccount(id: string): Promise<CRUDReturn>;
}
