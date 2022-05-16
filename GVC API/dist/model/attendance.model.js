"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
require("firebase/auth");
require("firebase/firestore");

class Attendance {
    constructor(name, id, date, time, classcode, department) {
        this.name = name;
        this.id= id;
        this.date= date;
        this.time= time;
        this.classcode = classcode; 
        this.department = department;
    }
    log(){
        console.log(`${this.name}:${this.id}:${this.date}:${this.time}:${this.classcode}:${this.department}`);
    }

    toJson(){
        return {
            name:this.name,
            employeeId:this.id,
            date:this.date,
            time:this.time,
            classcode:this.classcode,
            department:this.department
        };
    }
}
exports.Attendance = Attendance;
//# sourceMappingURL=attendance.model.js.map
