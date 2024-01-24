import { acessToken } from '../testing/acess-token.mock';
import { authRegisterDTO } from '../testing/auth-register-dto.mock';
import { jwtPayLoad } from '../testing/jwt-payload.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { mailerServiceMock } from '../testing/mailer-service.mock';
import { resetToken } from '../testing/reset-token.mock';
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

      expect(result).toEqual(jwtPayLoad);
    });

    test('isValidToken method', async () => {
      const result = await authService.isValidToken(acessToken);

      expect(result).toEqual(true);
    });
  });

  describe('Autenticação', () => {
    test('login method', async () => {
      const result = await authService.login('Rafael@hcode.com', 'Rafael@123');

      expect(result).toEqual({ acessToken });
    });

    test('forget method', async () => {
      const result = await authService.forget('Rafael@hcode.com');

      expect(result).toEqual(true);
    });

    test('reset method', async () => {
      const result = await authService.reset('654321', resetToken);

      expect(result).toEqual({ acessToken });
    });

    test('register method', async () => {
      const result = await authService.register(authRegisterDTO);

      expect(result).toEqual({ acessToken });
    });
  });
});
