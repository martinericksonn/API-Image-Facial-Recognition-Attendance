"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseQuery = void 0;
require("firebase/auth");
require("firebase/firestore");
const schedule_model_1 = require("../../model/schedule.model");
const system_message_model_1 = require("../../model/system_message.model");
const admin = require('firebase-admin');
const systemMessage = new system_message_model_1.SystemMessage();
class DatabaseQuery {
    static async commitScedule(subject) {
        try {
            var db = admin.firestore();
            await db
                .collection('subjects')
                .doc(subject['offer_no'])
                .set(subject.toJson());
            console.log(subject.toJson());
            return systemMessage.success(subject.toJson());
        }
        catch (error) {
            console.log(error);
            return systemMessage.error(error);
        }
    }
}
exports.DatabaseQuery = DatabaseQuery;
//# sourceMappingURL=firebase.database.js.map