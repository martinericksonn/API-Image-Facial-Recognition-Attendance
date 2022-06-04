export declare class Attendance {
    attendanceID: number;
    private name;
    private employeeID;
    private date;
    time: string;
    private classcode;
    private department;
    private remarks;
    constructor(attendanceID: number, name: string, employeeID: number, date: string, time: string, classcode: number, department: string, remarks: string);
    log(): void;
    toJson(): {
        attendanceID: number;
        name: string;
        employeeID: number;
        date: string;
        time: string;
        classcode: number;
        department: string;
        remarks: string;
    };
}
