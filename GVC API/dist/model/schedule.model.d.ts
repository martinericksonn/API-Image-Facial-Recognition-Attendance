export declare class Schedule {
    private offer_no;
    private subj_no;
    private subj_name;
    private sch_days;
    private sch_time;
    private sy;
    private term;
    private fac_id;
    constructor(body: any);
    log(): void;
    toJson(): {
        offer_no: any;
        subj_no: any;
        subj_name: any;
        sch_days: any;
        sch_time: any;
        sy: any;
        term: any;
        fac_id: any;
    };
}
