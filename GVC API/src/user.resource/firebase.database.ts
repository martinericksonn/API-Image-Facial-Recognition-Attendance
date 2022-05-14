import { user } from 'firebase-functions/v1/auth';
import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { SystemMessage } from 'src/model/system_message.model';
import { CRUDReturn } from './crud_return.interface';

const admin = require('firebase-admin');
const systemMessage = new SystemMessage();
const accounts = 'accounts';

export class DatabaseQuery {
  static async commit(account: Account): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db
        .collection(accounts)
        .doc(account.id.toString())
        .set(account.toJson());
      console.log('not error');
      return systemMessage.success(account.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async getUser(id: string) {
    try {
      var db = admin.firestore();
      var userRef = await db.collection(accounts).doc(id).get();
      if (!userRef.exists) {
        throw systemMessage.error(506);
      }

      return userRef.data();
    } catch (error) {
      return error;
    }
  }

  static async hasID(id: string): Promise<boolean | any> {
    try {
      var db = admin.firestore();
      const userRef = db.collection(accounts).doc(id);
      var doc = await userRef.get();

      return !doc.exists;
    } catch (error) {
      throw systemMessage.error(error);
    }
  }

  static async deleteAccount(id: string): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db.collection(accounts).doc(id).delete();

      return systemMessage.success(103);
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async updateValues(id: string, account: Account) {
    try {
      var db = admin.firestore();
      await db.collection(accounts).doc(id).update(account);

      var newUser = await db.collection(accounts).doc(id).get();
      return systemMessage.success(newUser.data());
    } catch (error) {
      console.log(error);
      throw systemMessage.error(error);
    }
  }
  static async setOnLeave(id: string, key: String, status: String) {
    try {
      var db = admin.firestore();
      var flag: Boolean;

      if (status.toLowerCase() == 'true') flag = true;
      else if (status.toLowerCase() == 'false') flag = false;
      else throw systemMessage.error('invalid Boolean');

      await db.collection(accounts).doc(id).update({ key: flag });
      return systemMessage.success(`${id} updated ${key} to ${flag}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getAllAccounts() {
    try {
      var db = admin.firestore();
      var userRef = await db.collection(accounts).get();

      var populatedData = [];
      userRef.forEach((doc) => {
        var data = doc.data();

        var user = new Account(
          data.name,
          data.id,
          data.department,
          data.collegeName,
          data.onLeave,
          data.resigned,
        );
        populatedData.push(user.toJson());
      });
      return systemMessage.success(populatedData);
    } catch (error) {
      console.log(error);
      throw systemMessage.error(error);
    }
  }
}
