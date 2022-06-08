export declare class Account {
    private name;
    id: number;
    private department;
    collegeName: string;
    private onLeave;
    private resigned;
    private password;
    constructor(name: string, id: number, department: string, collegeName: string, onLeave: boolean, resigned: boolean, password: string);
    log(): void;
    toJson(): {
        name: string;
        id: number;
        department: string;
        collegeName: string;
        onLeave: boolean;
        resigned: boolean;
        password: string;
    };
}
