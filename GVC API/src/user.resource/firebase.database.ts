import 'firebase/auth';
import 'firebase/firestore';
import { CRUDReturn } from 'src/model/crud_return.interface';
import { Account } from '../model/account.model';
import { Attendance } from '../model/attendance.model';
import { SystemMessage } from '../model/system_message.model';

const admin = require('firebase-admin');
const systemMessage = new SystemMessage();
const accounts = 'accounts';
const attendance = 'attendance';

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

      return systemMessage.success(userRef.data());
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

  static async setOnLeave(id: string, status: String) {
    try {
      var db = admin.firestore();
      var flag: Boolean;

      if (status.toLowerCase() == 'true') flag = true;
      else if (status.toLowerCase() == 'false') flag = false;
      else throw systemMessage.error('invalid Boolean');

      await db.collection(accounts).doc(id).update({ onLeave: flag });
      return systemMessage.success(`${id} onLeave to ${flag}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async setOnResigned(id: string, status: String) {
    try {
      var db = admin.firestore();
      var flag: Boolean;

      if (status.toLowerCase() == 'true') flag = true;
      else if (status.toLowerCase() == 'false') flag = false;
      else throw systemMessage.error('invalid Boolean');

      await db.collection(accounts).doc(id).update({ resigned: flag });

      return systemMessage.success(`${id} resigned to ${flag}`);
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

  //
  static async commitAttendance(attendances: Attendance): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db
        .collection(attendance)
        .doc(attendances.id.toString())
        .set(attendances.toJson());
      console.log('not error');
      return systemMessage.success(attendances.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async getAttendance(id: string) {
    try {
      var db = admin.firestore();
      var userRef = await db.collection(attendance).doc(id).get();
      if (!userRef.exists) {
        throw systemMessage.error(506);
      }

      return systemMessage.success(userRef.data());
    } catch (error) {
      return error;
    }
  }

  static async hasID2(id: string): Promise<boolean | any> {
    try {
      var db = admin.firestore();
      const userRef = db.collection(attendance).doc(id);
      var doc = await userRef.get();

      return !doc.exists;
    } catch (error) {
      throw systemMessage.error(error);
    }
  }

  static async deleteAttendance(id: string): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db.collection(attendance).doc(id).delete();

      return systemMessage.success(103);
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async updateAttendance(id: string, attendances: Attendance) {
    try {
      var db = admin.firestore();
      await db.collection(attendance).doc(id).update(attendances);

      var newUser = await db.collection(attendance).doc(id).get();
      return systemMessage.success(newUser.data());
    } catch (error) {
      console.log(error);
      throw systemMessage.error(error);
    }
  }

  static async getAllAttendances() {
    try {
      var db = admin.firestore();
      var userRef = await db.collection(attendance).get();

      var populatedData = [];

      userRef.forEach((doc) => {
        var data = doc.data();

        var user = new Attendance(
          data.name,
          data.id,
          data.date,
          data.time,
          data.classcode,
          data.department,
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
