import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { userEntityList } from './user-entity-list.mock';

export const usersRepositoryMock = {
  provide: getRepositoryToken(User),
  useValue: {
    exists: jest.fn(),
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
