import { CreateUserCommand } from "./outgoing/create-user.command";
import { CreatedUserDto } from "./incoming/created-user-dto";

export interface ICrudUser {
  create(createUserCommand: CreateUserCommand): CreatedUserDto;
}
