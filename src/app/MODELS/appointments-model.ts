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
    },
    public symptoms: [
      {
        id: number
        name: string
        created_at: string
        updated_at: string
        pivot: {
          appointment_id: number
          symptom_id: number
        }
      }
    ]
  ) {}
}

/*export declare module Model {
  export interface AppointmentsModel {
    id: number
    patientId: number
    doctorId: number
    contact: boolean
    details: string
    created_at: string
    updated_at: string
    status: string
    patient: Patient[]
  }

  export interface Patient {
    id: number
    name: string
    email: string
    age: number
    email_verified_at: string
    created_at: string
    updated_at: string
    role_id: number
  }

  export interface Doctor {
    id: number
    name: string
    email: string
    age: number
    email_verified_at: string
    created_at: string
    updated_at: string
    role_id: number
  }

  export interface Symptoms {
    id: number
    name: string
    created_at: string
    updated_at: string
    pivot: Pivot[]
  }

  export interface Pivot {
    appointment_id: number
    symptom_id: number
  }
}*/
