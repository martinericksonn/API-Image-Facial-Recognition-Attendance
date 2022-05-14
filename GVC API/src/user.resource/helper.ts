// import { User, SystemMessage } from './user.model';
import { v4 as uid } from 'uuid';
// import { DatabaseQuery } from './firebase.database';
// import { Message } from 'src/chat.resource/chat.interface';
import { SystemMessage } from 'src/model/system_message.model';
import { Account } from 'src/model/account.model';
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
  //for reference
  //------------------------------------------------------------------------------------------
  //returns an array of attributes as defined in the class

  // static generateUID(): string {
  //   return uid().toString().replace(/-/g, '').substring(0, 27);
  // }

  // //removes an item matching the value from the array
  // static removeItemOnce(arr: Array<any>, value: any): Array<any> {
  //   var index = arr.indexOf(value);
  //   if (index > -1) {
  //     arr.splice(index, 1);
  //   }
  //   return arr;
  // }

  // static populate() {
  //   var result: Map<string, User> = new Map<string, User>();
  //   try {
  //     var users = [
  //       new User('Leanne Graham', 18, 'sincere@april.biz', 'LG_123456'),
  //       new User('Ervin Howell', 21, 'shanna@melissa.tv', 'EH_123123'),
  //       new User('Nathan Plains', 25, 'nathan@yesenia.net', 'NP_812415'),
  //       new User('Patricia Lebsack', 18, 'patty@kory.org', 'PL_12345'),
  //     ];

  //     users.forEach(async (user) => {
  //       try {
  //         // await Verification.verifyEmail(user);

  //         await DatabaseQuery.commit(user);
  //       } catch (error) {}

  //       result.set(user.id, user);
  //     });
  //   } catch (error) {
  //     return null;
  //   }
  // }

  // static validBody(body: any) {
  //   var systemMessage = new SystemMessage();

  //   var keys: Array<string> = Helper.describeClassUser();
  //   var types: Map<string, string> = new Map<string, string>();

  //   types.set('name', typeof '');
  //   types.set('age', typeof 0);
  //   types.set('email', typeof '');
  //   types.set('password', typeof '');
  //   for (const key of Object.keys(body)) {
  //     if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
  //       throw systemMessage.error(502);
  //     }
  //     if (typeof body[key] != types.get(key)) {
  //       throw this.systemMessage.custom({
  //         success: false,
  //         data: `${key} is not a valid attribute`,
  //       });
  //     }
  //   }
  // }

  //   static validBodyPut(body: any): { success: boolean; data: string } {
  //     var keys: Array<string> = Helper.describeClassUser();

  //     keys = Helper.removeItemOnce(keys, 'id');
  //     for (const key of Object.keys(body)) {
  //       if (keys.includes(`${key}`)) {
  //         keys = Helper.removeItemOnce(keys, key);
  //       }
  //     }
  //     if (keys.length > 0) {
  //       throw this.systemMessage.custom({
  //         success: false,
  //         data: `Payload is missing ${keys}`,
  //       });
  //     }
  //     return this.systemMessage.custom({ success: true, data: null });
  //   }
  // }

  // //For processing data to database
  // export class Process {
  //   private static systemMessage = new SystemMessage();

  //   static getMsgUid(user1: string, user2: string): string {
  //     var user = [];
  //     user.push(user1.slice(-(user1.length / 2)));
  //     user.push(user2.slice(-(user1.length / 2)));
  //     user.sort();
  //     return user.join('');
  //   }

  //   static messageAddTime(message: Message): Message {
  //     message.date = new Date();
  //     return message;
  //   }

  //   static async updateUser(user: any, id: string) {
  //     return await DatabaseQuery.updateValues(id, user);
  //   }

  //   static registerUser(newUser: any) {
  //     var user = new User(newUser);

  //     return DatabaseQuery.commit(user);
  //   }

  //   static async getUser(id: any) {
  //     var user = await DatabaseQuery.getUser(id);
  //     return this.systemMessage.success(user);
  //   }

  //   static async getAllUsers() {
  //     var populatedData = await DatabaseQuery.getAllUsers();
  //     return this.systemMessage.success(populatedData);
  //   }

  //   static async overwriteUser(id: string, newUser: any) {
  //     var user = new User(newUser);
  //     user.id = id;

  //     return await DatabaseQuery.replaceValues(id, user);
  //   }

  //   static async deleteUser(id: string) {
  //     return DatabaseQuery.delete(id);
  //   }

  //   static async loginUser(newUser: any) {
  //     var user: User;
  //     if ((user = await DatabaseQuery.loginUser(newUser.email, newUser.password)))
  //       return this.systemMessage.success(user.toJson());

  //     throw this.systemMessage.error(505);
  //   }

  //   static async searchInUser(query: string) {
  //     var result = await DatabaseQuery.searchInUser(query);

  //     if (!result.length) return this.systemMessage.error(512);
  //     return this.systemMessage.success(result);
  //   }

  //   static populateDatabase(): Map<string, User> {
  //     return Helper.populate();
  //   }
}
