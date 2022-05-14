import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { auth } from 'firebase-admin';
import { Helper } from 'src/user.resource/helper';
import { Account } from 'src/model/account.model';
import { DatabaseQuery } from 'src/user.resource/firebase.database';
import { Verification } from 'src/user.resource/verification';

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
      return await DatabaseQuery.setOnLeave(id, 'onLeave', status);
    } catch (error) {
      return error;
    }
  }
  async setResigned(id: string, status: any) {
    try {
      await Verification.verifyID(id);
      return await DatabaseQuery.setOnLeave(id, 'resigned', status);
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
