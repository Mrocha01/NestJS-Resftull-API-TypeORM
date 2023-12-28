import { IsEmail } from 'class-validator';

export class AuthRegisterDTO {
  @IsEmail()
  email: string;
}
