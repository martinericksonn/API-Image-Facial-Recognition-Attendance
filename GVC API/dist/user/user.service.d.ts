export declare class UserService {
    addAccount(body: any): Promise<any>;
    getAccount(id: string): Promise<any>;
    deleteAccount(id: string): Promise<any>;
    setOnLeave(id: string, status: any): Promise<any>;
    setResigned(id: string, status: any): Promise<any>;
    getAllAccounts(): Promise<any>;
}
