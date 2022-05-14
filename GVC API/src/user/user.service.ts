import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { auth } from 'firebase-admin';
import { Helper } from 'src/user.resource/helper';
import { Account } from 'src/model/account.model';
import { DatabaseQuery } from 'src/user.resource/firebase.database';
import { Verification } from 'src/user.resource/verification';

@Injectable()
export class UserService {
  private DB = admin.firestore();
  private AUTH: auth.Auth = admin.auth();

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

      return DatabaseQuery.commit(newAccount);
    } catch (error) {
      return error;
    }
  }

  async getAccount(id: string) {
    try {
      return DatabaseQuery.getUser(id);
    } catch (error) {
      return error;
    }
  }
}
