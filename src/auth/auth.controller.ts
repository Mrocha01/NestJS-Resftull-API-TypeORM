import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { email, passwd }: AuthLoginDTO) {
    return this.authService.login(email, passwd);
  }

  @Post('register')
  async register(@Body() data: AuthRegisterDTO) {
    return this.authService.register(data);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDTO) {
    return this.authService.reset(password, token);
  }

  @Post('me')
  async me(@Body() body) {
    return this.authService.checkToken(body.token);
  }
}
