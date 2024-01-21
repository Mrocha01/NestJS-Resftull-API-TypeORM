import { UserService } from '../user/user.service';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    userExistsById: jest.fn(),
    create: jest.fn(),
    list: jest.fn(),
    listOne: jest.fn(),
    update: jest.fn(),
    deleteOne: jest.fn(),
  },
};
