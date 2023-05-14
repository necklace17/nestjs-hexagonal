export class UserPersistenceEntity {
  id: string;
  userName: string;
  firstName: string;
  surName: string;

  constructor(
    id: string,
    userName: string,
    firstName: string,
    surName: string,
    password: string
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.surName = surName;
    this.password = password;
  }
  password: string;
}
