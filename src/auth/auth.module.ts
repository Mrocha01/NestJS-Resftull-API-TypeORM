import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: '9stLAb0n)kby5=["i<B(l|}}Rv/Yp*i',
    }),
  ],
})
export class AuthModule {}
