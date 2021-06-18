export class AppointmentsModel {
  constructor(
    public id: number,
    public patientId: number,
    public doctorId: number,
    public contact: boolean,
    public details: string,
    public created_at: string,
    public updated_at: string
  ) {}
}
