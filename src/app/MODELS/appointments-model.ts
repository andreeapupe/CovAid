export class AppointmentsModel {
  constructor(
    public appointmentId: number,
    public userId: 3,
    public name: string,
    public email: string,
    public gender: string,
    public age: number,
    public emergency: boolean,
    public status: string
  ) {}
}
