import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('/get/all')
  getAllAttendances() {
    return this.attendanceService.getAllAttendances();
  }

  @Get('/get/:id')
  getAttendance(@Param('id') id: string) {
    return this.attendanceService.getAttendance(id);
  }

  @Post('/add')
  addAttendance(@Body() body: any) {
    return this.attendanceService.addAttendance(body);
  }

  @Delete('/delete/:id')
  deleteAttendance(@Param('id') id: string) {
    return this.attendanceService.deleteAttendance(id);
  }
}
