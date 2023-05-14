import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { ICrudUser } from "../../users/ports/in/crud-user";
import { CreateUserCommand } from "../../users/ports/in/outgoing/create-user.command";
import { CreatedUserDto } from "../../users/ports/in/incoming/created-user-dto";

@Controller("users")
export class UsersController {
  constructor(@Inject("ICrudUser") private readonly crudUser: ICrudUser) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): CreatedUserDto {
    let userCommand = CreateUserCommand.fromDto(createUserDto);
    return this.crudUser.create(userCommand);
  }
}
