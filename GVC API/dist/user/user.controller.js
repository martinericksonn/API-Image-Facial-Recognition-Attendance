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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getHello() {
        return this.userService.getAllAccounts();
    }
    getAllAccount() {
        return this.userService.getAllAccounts();
    }
    getAccount(id) {
        return this.userService.getAccount(id);
    }
    addAccount(body) {
        return this.userService.addAccount(body);
    }
    setOnLeave(id, status) {
        return this.userService.setOnLeave(id, status);
    }
    setResigned(id, status) {
        return this.userService.setResigned(id, status);
    }
    deleteAccount(id) {
        return this.userService.deleteAccount(id);
    }
    getAttendance(id) {
        return this.userService.getAttendance(id);
    }
    getAllAttendances() {
        return this.userService.getAllAttendances();
    }
    addAttendance(body) {
        return this.userService.addAttendance(body);
    }
    deleteAttendance(id) {
        return this.userService.deleteAttendance(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/get/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllAccount", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addAccount", null);
__decorate([
    (0, common_1.Patch)('/setOnLeave/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setOnLeave", null);
__decorate([
    (0, common_1.Patch)('/setResigned/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "setResigned", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Get)('/getAttendance/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAttendance", null);
__decorate([
    (0, common_1.Get)('/getAllAttendances'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllAttendances", null);
__decorate([
    (0, common_1.Post)('/addAttendance'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addAttendance", null);
__decorate([
    (0, common_1.Delete)('/deleteAttendance/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteAttendance", null);
UserController = __decorate([
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map