import { Injectable } from '@nestjs/common';
import { Attendance } from '../model/attendance.model';
import { DatabaseQuery } from '../user.resource/firebase.database';
import { Helper } from '../user.resource/helper';
import { Verification } from '../user.resource/verification';

@Injectable()
export class AttendanceService {
  async addAttendance(body: any) {
    try {
      body.id = Helper.generateID();
      Helper.validAttendanceBody(body);

      var newAccount: Attendance = new Attendance(
        body.name,
        body.id,
        body.date,
        body.time,
        body.classcode,
        body.department,
      );

      return await DatabaseQuery.commitAttendance(newAccount);
    } catch (error) {
      return error;
    }
  }

  async getAttendance(id: string) {
    try {
      return await DatabaseQuery.getAttendance(id);
    } catch (error) {
      return error;
    }
  }

  async deleteAttendance(id: string) {
    try {
      await Verification.verifyemployeeID(id);
      return await DatabaseQuery.deleteAttendance(id);
    } catch (error) {
      return error;
    }
  }

  async getAllAttendances() {
    try {
      return await DatabaseQuery.getAllAttendances();
    } catch (error) {
      return error;
    }
  }
}
