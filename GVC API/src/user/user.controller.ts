import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //@get
  //attendance
  //accounts

  @Get('/getAccount/:id')
  getAccount(@Param('id') id: string) {
    return this.userService.getAccount(id);
  }

  //@post2
  //add attendance
  //add accounts

  @Post('/addAccount')
  addAccount(@Body() body: any) {
    return this.userService.addAccount(body);
  }

  //@patch
  //onLeave
  //resigned

  //@delete
  //delete

  @Delete('/deleteAccount/:id')
  deleteAccount(@Param('id') id: string) {
    return this.userService.deleteAccount(id);
  }
}
