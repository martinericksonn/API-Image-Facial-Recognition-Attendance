import 'firebase/auth';
import 'firebase/firestore';
export declare class User {
    private name;
    id: number;
    date: string;
    time: string;
    private classcode;
    private department;

    constructor(user?: any, age?: number, email?: string, id?: string);
    log(): void;
    toJson(): {
        name: string;
        id: number;
        date: string;
        time: string;
        classcode: string;
        department: string;
    };
    toJsonPass(): {
        id: string;
        name: string;
    };
}
export declare class SystemMessage {
    private isSuccess;
    private data;
    private systemMessage;
    custom(data: any): any;
    success(code: number | any): any;
    error(code: number | any): any;
    private toJson;
}
