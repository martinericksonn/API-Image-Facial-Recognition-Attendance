import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAccount(term: string): Promise<{
        success: string;
        data: string;
    }>;
    addAccount(body: any): Promise<any>;
}
