import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return { users: {}, id };
  }

  @Put(':id')
  async updateOne(
    @Body() { email, name, passwd }: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'put', email, name, passwd, id };
  }

  @Patch(':id')
  async updateOnePartial(
    @Body() { email, name, passwd }: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'patch', email, name, passwd, id };
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
