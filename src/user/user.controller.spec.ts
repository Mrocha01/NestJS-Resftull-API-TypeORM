import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { userServiceMock } from '../testing/user-service.mock';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { RoleGuard } from '../guards/role.guard';
import { UserService } from './user.service';
import { createdUserDTO } from '../testing/create-user-dto.mock';
import { userEntityList } from '../testing/user-entity-list.mock';

describe('userController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .overrideGuard(RoleGuard)
      .useValue(guardMock)
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  test('Validate definition', () => {
    expect(userService).toBeDefined();
    expect(userController).toBeDefined();
  });

  describe('Teste dos Guards', () => {
    test('Se os guards estão aplicados', () => {
      const guards = Reflect.getMetadata('__guards__', UserController);

      expect(guards.length).toEqual(2);
      expect(new guards[0]()).toBeInstanceOf(AuthGuard);
      expect(new guards[1]()).toBeInstanceOf(RoleGuard);
    });
  });

  describe('Teste de Rotas', () => {
    test('Create', async () => {
      const result = await userController.create(createdUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
    test('readAll', async () => {
      const result = await userController.readAll();

      expect(result).toEqual(userEntityList);
    });
    test('readOne', async () => {
      const result = await userController.readOne(1);

      expect(result).toEqual(userEntityList[0]);
    });
    test('updateOne', async () => {
      const result = await userController.updateOne(1, createdUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
    test('updateOnePartial', async () => {
      const result = await userController.updateOne(1, createdUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
    test('delete', async () => {
      const result = await userController.deleteOne(1);

      expect(result).toEqual({ message: 'Usuario deletado com sucesso!' });
    });
  });
});
