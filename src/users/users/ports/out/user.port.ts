import { User } from "../../domain/user.entity";
import { UserPersistenceEntity } from "../../../adapters/persistance/entity/user.persistence.entity";

export interface IUserPort {
  createUser(user: User): UserPersistenceEntity;
}
