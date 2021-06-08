export class UserDetailsModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public age: number,
    public email_verified_at: number,
    public created_at: boolean,
    public updated_at: string,
    public roleid: number
  ) {}
}
