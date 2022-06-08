import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/hello')
  authLogins() {
    return 'hi';
  }

  @Get('/:id/:pass')
  authLogin(@Param('id') id: string, @Param('pass') pass: string) {
    return this.authService.login(id, pass);
  }
}
