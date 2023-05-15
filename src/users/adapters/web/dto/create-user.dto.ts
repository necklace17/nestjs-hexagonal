import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @Length(5, 10)
  userName: string;
  @Length(5, 10)
  firstName: string;
  @Length(5, 10)
  @IsNotEmpty()
  surName: string;
  @Length(8, 10)
  password: string;
}
