"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
class Attendance {
    constructor(attendanceID, name, employeeID, date, time, classcode, department, remarks) {
        this.attendanceID = attendanceID;
        this.name = name;
        this.employeeID = employeeID;
        this.date = date;
        this.time = time;
        this.classcode = classcode;
        this.department = department;
        this.remarks = remarks;
    }
    log() {
        console.log(`${this.name} ${this.employeeID} ${this.date} ${this.time} ${this.classcode} ${this.department} ${this.remarks}`);
    }
    toJson() {
        return {
            attendanceID: this.attendanceID,
            name: this.name,
            employeeID: this.employeeID,
            date: this.date,
            time: this.time,
            classcode: this.classcode,
            department: this.department,
            remarks: this.remarks,
        };
    }
}
exports.Attendance = Attendance;
//# sourceMappingURL=attendance.model.js.map