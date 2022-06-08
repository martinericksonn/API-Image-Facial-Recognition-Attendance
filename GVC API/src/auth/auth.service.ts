import { Injectable } from '@nestjs/common';
import { DatabaseQuery } from 'src/user.resource/firebase.database';

@Injectable()
export class AuthService {
  login(id: string, pass: string) {
    try {
      return DatabaseQuery.login(id, pass);
    } catch (error) {
      return error;
    }
  }
}
