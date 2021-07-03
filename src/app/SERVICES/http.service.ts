import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NewAppointmentModel } from '../MODELS/new-appointment-model'
import { PatchModel} from '../MODELS/patch-model'
import { ApproveRejectModel } from '../MODELS/approve-reject-model'
import { NewAccountModel } from '../MODELS/new-account-model'
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'


@Injectable()
export class HttpService {
  url: string
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }


  constructor(public http: HttpClient,) {
    this.url = 'http://covaid.project/api'
    console.log(this.getToken())
  }

  /* Patient Related */

  
  // Returns list of doctors
  getAllDoctors(): Observable<any> {
    let getAllDoctorsEndpoint = '/doctors'
    return this.http.get(this.url + getAllDoctorsEndpoint, this.httpOptions)
  }

  // Returns patient's own appointments
  getUsersOwnAppointments(): Observable<any> {
    let getUsersOwnAppointmentsEndpoint = '/appointments/patient'
    return this.http.get(this.url + getUsersOwnAppointmentsEndpoint, this.httpOptions)
  }

  // Returns list of symptoms
  getSymptoms(): Observable<any>{
    let getSymptomsEndpoint = '/symptoms'
    return this.http.get(this.url + getSymptomsEndpoint, this.httpOptions)
  }

  // Sends patients's details for appointments
  postUserAppointment(appointment: NewAppointmentModel): Observable<any> {
    let postUserAppointmentEndpoint = '/appointments'
    return this.http.post(
      this.url + postUserAppointmentEndpoint,
      appointment,
      this.httpOptions
    )
  }

  /* Doctor Related */

  // Returns doctor's own appointments
  getDoctorsOwnAppointments(): Observable<any> {
    let getDoctorsOwnAppointmentsEndpoint = '/appointments/doctor'
    return this.http.get(this.url + getDoctorsOwnAppointmentsEndpoint, this.httpOptions)
  }

  patchStatus(approvereject: ApproveRejectModel) {
    let patchStatusEndpoint = '/appointments/'
    return this.http.patch(
      this.url + patchStatusEndpoint + approvereject.id,
      approvereject,
      this.httpOptions
    )
  }

  /* Global */

  public customPasswordMatchValidator: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    const match = form.get("password").value == form.get("password_confirmation").value ? true : false;

    return match ? null : { 'unmatch': true }

}

  postNewAccount(account: NewAccountModel): Observable<any> {
    let postNewAccountEndpoint = '/register'
    return this.http.post(
      this.url + postNewAccountEndpoint,
      account,
      this.httpOptions
    )
  }

  getLogin(credentials: {email: string, password: string}): Observable<any> {
    let getLoginEndopoint = '/login'
    return this.http.post(this.url + getLoginEndopoint, {email: credentials.email, password: credentials.password, device_name: "pupe MAC"}, {responseType: 'text'})
  }
  
  getUserDetails(): Observable<any> {
    let getUserDetailsEndpoint = '/user'
    return this.http.get(this.url + getUserDetailsEndpoint, this.httpOptions)
  }

  deleteRequest(id: number): Observable<any> {
    let deleteRequestEndpoint = '/appointments/'
    return this.http.delete(this.url + deleteRequestEndpoint + id, {
      responseType: 'text',
    })
  }

  patchRequest(patch: PatchModel) {
    let patchRequestEndpoint = '/appointments/'
    return this.http.patch(
      this.url + patchRequestEndpoint + patch.id,
      patch
    )
  }

  isAuthenticated(): boolean{
   let token = localStorage.getItem('token')
   if (token){
     return true
   }
   return false
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.clear()
    console.log(localStorage)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}

