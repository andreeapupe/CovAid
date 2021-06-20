export class AppointmentsModel {
  constructor(
    public id: number,
    public patientId: number,
    public doctorId: number,
    public contact: boolean,
    public details: string,
    public created_at: string,
    public updated_at: string,
    public status: string,
    public patient: {
      id: number
      name: string
      email: string
      age: number
      email_verified_at: string
      created_at: string
      updated_at: string
      role_id: number
    },
    public doctor: {
      id: number
      name: string
      email: string
      age: number
      email_verified_at: string
      created_at: string
      updated_at: string
      role_id: number
    }
  ) {}
}
