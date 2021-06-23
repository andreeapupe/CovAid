import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { stringify } from '@angular/compiler/src/util'
import { NewAppointmentModel } from '../MODELS/new-appointment-model'

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

  /* 
  * Patient Related 
  */

  
  // Returns list of doctors
  getAllDoctors(): Observable<any> {
    let getAllDoctorsEndpoint = '/doctors'
    return this.http.get(this.url + getAllDoctorsEndpoint, this.httpOptions)
  }

  // Returns patient's own appointments
  getUsersOwnAppointments(): Observable<any> {
    let getUsersOwnAppointmentsEndpoint = '/patient/appointments'
    return this.http.get(this.url + getUsersOwnAppointmentsEndpoint, this.httpOptions)
  }

  // Returns list of symptoms
  getSymptoms(): Observable<any>{
    let getSymptomsEndpoint = '/symptoms'
    return this.http.get(this.url + getSymptomsEndpoint, this.httpOptions)
  }

  postUserAppointment(appointment: NewAppointmentModel): Observable<any> {
    let postUserAppointmentEndpoint = '/patient/appointments'
    return this.http.post(
      this.url + postUserAppointmentEndpoint,
      appointment,
      this.httpOptions
    )
  }

  /* 
  * Doctor Related 
  */

  // Returns doctor's own appointments
  getDoctorsOwnAppointments(): Observable<any> {
    let getDoctorsOwnAppointmentsEndpoint = '/doctor/appointments'
    return this.http.get(this.url + getDoctorsOwnAppointmentsEndpoint, this.httpOptions);
  }

  /* 
  * Global 
  */

  getLogin(credentials: {email: string, password: string}): Observable<any> {
    let getLoginEndopoint = '/login'
    return this.http.post(this.url + getLoginEndopoint, {email: credentials.email, password: credentials.password, device_name: "pupe MAC"}, {responseType: 'text'})
  }
  
  getUserDetails(): Observable<any> {
    let getUserDetailsEndpoint = '/user'
    return this.http.get(this.url + getUserDetailsEndpoint, this.httpOptions)
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