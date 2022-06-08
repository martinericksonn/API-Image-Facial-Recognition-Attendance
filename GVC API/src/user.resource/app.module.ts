import { Module } from '@nestjs/common';
import { AttendanceModule } from '../attendance/attendance.module';
import { AttendanceService } from '../attendance/attendance.service';
import { ScheduleModule } from '../schedule/schedule.module';
import { ScheduleService } from '../schedule/schedule.service';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

import { UserModule } from '../user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [UserModule, ScheduleModule, AttendanceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ScheduleService, AttendanceService, AuthService],
})
export class AppModule {}
