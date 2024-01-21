import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createdUserDTO: CreateUserDTO = {
  email: 'Rafael@hcode.com',
  name: 'Rafael Antonio',
  passwd: 'Rafael@123',
  birthAt: new Date('1999-02-10'),
  role: Role.User,
};
