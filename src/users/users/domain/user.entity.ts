export class User {
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
}
