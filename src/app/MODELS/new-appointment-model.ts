export class NewAppointmentModel {
  constructor(
    public patient_id: string,
    public doctor_id: number,
    public symptoms: [number],
    public details: string,
    public contact: number
  ) {}
}
