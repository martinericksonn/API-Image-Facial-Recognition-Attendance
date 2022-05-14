import { user } from 'firebase-functions/v1/auth';
import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { SystemMessage } from 'src/model/system_message.model';
import { CRUDReturn } from './crud_return.interface';
// import { SystemMessage, User } from './model/account.model';
// import { SystemMessage, User } from './user.model';

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
        return systemMessage.error(506);
      }
      return userRef.data();
    } catch (error) {
      console.log(error);

      throw systemMessage.error(error);
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
}
