import { AuthService } from '../auth/auth.service';
import { acessToken } from './acess-token.mock';
import { jwtPayLoad } from './jwt-payload.mock';
import { userEntityList } from './user-entity-list.mock';

export const authServiceMock = {
  provide: AuthService,
  useValue: {
    createToken: jest.fn().mockReturnValue({ acessToken: acessToken }),
    checkToken: jest.fn().mockReturnValue(jwtPayLoad),
    isValidToken: jest.fn().mockReturnValue(true),
    login: jest.fn().mockResolvedValue({ acessToken: acessToken }),
    forget: jest.fn().mockResolvedValue({ success: true }),
    reset: jest.fn().mockResolvedValue(userEntityList[0]),
    register: jest.fn().mockResolvedValue(userEntityList[0]),
  },
};
