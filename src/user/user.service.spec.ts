import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { CreateUserDTO } from './dto/create-user.dto';
import { userEntityList } from '../testing/user-entity-list.mock';
import { createdUserDTO } from '../testing/create-user-dto.mock';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { updatedUserDTO } from '../testing/update-user-dto.moc';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, usersRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(User));
  });

  test('Validate definition', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  test('Method Create', async () => {
    jest.spyOn(userRepository, 'exists').mockResolvedValueOnce(false);

    const data: CreateUserDTO = createdUserDTO;

    const result = await userService.create(data);

    expect(result).toEqual(userEntityList[0]);
  });

  test('Method List', async () => {
    const result = await userService.list();

    expect(result).toEqual(userEntityList);
  });

  test('Method ListOne', async () => {
    const result = await userService.listOne(1);

    expect(result).toEqual(userEntityList[0]);
  });

  test('Method Update', async () => {
    const data: UpdatePatchUserDTO = updatedUserDTO;

    const result = await userService.update(1, data);

    expect(result).toEqual(userEntityList[0]);
  });

  test('Method Delete', async () => {
    const result = await userService.deleteOne(1);

    expect(result).toEqual({ message: 'Usuario deletado com sucesso!' });
  });
});
