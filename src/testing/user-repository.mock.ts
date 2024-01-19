import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';

export const usersRepositoryMock = {
  provide: getRepositoryToken(User),
  useValue: {
    exists: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
