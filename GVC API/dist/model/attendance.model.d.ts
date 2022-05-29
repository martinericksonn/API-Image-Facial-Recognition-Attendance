export declare class Attendance {
    private name;
    id: number;
    private date;
    time: string;
    private classcode;
    private department;
    constructor(name: string, id: number, date: string, time: string, classcode: string, department: string);
    log(): void;
    toJson(): {
        name: string;
        employeeId: number;
        date: string;
        time: string;
        classCode: string;
        department: string;
    };
}
