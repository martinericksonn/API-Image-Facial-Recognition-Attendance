"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const helper_1 = require("../user.resource/helper");
const account_model_1 = require("../model/account.model");
const firebase_database_1 = require("../user.resource/firebase.database");
const verification_1 = require("../user.resource/verification");
const attendance_model_1 = require("../model/attendance.model");
let UserService = class UserService {
    async addAccount(body) {
        try {
            body.id = helper_1.Helper.genID();
            body.password = helper_1.Helper.genPassword();
            helper_1.Helper.validAccountBody(body);
            var newAccount = new account_model_1.Account(body.name, body.id, body.department, body.collegeName, body.onLeave, body.resigned, body.password);
            return await firebase_database_1.DatabaseQuery.commit(newAccount);
        }
        catch (error) {
            return error;
        }
    }
    async getAccount(id) {
        try {
            return await firebase_database_1.DatabaseQuery.getUser(id);
        }
        catch (error) {
            return error;
        }
    }
    async deleteAccount(id) {
        try {
            await verification_1.Verification.verifyAccountID(id);
            return await firebase_database_1.DatabaseQuery.deleteAccount(id);
        }
        catch (error) {
            return error;
        }
    }
    async setOnLeave(id, status) {
        try {
            await verification_1.Verification.verifyAccountID(id);
            return await firebase_database_1.DatabaseQuery.setOnLeave(id, status);
        }
        catch (error) {
            return error;
        }
    }
    async setResigned(id, status) {
        try {
            await verification_1.Verification.verifyAccountID(id);
            return await firebase_database_1.DatabaseQuery.setOnResigned(id, status);
        }
        catch (error) {
            return error;
        }
    }
    async getAllAccounts() {
        try {
            return await firebase_database_1.DatabaseQuery.getAllAccounts();
        }
        catch (error) {
            return error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map