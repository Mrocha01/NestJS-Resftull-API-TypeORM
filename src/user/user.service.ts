import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async userExistsById(id: number) {
    if (!(await this.usersRepository.exists({ where: { id } }))) {
      throw new NotFoundException(`Usuario ${id} não encontrado!`);
    }
  }

  async create(data: CreateUserDTO) {
    if (await this.usersRepository.exists({ where: { email: data.email } })) {
      throw new BadRequestException(
        `Email ${data.email} já está cadastrado, tente novamente!`,
      );
    }

    if (data.birthAt) {
      data.birthAt = new Date(data.birthAt);
    }

    data.passwd = await bcrypt.hash(data.passwd, await bcrypt.genSalt());

    const newUser = await this.usersRepository.create(data);

    return this.usersRepository.save(newUser);
  }

  async list() {
    return this.usersRepository.find();
  }

  async listOne(id: number) {
    await this.userExistsById(id);

    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdatePatchUserDTO) {
    await this.userExistsById(id);

    if (data.passwd) {
      data.passwd = await bcrypt.hash(data.passwd, await bcrypt.genSalt());
    }

    await this.usersRepository.update(id, data);

    return this.listOne(id);
  }

  async deleteOne(id: number) {
    await this.userExistsById(id);

    await this.usersRepository.delete(id);

    return { message: 'Usuario deletado com sucesso!' };
  }
}
