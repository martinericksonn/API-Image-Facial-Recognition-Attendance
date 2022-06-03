"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
class Attendance {
    constructor(name, id, date, time, classcode, department, remark) {
        this.name = name;
        this.id = id;
        this.date = date;
        this.time = time;
        this.classcode = classcode;
        this.department = department;
        this.remark = remark;
    }
    log() {
        console.log(`${this.name} ${this.id} ${this.date} ${this.time} ${this.classcode} ${this.department} ${this.remark}`);
    }
    toJson() {
        return {
            name: this.name,
            employeeId: this.id,
            date: this.date,
            time: this.time,
            classCode: this.classode,
            department: this.department,
            remark: this.remark

        };
    }
}
exports.Attendance = Attendance;
//# sourceMappingURL=attendance.model.js.map