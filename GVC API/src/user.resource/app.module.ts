import { Module } from '@nestjs/common';
import { AttendanceModule } from 'src/attendance/attendance.module';
import { AttendanceService } from 'src/attendance/attendance.service';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { ScheduleService } from 'src/schedule/schedule.service';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, ScheduleModule, AttendanceModule],
  controllers: [AppController],
  providers: [AppService, ScheduleService, AttendanceService],
})
export class AppModule {}
