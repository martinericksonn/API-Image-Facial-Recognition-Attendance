import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAccount(id: string): Promise<any>;
    addAccount(body: any): Promise<any>;
    deleteAccount(id: string): Promise<any>;
}
