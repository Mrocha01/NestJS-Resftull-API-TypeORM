import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: '9stLAb0n)kby5=["i<B(l|}}Rv/Yp*i',
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
