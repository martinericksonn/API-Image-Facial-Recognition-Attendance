export declare class Account {
    private name;
    id: number;
    private department;
    collegeName: string;
    private onLeave;
    private resigned;
    constructor(name: string, id: number, department: string, collegeName: string, onLeave: boolean, resigned: boolean);
    log(): void;
    toJson(): {
        name: string;
        id: number;
        department: string;
        collegeName: string;
        onLeave: boolean;
        resigned: boolean;
    };
}
