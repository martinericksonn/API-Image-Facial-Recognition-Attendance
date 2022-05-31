"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const attendance_model_1 = require("../model/attendance.model");
const firebase_database_1 = require("../user.resource/firebase.database");
const helper_1 = require("../user.resource/helper");
const verification_1 = require("../user.resource/verification");
let AttendanceService = class AttendanceService {
    async addAttendance(body) {
        try {
            body.id = helper_1.Helper.generateID();
            helper_1.Helper.validAttendanceBody(body);
            var newAccount = new attendance_model_1.Attendance(body.name, body.id, body.date, body.time, body.classcode, body.department);
            return await firebase_database_1.DatabaseQuery.commitAttendance(newAccount);
        }
        catch (error) {
            return error;
        }
    }
    async getAttendance(id) {
        try {
            return await firebase_database_1.DatabaseQuery.getAttendance(id);
        }
        catch (error) {
            return error;
        }
    }
    async deleteAttendance(id) {
        try {
            await verification_1.Verification.verifyemployeeID(id);
            return await firebase_database_1.DatabaseQuery.deleteAttendance(id);
        }
        catch (error) {
            return error;
        }
    }
    async getAllAttendances() {
        try {
            return await firebase_database_1.DatabaseQuery.getAllAttendances();
        }
        catch (error) {
            return error;
        }
    }
};
AttendanceService = __decorate([
    (0, common_1.Injectable)()
], AttendanceService);
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map