import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async userExistsById(id: number) {
    if (
      !(await this.prisma.user.count({
        where: { id },
      }))
    ) {
      throw new NotFoundException(`Usuario ${id} não encontrado!`);
    }
  }

  async create(data: CreateUserDTO) {
    data.passwd = await bcrypt.hash(data.passwd, await bcrypt.genSalt());

    return this.prisma.user.create({
      data,
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async listOne(id: number) {
    await this.userExistsById(id);

    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePatchUserDTO) {
    await this.userExistsById(id);

    if (data.passwd) {
      data.passwd = await bcrypt.hash(data.passwd, await bcrypt.genSalt());
    }

    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async deleteOne(id: number) {
    await this.userExistsById(id);

    return this.prisma.user.delete({ where: { id } });
  }
}
