"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseQuery = void 0;
require("firebase/auth");
require("firebase/firestore");
const account_model_1 = require("../model/account.model");
const attendance_model_2 = require("../model/attendance.model");
const system_message_model_1 = require("../model/system_message.model");
const admin = require('firebase-admin');
const systemMessage = new system_message_model_1.SystemMessage();
const accounts = 'accounts';
const attendance = 'attendance';
class DatabaseQuery {
    static async commit(account) {
        try {
            var db = admin.firestore();
            await db
                .collection(accounts)
                .doc(account.id.toString())
                .set(account.toJson());
            console.log('not error');
            return systemMessage.success(account.toJson());
        }
        catch (error) {
            console.log(error);
            return systemMessage.error(error);
        }
    }
    static async getUser(id) {
        try {
            var db = admin.firestore();
            var userRef = await db.collection(accounts).doc(id).get();
            if (!userRef.exists) {
                throw systemMessage.error(506);
            }
            return userRef.data();
        }
        catch (error) {
            return error;
        }
    }
    static async hasID(id) {
        try {
            var db = admin.firestore();
            const userRef = db.collection(accounts).doc(id);
            var doc = await userRef.get();
            return !doc.exists;
        }
        catch (error) {
            throw systemMessage.error(error);
        }
    }
    static async deleteAccount(id) {
        try {
            var db = admin.firestore();
            await db.collection(accounts).doc(id).delete();
            return systemMessage.success(103);
        }
        catch (error) {
            console.log(error);
            return systemMessage.error(error);
        }
    }
    static async updateValues(id, account) {
        try {
            var db = admin.firestore();
            await db.collection(accounts).doc(id).update(account);
            var newUser = await db.collection(accounts).doc(id).get();
            return systemMessage.success(newUser.data());
        }
        catch (error) {
            console.log(error);
            throw systemMessage.error(error);
        }
    }
    static async setOnLeave(id, key, status) {
        try {
            var db = admin.firestore();
            var flag;
            if (status.toLowerCase() == 'true')
                flag = true;
            else if (status.toLowerCase() == 'false')
                flag = false;
            else
                throw systemMessage.error('invalid Boolean');
            await db.collection(accounts).doc(id).update({ key: flag });
            return systemMessage.success(`${id} updated ${key} to ${flag}`);
        }
        catch (error) {
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
                var user = new account_model_1.Account(data.name, data.id, data.department, data.collegeName, data.onLeave, data.resigned);
                populatedData.push(user.toJson());
            });
            return systemMessage.success(populatedData);
        }
        catch (error) {
            console.log(error);
            throw systemMessage.error(error);
        }
    }

    //
    static async commitAttendance(attendance) {
        try {
            var db = admin.firestore();
            await db
                .collection(attendance)
                .doc(attendance.id.toString())
                .set(attendance.toJson());
            console.log('not error');
            return systemMessage.success(attendance.toJson());
        }
        catch (error) {
            console.log(error);
            return systemMessage.error(error);
        }
    }

    static async getAttendance(id) {
        try {
            var db = admin.firestore();
            var userRef = await db.collection(attendance).doc(id).get();
            if (!userRef.exists) {
                throw systemMessage.error(506);
            }
            return userRef.data();
        }
        catch (error) {
            return error;
        }
    }

    static async getAllAttendance() {
        try {
            var db = admin.firestore();
            var userRef = await db.collection(attendance).get();
            var populatedData = [];
            userRef.forEach((doc) => {
                var data = doc.data();
                var user = new attendance_model_2.Attendance(data.name, data.id, data.date, data.time, data.classcode, data.department);
                populatedData.push(user.toJson());
            });
            return systemMessage.success(populatedData);
        }
        catch (error) {
            console.log(error);
            throw systemMessage.error(error);
        }
    }

    static async deleteAttendance(id) {
        try {
            var db = admin.firestore();
            await db.collection(attendance).doc(id).delete();
            return systemMessage.success(103);
        }
        catch (error) {
            console.log(error);
            return systemMessage.error(error);
        }
    }
}
exports.DatabaseQuery = DatabaseQuery;
//# sourceMappingURL=firebase.database.js.map