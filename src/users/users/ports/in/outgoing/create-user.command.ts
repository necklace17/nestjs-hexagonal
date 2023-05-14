import { CreateUserDto } from "../../../../adapters/web/dto/create-user.dto";

export class CreateUserCommand {
  userName: string;
  firstName: string;
  surName: string;
  password: string;

  constructor(
    userName: string,
    firstName: string,
    surName: string,
    password: string
  ) {
    this.userName = userName;
    this.firstName = firstName;
    this.surName = surName;
    this.password = password;
  }

  static fromDto(createUserDto: CreateUserDto): CreateUserCommand {
    return new CreateUserCommand(
      createUserDto.userName,
      createUserDto.firstName,
      createUserDto.surName,
      createUserDto.password
    );
  }
}
