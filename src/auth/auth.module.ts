import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret: '9stLAb0n)kby5=["i<B(l|}}Rv/Yp*i',
    }),
    UserService,
    PrismaModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
