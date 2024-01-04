import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UserService } from './user.service';
import { ParamId } from 'src/decorators/param-id-decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { AuthGuard } from 'src/guards/auth.guard';

@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async readAll() {
    return this.userService.list();
  }

  @Get(':id')
  async readOne(@ParamId() id: number) {
    return this.userService.listOne(id);
  }

  @Put(':id')
  async updateOne(@ParamId() id: number, @Body() data: UpdatePutUserDTO) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  async updateOnePartial(
    @ParamId() id: number,
    @Body() data: UpdatePatchUserDTO,
  ) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async deleteOne(@ParamId() id: number) {
    return this.userService.deleteOne(id);
  }
}
