import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAllAttendances(): Promise<any>;
    getAttendance(id: string): Promise<any>;
    addAttendance(body: any): Promise<any>;
    deleteAttendance(id: string): Promise<any>;
}
