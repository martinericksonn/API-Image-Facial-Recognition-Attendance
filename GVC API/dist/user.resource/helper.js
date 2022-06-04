"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const system_message_model_1 = require("../model/system_message.model");
const account_model_1 = require("../model/account.model");
const attendance_model_1 = require("../model/attendance.model");
class Helper {
    static generateID() {
        var datum = Date.parse(new Date().toString());
        return datum / 1000;
    }
    static validAccountBody(body) {
        var systemMessage = new system_message_model_1.SystemMessage();
        var keys = Helper.describeClassUser();
        var types = new Map();
        types.set('name', typeof '');
        types.set('id', typeof 0);
        types.set('department', typeof '');
        types.set('collegeName', typeof '');
        types.set('onLeave', typeof true);
        types.set('resigned', typeof true);
        for (const key of Object.keys(body)) {
            if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
                throw systemMessage.error(502);
            }
            if (typeof body[key] != types.get(key)) {
                console.log(body[key]);
                console.log(types.get(key));
                throw this.systemMessage.custom({
                    success: false,
                    data: `${key} is not a valid attribute`,
                });
            }
        }
    }
    static describeClassUser() {
        let a = new account_model_1.Account('', 123, '', '', false, false);
        let array = Object.getOwnPropertyNames(a);
        return array;
    }
    static validAttendanceBody(body) {
        console.log(body);
        var systemMessage = new system_message_model_1.SystemMessage();
        var keys = Helper.describeClassAttendance();
        var types = new Map();
        types.set('attendanceID', typeof 0);
        types.set('name', typeof '');
        types.set('employeeID', typeof 0);
        types.set('date', typeof '');
        types.set('time', typeof '');
        types.set('classcode', typeof 0);
        types.set('department', typeof '');
        types.set('remarks', typeof '');
        for (const key of Object.keys(body)) {
            if (typeof body[key] != types.get(key)) {
                console.log(body[key]);
                console.log(types.get(key));
                throw this.systemMessage.custom({
                    success: false,
                    data: `${key} is not a valid attribute`,
                });
            }
        }
    }
    static describeClassAttendance() {
        let a = new attendance_model_1.Attendance(123, '', 123, '', '', 123, '', '');
        let array = Object.getOwnPropertyNames(a);
        return array;
    }
}
exports.Helper = Helper;
Helper.systemMessage = new system_message_model_1.SystemMessage();
//# sourceMappingURL=helper.js.map