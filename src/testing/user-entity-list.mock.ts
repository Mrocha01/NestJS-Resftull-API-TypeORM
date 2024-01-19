import { Role } from '../enums/role.enum';
import { User } from '../user/entity/user.entity';

export const userEntityList: User[] = [
  {
    id: 1,
    name: 'Rafael Antonio',
    email: 'Rafael@hcode.com',
    passwd: '$2b$10$wXiXDsWk9wqGbYSzgYO3S.Lmq7E1H8DipN3iQ9bS8I2PvuG4W2au6',
    birthAt: new Date('1999-02-10'),
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Jose Carlos',
    email: 'Jose@hcode.com',
    passwd: '$2b$10$wXiXDsWk9wqGbYSzgYO3S.Lmq7E1H8DipN3iQ9bS8I2PvuG4W2au6',
    birthAt: new Date('1999-02-10'),
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Pedro Roberto',
    email: 'Pedro@hcode.com',
    passwd: '$2b$10$wXiXDsWk9wqGbYSzgYO3S.Lmq7E1H8DipN3iQ9bS8I2PvuG4W2au6',
    birthAt: new Date('1999-02-10'),
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
