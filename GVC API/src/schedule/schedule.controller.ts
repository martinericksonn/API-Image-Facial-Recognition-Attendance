import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  getHello(): string {
    return this.scheduleService.scheduleWorking();
  }
  @Get('/getAccount')
  getAccount() {
    return this.scheduleService.scheduleWorking();
  }

  @Post('/add')
  addSchedule(@Body() body: any) {
    return this.scheduleService.addSchedule(body);
  }
}
