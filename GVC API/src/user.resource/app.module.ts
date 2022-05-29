import { Module } from '@nestjs/common';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { ScheduleService } from 'src/schedule/schedule.service';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
