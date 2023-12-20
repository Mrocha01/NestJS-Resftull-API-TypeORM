import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, passwd }: CreateUserDTO) {
    return { email, name, passwd };
  }

  @Get()
  async readAll() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() params) {
    return { users: {}, params };
  }

  @Put(':id')
  async updateOne(
    @Body() { email, name, passwd }: UpdatePutUserDTO,
    @Param() params,
  ) {
    return { method: 'put', email, name, passwd, params };
  }

  @Patch(':id')
  async updateOnePartial(
    @Body() { email, name, passwd }: UpdatePatchUserDTO,
    @Param() params,
  ) {
    return { method: 'patch', email, name, passwd, params };
  }

  @Delete(':id')
  async deleteOne(@Param() params) {
    return { params };
  }
}
