import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GetAllDoctorsModel } from '../MODELS/get-all-doctors'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 1|jmbLbfMDLFtTlBOW05RAcPYT63pkf7X8GYlfx694',
    }),
  }

  constructor(public http: HttpClient) {
    this.url = 'http://covaid.project/api'
  }

  getAllDoctors(): Observable<any> {
    let getAllDoctorsEndpoint = '/doctors'
    return this.http.get(this.url + getAllDoctorsEndpoint, this.httpOptions)
  }
}
