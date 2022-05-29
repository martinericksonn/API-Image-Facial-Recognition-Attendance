import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { auth } from 'firebase-admin';
import { Helper } from 'src/user.resource/helper';
import { Account } from 'src/model/account.model';
import { DatabaseQuery } from 'src/user.resource/firebase.database';
import { Verification } from 'src/user.resource/verification';
import { Attendance } from 'src/model/attendance.model';

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

  async getAllAttendances() {
    try {
      return await DatabaseQuery.getAllAttendances();
    } catch (error) {
      return error;
    }
  }
}
