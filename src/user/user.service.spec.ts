import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { CreateUserDTO } from './dto/create-user.dto';
import { Role } from '../enums/role.enum';
import { userEntityList } from '../testing/user-entity-list.mock';

describe('UserService', () => {
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, usersRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  test('Validate definition', () => {
    expect(userService).toBeDefined();
  });

  test('Method Create', async () => {
    const data: CreateUserDTO = {
      email: 'Rafael@hcode.com',
      name: 'Rafael Antonio',
      passwd: 'Rafael@123',
      birthAt: new Date('1999-02-10'),
      role: Role.Admin,
    };
    const result = await userService.create(data);

    expect(result).toEqual(userEntityList[0]);
  });

  test('Method Read', async () => {});

  test('Method Update', async () => {});

  test('Method Delete', async () => {});
});
