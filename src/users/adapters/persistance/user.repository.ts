import { IUserPort } from "../../users/ports/out/user.port";
import { User } from "../../users/domain/user.entity";
import { UserPersistenceEntity } from "./entity/user.persistence.entity";
import { v4 as uuid } from "uuid";

export class UserRepository implements IUserPort {
  private inMemoryDatabase: Map<string, UserPersistenceEntity>;

  constructor() {
    this.inMemoryDatabase = new Map<string, UserPersistenceEntity>();
  }

  createUser(user: User): UserPersistenceEntity {
    let userId = uuid();
    let userEntity = new UserPersistenceEntity(
      userId,
      user.userName,
      user.firstName,
      user.surName,
      user.password
    );
    this.inMemoryDatabase.set(userId, userEntity);
    return userEntity;
  }
}
