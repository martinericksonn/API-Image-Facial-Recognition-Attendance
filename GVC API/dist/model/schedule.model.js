"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
class Attendance {
    constructor(offer_no, subj_no, subj_name, sch_days, sch_time, sy, term, dept_cod) {
        this.offer_no = offer_no;
        this.subj_no = subj_no;
        this.subj_name = subj_name;
        this.sch_days = sch_days;
        this.sch_time = sch_time;
        this.sy = sy;
        this.term = term;
        this.dept_cod = dept_cod;
    }
    log() {
        console.log(`${this.offer_no} ${this.subj_no} ${this.subj_no}
       ${this.subj_name} ${this.sch_days} ${this.sch_time} 
       ${this.sy} ${this.term} ${this.dept_cod}`);
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
            dept_cod: this.dept_cod,
        };
    }
}
exports.Attendance = Attendance;
//# sourceMappingURL=schedule.model.js.map