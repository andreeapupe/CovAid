export class UserDetailsModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public age: number,
    public email_verified_at: number,
    public created_at: boolean,
    public updated_at: string,
    public role_id: number,
    public role: {
      id: number,
      name: string,
      created_at: boolean,
      updated_at: string,
    }
  ) {}
}
