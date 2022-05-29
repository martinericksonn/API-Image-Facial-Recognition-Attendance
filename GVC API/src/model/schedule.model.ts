export class Attendance {
  constructor(
    private offer_no,
    private subj_no,
    private subj_name,
    private sch_days,
    private sch_time,
    private sy,
    private term,
    private dept_cod,
  ) {}

  log() {
    console.log(
      `${this.offer_no} ${this.subj_no} ${this.subj_no}
       ${this.subj_name} ${this.sch_days} ${this.sch_time} 
       ${this.sy} ${this.term} ${this.dept_cod}`,
    );
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
