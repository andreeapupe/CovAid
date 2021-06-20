import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HttpService } from '../../SERVICES/http.service'
import { GetAllDoctorsModel } from '../../MODELS/get-all-doctors'
import { SymptomsModel } from '../../MODELS/symptoms-model'

@Component({
  selector: 'app-user-new-appointment-modal',
  templateUrl: './user-new-appointment-modal.component.html',
  styleUrls: ['./user-new-appointment-modal.component.css'],
})
export class UserNewAppointmentModalComponent implements OnInit {
  requestForm: FormGroup
  formBuilder: any
  doctors: GetAllDoctorsModel[]
  symptoms: SymptomsModel[]

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllDoctors().subscribe((response) => {
      this.doctors = response.doctors
    }),
      this.httpService.getSymptoms().subscribe((response) => {
        this.symptoms = response.symptoms
      })
  }
}
