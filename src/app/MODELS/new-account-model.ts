export class NewAccountModel {
  constructor(
    public name: string,
    public age: number,
    public role: string,
    public email: string,
    public password: string,
    public password_confirmation: string
  ) {}
}
