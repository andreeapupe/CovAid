import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 2|wOSBX6uWEIT99Q3YE35KlLA4SzxeJsv4D9HUftwQ',
    }),
  }

  httpOptionsDoc = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 1|Pjmo971QNDTeInu79gMS4TI7bLBHjep15kRb8wgz',
    }),
  }

  constructor(public http: HttpClient) {
    this.url = 'http://covaid.project/api'
  }

  getAllDoctors(): Observable<any> {
    let getAllDoctorsEndpoint = '/doctors'
    return this.http.get(this.url + getAllDoctorsEndpoint, this.httpOptions)
  }

  getUserDetails(): Observable<any> {
    let getUserDetailsEndpoint = '/user'
    return this.http.get(this.url + getUserDetailsEndpoint, this.httpOptions)
  }

  getUsersOwnAppointments(): Observable<any> {
    let getUsersOwnAppointmentsEndpoint = '/user/appointments'
    return this.http.get(this.url + getUsersOwnAppointmentsEndpoint, this.httpOptions)
  }

  getDoctorsOwnAppointments(): Observable<any> {
    let getDoctorsOwnAppointmentsEndpoint = '/doctor/appointments'
    return this.http.get(this.url + getDoctorsOwnAppointmentsEndpoint, this.httpOptionsDoc)
  }

  getLogin(credentials: {email: string, password: string}): Observable<any> {
    let getLoginEndopoint = '/login'
    return this.http.post(this.url + getLoginEndopoint, {email: credentials.email, password: credentials.password, device_name: "pupe MAC"})
  }
}