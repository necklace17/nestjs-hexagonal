import { UserPersistenceEntity } from "../../../../adapters/persistance/entity/user.persistence.entity";

export class CreatedUserDto {
  id: string;
  userName: string;
  firstName: string;
  surName: string;

  private constructor(
    id: string,
    userName: string,
    firstName: string,
    surName: string
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.surName = surName;
  }

  static fromPersistence(persistedUser: UserPersistenceEntity): CreatedUserDto {
    return new CreatedUserDto(
      persistedUser.id,
      persistedUser.userName,
      persistedUser.firstName,
      persistedUser.surName
    );
  }
}
