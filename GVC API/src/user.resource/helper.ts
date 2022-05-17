// import { User, SystemMessage } from './user.model';
import { v4 as uid } from 'uuid';
// import { DatabaseQuery } from './firebase.database';
// import { Message } from 'src/chat.resource/chat.interface';
import { SystemMessage } from 'src/model/system_message.model';
import { Account } from 'src/model/account.model';
import { Attendance } from 'src/model/attendance.model';
// import { SystemMessage, User } from '../model/account.model';

export class Helper {
  private static systemMessage = new SystemMessage();

  static generateID(): number {
    var datum = Date.parse(new Date().toString());
    return datum / 1000;
  }

  static validAccountBody(body: any) {
    var systemMessage = new SystemMessage();

    var keys: Array<string> = Helper.describeClassUser();
    var types: Map<string, string> = new Map<string, string>();

    types.set('name', typeof '');
    types.set('id', typeof 0);
    types.set('department', typeof '');
    types.set('collegeName', typeof '');
    types.set('onLeave', typeof true);
    types.set('resigned', typeof true);

    for (const key of Object.keys(body)) {
      if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
        throw systemMessage.error(502);
      }
      if (typeof body[key] != types.get(key)) {
        console.log(body[key]);
        console.log(types.get(key));
        throw this.systemMessage.custom({
          success: false,
          data: `${key} is not a valid attribute`,
        });
      }
    }
  }

  static describeClassUser(): Array<any> {
    let a = new Account('', 123, '', '', false, false);
    let array = Object.getOwnPropertyNames(a);

    return array;
  }

  //
  static validAttendanceBody(body: any) {
    var systemMessage = new SystemMessage();

    var keys: Array<string> = Helper.describeClassUser2();
    var types: Map<string, string> = new Map<string, string>();

    types.set('name', typeof '');
    types.set('id', typeof 0);
    types.set('date', typeof '');
    types.set('time', typeof '');
    types.set('classcode', typeof '');
    types.set('department', typeof '');

    for (const key of Object.keys(body)) {
      if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
        throw systemMessage.error(502);
      }
      if (typeof body[key] != types.get(key)) {
        console.log(body[key]);
        console.log(types.get(key));
        throw this.systemMessage.custom({
          success: false,
          data: `${key} is not a valid attribute`,
        });
      }
    }
  }

  static describeClassUser2(): Array<any> {
    let a = new Attendance('', 123, '', '', '','');
    let array = Object.getOwnPropertyNames(a);

    return array;
  }
}
