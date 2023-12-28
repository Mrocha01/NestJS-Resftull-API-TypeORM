import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: AuthLoginDTO) {}

  @Post('register')
  async register(@Body() data: AuthRegisterDTO) {}

  @Post('forget')
  async forget(@Body() data: AuthForgetDTO) {}

  @Post('reset')
  async reset(@Body() data: AuthResetDTO) {}
}
