import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAccount(term: string): Promise<any>;
    addAccount(body: any): Promise<any>;
}
