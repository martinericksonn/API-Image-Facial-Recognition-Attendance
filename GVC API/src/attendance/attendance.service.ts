import { Injectable } from '@nestjs/common';
import { SystemMessage } from 'src/model/system_message.model';
import { UserService } from 'src/user/user.service';
import { Attendance } from '../model/attendance.model';
import { DatabaseQuery } from '../user.resource/firebase.database';
import { Helper } from '../user.resource/helper';
import { Verification } from '../user.resource/verification';

@Injectable()
export class AttendanceService {
  userService = new UserService();
  systemMessage = new SystemMessage();

  async addAttendance(body: any) {
    try {
      return await this.userService
        .getAccount(body.employeeID.toString())
        .then(async (value: any) => {
          if (value.success) {
            var genID = '1' + Helper.generateID();
            body.attendanceID = parseInt(genID);
            body.name = value.data['name'];
            body.department = value.data['department'];

            Helper.validAttendanceBody(body);

            var newAttendance: Attendance = new Attendance(
              body.attendanceID,
              body.name,
              body.employeeID,
              body.date,
              body.time,
              body.classcode,
              body.department,
              body.remarks,
            );

            return await DatabaseQuery.commitAttendance(newAttendance);
          } else {
            throw this.systemMessage.error('employeeID not found');
          }
        });
      // console.log(Attendance);
      // return await DatabaseQuery.commitAttendance(attendance);
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
      await Verification.verifyAttendanceID(id);
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
