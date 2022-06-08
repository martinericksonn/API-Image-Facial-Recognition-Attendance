import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authLogins(): string;
    authLogin(id: string, pass: string): any;
}
