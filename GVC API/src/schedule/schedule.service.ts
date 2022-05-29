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

  async addSchedule(bods: any) {
    try {
      // var schdules : Schedule[];

      // for(var body in bods.entries()){

      // console.log(newSchedule.log());
      for (const value of Object.values(bods['result'])) {
        console.log();
        // for (const property of Object.values(bods['properties'])) {
        //   if (value[property.toString()] != undefined) {
        //     // var newSchedule: Schedule = new Schedule(
        //     //   body.offer_no,
        //     //   body.subj_no,
        //     //   body.subj_name,
        //     //   body.sch_day,
        //     //   body.sch_time,
        //     //   body.sy,
        //     //   body.term,
        //     //   body.dept_cod,
        //     // );

        //     var newSchedule: Schedule = new Schedule(
        //       value[property.toString()],
        //     );
        //     console.log(newSchedule);
        //     // await DatabaseQuery.commitScedule(newSchedule);
        //     // console.log(value[property.toString()]);
        //   }
        // }
        var newSchedule: Schedule = new Schedule(value);
        await DatabaseQuery.commitScedule(newSchedule);
      }
      return this.systemMessage.success('schedule added to database');
    } catch (error) {
      return this.systemMessage.error(error.message);
    }
  }
}
