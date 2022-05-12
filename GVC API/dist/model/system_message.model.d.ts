export declare class SystemMessage {
    private isSuccess;
    private data;
    private systemMessage;
    custom(data: any): any;
    success(code: number | any): any;
    error(code: number | any): any;
    private toJson;
}
