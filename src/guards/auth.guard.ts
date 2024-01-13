import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    // console.log({ authorization });

    try {
      const data = this.authService.checkToken(
        (authorization ?? ' ').split(' ')[1],
      );

      request.tokenPaylaod = data;

      request.user = await this.userService.listOne(data.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
