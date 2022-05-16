import 'firebase/auth';
import 'firebase/firestore';
export declare class Attendance {
    private name;
    id: number;
    date: string;
    time: string;
    private classcode;
    private department;

    constructor(name: string, id: number, date: string, time: string, classcode: string, department: string);

    log(): void;
    toJson(): {
        name: string;
        id: number;
        date: string;
        time: string;
        classcode: string;
        department: string;
    };
}
