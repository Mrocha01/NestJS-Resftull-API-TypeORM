import { acessToken } from '../testing/acess-token.mock';
import { jwtPayloadJSON } from '../testing/jwt-payload.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { mailerServiceMock } from '../testing/mailer-service.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { AuthService } from './auth.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        usersRepositoryMock,
        jwtServiceMock,
        userServiceMock,
        mailerServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validate definition', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    test('createToken method', async () => {
      const result = await authService.createToken(userEntityList[0]);

      expect(result).toEqual({ acessToken });
    });

    test('checkToken method', async () => {
      const result = await authService.checkToken(acessToken);

      expect(result).toEqual(jwtPayloadJSON);
    });

    test('isValidToken method', async () => {
      const result = await authService.isValidToken(acessToken);

      expect(result).toEqual(true);
    });
  });

  describe('Autenticação', () => {});
});
