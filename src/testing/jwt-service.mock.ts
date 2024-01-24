import { JwtService } from '@nestjs/jwt';
import { acessToken } from './acess-token.mock';
import { jwtPayLoad } from './jwt-payload.mock';

export const jwtServiceMock = {
  provide: JwtService,
  useValue: {
    sign: jest.fn().mockReturnValue(acessToken),
    verify: jest.fn().mockReturnValue(jwtPayLoad),
  },
};
