import { AuthService } from '../auth/auth.service';
import { acessToken } from './acess-token.mock';
import { jwtPayLoad } from './jwt-payload.mock';

export const authServiceMock = {
  provide: AuthService,
  useValue: {
    createToken: jest.fn().mockReturnValue({ acessToken: acessToken }),
    checkToken: jest.fn().mockReturnValue(jwtPayLoad),
    isValidToken: jest.fn().mockReturnValue(true),
    login: jest.fn().mockResolvedValue({ acessToken: acessToken }),
    forget: jest.fn().mockResolvedValue({ success: true }),
    reset: jest.fn().mockResolvedValue({ acessToken: acessToken }),
    register: jest.fn().mockResolvedValue({ acessToken: acessToken }),
  },
};
