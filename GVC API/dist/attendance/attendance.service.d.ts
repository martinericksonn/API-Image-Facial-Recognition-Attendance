import { SystemMessage } from 'src/model/system_message.model';
import { UserService } from 'src/user/user.service';
export declare class AttendanceService {
    userService: UserService;
    systemMessage: SystemMessage;
    addAttendance(body: any): Promise<any>;
    getAttendance(id: string): Promise<any>;
    deleteAttendance(id: string): Promise<any>;
    getAllAttendances(): Promise<any>;
}
