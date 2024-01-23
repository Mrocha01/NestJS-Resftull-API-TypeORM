import { UserService } from '../user/user.service';
import { userEntityList } from './user-entity-list.mock';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    userExistsById: jest.fn().mockResolvedValue(true),
    create: jest.fn().mockResolvedValue(userEntityList[0]),
    list: jest.fn().mockResolvedValue(userEntityList),
    listOne: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn().mockResolvedValue(userEntityList[0]),
    deleteOne: jest.fn().mockResolvedValue(true),
  },
};
