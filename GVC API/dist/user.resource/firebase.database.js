"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseQuery = void 0;
require("firebase/auth");
require("firebase/firestore");
const account_model_1 = require("../model/account.model");
const system_message_model_1 = require("../model/system_message.model");
const admin = require('firebase-admin');
const systemMessage = new system_message_model_1.SystemMessage();
const accounts = 'accounts';
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
}
exports.DatabaseQuery = DatabaseQuery;
//# sourceMappingURL=firebase.database.js.map