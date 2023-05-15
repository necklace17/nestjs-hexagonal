import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ICrudUser } from '../../users/ports/in/crud-user';
import { CreatedUserDto } from '../../users/ports/in/incoming/created-user-dto';
import { CreateUserCommand } from '../../users/ports/in/outgoing/create-user.command';

@Controller('users')
export class UsersController {
  constructor(@Inject('ICrudUser') private readonly crudUser: ICrudUser) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<CreatedUserDto> {
    const createUserCommand: CreateUserCommand = {
      userName: createUserDto.userName,
      firstName: createUserDto.firstName,
      surName: createUserDto.surName,
      password: createUserDto.password,
    };
    return this.crudUser.create(createUserCommand);
  }
}
