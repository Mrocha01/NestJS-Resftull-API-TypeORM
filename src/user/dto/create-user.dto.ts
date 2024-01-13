import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  Validate,
  isEnum,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  passwd: string;

  @IsOptional()
  @Validate(isEnum, [Role])
  role: Role;

  @IsOptional()
  @IsDateString()
  birthAt?: Date;
}
