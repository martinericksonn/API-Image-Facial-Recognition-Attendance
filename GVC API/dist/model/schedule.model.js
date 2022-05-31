"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
class Schedule {
    constructor(body) {
        this.offer_no = body['offer_no'];
        this.subj_no = body['subj_no'];
        this.subj_name = body['subj_name'];
        this.sch_days = body['sch_days'];
        this.sch_time = body['sch_time'];
        this.sy = body['sy'];
        this.term = body['term'];
        this.dept_code = body['dept_code'];
    }
    log() {
        console.log(`${this.offer_no} ${this.subj_no} ${this.subj_no}
       ${this.subj_name} ${this.sch_days} ${this.sch_time} 
       ${this.sy} ${this.term} ${this.dept_code}`);
    }
    toJson() {
        return {
            offer_no: this.offer_no,
            subj_no: this.subj_no,
            subj_name: this.subj_name,
            sch_day: this.sch_days,
            sch_time: this.sch_time,
            sy: this.sy,
            term: this.term,
            dept_code: this.dept_code,
        };
    }
}
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.model.js.map