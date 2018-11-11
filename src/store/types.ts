export interface IUser {
  email: string;
  password: string;
}

export class User implements IUser {
  public email: string;
  public password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
