import 'firebase/auth';
import 'firebase/firestore';
export declare class User {
    private name;
    id: string;
    private department;
    collegeName: string;
    private onLeave;
    private resigned;
    constructor(user?: any, age?: number, email?: string, id?: string);
    log(): void;
    toJson(): {
        name: string;
        id: string;
        department: number;
        collegeName: string;
        onLeave: boolean;
        resigned: boolean;
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
