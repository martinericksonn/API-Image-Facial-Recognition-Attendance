import { Injectable } from '@nestjs/common';
import { Helper } from '../user.resource/helper';
import { Account } from '../model/account.model';
import { DatabaseQuery } from '../user.resource/firebase.database';
import { Verification } from '../user.resource/verification';
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
      await Verification.verifyAccountID(id);
      return await DatabaseQuery.deleteAccount(id);
    } catch (error) {
      return error;
    }
  }

  async setOnLeave(id: string, status: any) {
    try {
      await Verification.verifyAccountID(id);
      return await DatabaseQuery.setOnLeave(id, status);
    } catch (error) {
      return error;
    }
  }
  async setResigned(id: string, status: any) {
    try {
      await Verification.verifyAccountID(id);
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
}
