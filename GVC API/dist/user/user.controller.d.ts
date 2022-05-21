import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAccount(id: string): Promise<any>;
    getAllAccount(): Promise<any>;
    addAccount(body: any): Promise<any>;
    setOnLeave(id: string, status: any): Promise<any>;
    setResigned(id: string, status: any): Promise<any>;
    deleteAccount(id: string): Promise<any>;
    getAttendance(id: string): Promise<any>;
    getAllAttendance(): Promise<any>;
    addAttendance(body: any): Promise<any>;
    deleteAttendance(id: string): Promise<any>;
}
