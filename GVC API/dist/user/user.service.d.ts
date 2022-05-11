export declare class UserService {
    private DB;
    private AUTH;
    constructor();
    addAccount(body: any): Promise<{
        success: string;
        data: string;
    }>;
    getAccount(id: string): Promise<{
        success: string;
        data: string;
    }>;
}
