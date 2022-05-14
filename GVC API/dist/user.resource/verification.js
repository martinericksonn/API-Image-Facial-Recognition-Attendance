"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification = void 0;
const system_message_model_1 = require("../model/system_message.model");
const firebase_database_1 = require("./firebase.database");
class Verification {
    static async verifyID(id) {
        if (await firebase_database_1.DatabaseQuery.hasID(id)) {
            throw this.systemMessage.error(506);
        }
    }
}
exports.Verification = Verification;
Verification.systemMessage = new system_message_model_1.SystemMessage();
//# sourceMappingURL=verification.js.map