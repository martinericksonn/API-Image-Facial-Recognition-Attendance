import { Injectable } from '@nestjs/common';
import { SystemMessage } from '../model/system_message.model';

import { Schedule } from '../model/schedule.model';
import { DatabaseQuery } from './schedule.resouce/firebase.database';

@Injectable()
export class ScheduleService {
  systemMessage = new SystemMessage();
  scheduleWorking(): string {
    return 'Hello Schedule!';
  }

  async addSchedule(body: any) {
    try {
      for (const value of Object.values(body['result'])) {
        var newSchedule: Schedule = new Schedule(value);
        await DatabaseQuery.commitScedule(newSchedule);
      }
      return this.systemMessage.success('schedule added to database');
    } catch (error) {
      return this.systemMessage.error(error.message);
    }
  }

  async getSchedule() {
    try {
      return await DatabaseQuery.getAllSchedule();
    } catch (error) {
      return this.systemMessage.error(error.message);
    }
  }
}
