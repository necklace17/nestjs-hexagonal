import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from './ports/in/outgoing/create-user.command';
import { CreatedUserDto } from './ports/in/incoming/created-user-dto';
import { IUserPort } from './ports/out/user.port';
import { ICrudUser } from './ports/in/crud-user';
import { User } from './domain/user.entity';

@Injectable()
export class UsersService implements ICrudUser {
  constructor(@Inject('IUserPort') private userPort: IUserPort) {}

  hashPassword = (password: string): string => 'hash' + password;

  create(createUserCommand: CreateUserCommand): CreatedUserDto {
    let hashedPassword = this.hashPassword(createUserCommand.password);
    let user: User = {
      userName: createUserCommand.userName,
      firstName: createUserCommand.firstName,
      surName: createUserCommand.surName,
      password: hashedPassword,
    };
    let persistedUser = this.userPort.createUser(user);
    return CreatedUserDto.fromPersistence(persistedUser);
  }
}
