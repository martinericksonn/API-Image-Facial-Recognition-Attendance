import { SystemMessage } from '../model/system_message.model';
import { Account } from '../model/account.model';
import { Attendance } from '../model/attendance.model';

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

  ///
  static validAttendanceBody(body: any) {
    console.log(body);
    var systemMessage = new SystemMessage();

    var keys: Array<string> = Helper.describeClassAttendance();
    var types: Map<string, string> = new Map<string, string>();

    types.set('attendanceID', typeof 0);
    types.set('name', typeof '');
    types.set('employeeID', typeof 0);
    types.set('date', typeof '');
    types.set('time', typeof '');
    types.set('classcode', typeof 0);
    types.set('department', typeof '');
    types.set('remarks', typeof '');

    for (const key of Object.keys(body)) {
      // if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
      //   throw systemMessage.error(502);
      // }
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

  static describeClassAttendance(): Array<any> {
    let a = new Attendance(123, '', 123, '', '', 123, '', '');
    let array = Object.getOwnPropertyNames(a);

    return array;
  }
}
