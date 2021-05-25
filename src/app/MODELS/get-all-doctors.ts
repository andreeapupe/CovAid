export class GetAllDoctorsModel {
  constructor(
    public appointmentId: number,
    public name: string,
    public email: string,
    public email_verified_at: number,
    public created_at: boolean,
    public updated_at: string,
    public roleid: number
  ) {}
}
