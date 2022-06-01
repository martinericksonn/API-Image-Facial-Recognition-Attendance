"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const system_message_model_1 = require("../model/system_message.model");
const schedule_model_1 = require("../model/schedule.model");
const firebase_database_1 = require("./schedule.resouce/firebase.database");
let ScheduleService = class ScheduleService {
    constructor() {
        this.systemMessage = new system_message_model_1.SystemMessage();
    }
    scheduleWorking() {
        return 'Hello Schedule!';
    }
    async addSchedule(body) {
        try {
            for (const value of Object.values(body['result'])) {
                var newSchedule = new schedule_model_1.Schedule(value);
                await firebase_database_1.DatabaseQuery.commitScedule(newSchedule);
            }
            return this.systemMessage.success('schedule added to database');
        }
        catch (error) {
            return this.systemMessage.error(error.message);
        }
    }
    async getAllSchedule() {
        try {
            return await firebase_database_1.DatabaseQuery.getAllSchedule();
        }
        catch (error) {
            return this.systemMessage.error(error.message);
        }
    }
    async getSchedule(id) {
        try {
            return await firebase_database_1.DatabaseQuery.getSchedule(id);
        }
        catch (error) {
            return error;
        }
    }
};
ScheduleService = __decorate([
    (0, common_1.Injectable)()
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map