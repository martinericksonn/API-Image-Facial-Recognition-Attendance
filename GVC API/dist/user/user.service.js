"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const helper_1 = require("../user.resource/helper");
const account_model_1 = require("../model/account.model");
let UserService = class UserService {
    constructor() {
        this.DB = admin.firestore();
        this.AUTH = admin.auth();
    }
    async addAccount(body) {
        try {
            helper_1.Helper.validAccountBody(body);
            var newAccount = new account_model_1.Account(body.name, body.id, body.department, body.collegeName, body.onLeave, body.resigned);
            newAccount.log();
        }
        catch (error) {
            return error;
        }
    }
    async getAccount(id) {
        console.log(id);
        return {
            success: 'yes',
            data: 'any',
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map