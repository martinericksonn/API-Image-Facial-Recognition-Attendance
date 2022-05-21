import { Injectable } from '@nestjs/common';
import { Account } from '../model/account.model';
import { Attendance } from '../model/attendance.model';
import { DatabaseQuery } from '../user.resource/firebase.database';
import { Helper } from '../user.resource/helper';
import { Verification } from '../user.resource/verification';

@Injectable()
export class UserService {
  async addAccount(body: any) {
    try {
      body.id = Helper.generateID();
      Helper.validAccountBody(body);

      var newAccount: Account = new Account(
        body.name,
        body.id,
        body.department,
        body.collegeName,
        body.onLeave,
        body.resigned,
      );

      return await DatabaseQuery.commit(newAccount);
    } catch (error) {
      return error;
    }
  }

  async getAccount(id: string) {
    try {
      return await DatabaseQuery.getUser(id);
    } catch (error) {
      return error;
    }
  }

  async deleteAccount(id: string) {
    try {
      await Verification.verifyID(id);
      return await DatabaseQuery.deleteAccount(id);
    } catch (error) {
      return error;
    }
  }

  async setOnLeave(id: string, status: any) {
    try {
      await Verification.verifyID(id);
      return await DatabaseQuery.setOnLeave(id, status);
    } catch (error) {
      return error;
    }
  }
  async setResigned(id: string, status: any) {
    try {
      await Verification.verifyID(id);
      return await DatabaseQuery.setOnResigned(id, status);
    } catch (error) {
      return error;
    }
  }
  async getAllAccounts() {
    try {
      return await DatabaseQuery.getAllAccounts();
    } catch (error) {
      return error;
    }
  }

  //
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

  async getAllAttendance() {
    try {
      return await DatabaseQuery.getAllAttendances();
    } catch (error) {
      return error;
    }
  }
}
