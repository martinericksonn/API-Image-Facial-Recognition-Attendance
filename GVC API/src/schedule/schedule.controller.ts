import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  getHello(): string {
    return this.scheduleService.scheduleWorking();
  }
  @Get('/get/all')
  setAllSchedule() {
    return this.scheduleService.getAllSchedule();
  }

  @Get('/get/:id')
  setSchedule(@Param('id') id: string) {
    return this.scheduleService.getSchedule(id);
  }

  @Post('/add')
  addSchedule(@Body() body: any) {
    return this.scheduleService.addSchedule(body);
  }
}
