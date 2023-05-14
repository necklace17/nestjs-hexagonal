import { Inject, Injectable } from "@nestjs/common";
import { CreateUserCommand } from "./ports/in/outgoing/create-user.command";
import { CreatedUserDto } from "./ports/in/incoming/created-user-dto";
import { IUserPort } from "./ports/out/user.port";
import { ICrudUser } from "./ports/in/crud-user";
import { User } from "./domain/user.entity";

@Injectable()
export class UsersService implements ICrudUser {
  constructor(@Inject("IUserPort") private userPort: IUserPort) {}

  create(createUserCommand: CreateUserCommand): CreatedUserDto {
    function hashPassword(password: string): string {
      return "hash" + password;
    }

    let hashedPassword = hashPassword(createUserCommand.password);
    let user = new User(
      createUserCommand.userName,
      createUserCommand.firstName,
      createUserCommand.surName,
      hashedPassword
    );
    let persistedUser = this.userPort.createUser(user);
    return CreatedUserDto.fromPersistence(persistedUser);
  }
}
