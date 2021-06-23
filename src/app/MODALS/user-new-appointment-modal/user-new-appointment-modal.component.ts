import { Component, Inject, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HttpService } from '../../SERVICES/http.service'
import { GetAllDoctorsModel } from '../../MODELS/get-all-doctors'
import { SymptomsModel } from '../../MODELS/symptoms-model'
import { AppointmentsModel } from 'src/app/MODELS/appointments-model'
import { NewAppointmentModel } from 'src/app/MODELS/new-appointment-model'

@Component({
  selector: 'app-user-new-appointment-modal',
  templateUrl: './user-new-appointment-modal.component.html',
  styleUrls: ['./user-new-appointment-modal.component.css'],
})
export class UserNewAppointmentModalComponent implements OnInit {
  requestForm: FormGroup
  doctors: GetAllDoctorsModel[]
  symptoms: SymptomsModel[]
  request: AppointmentsModel[]
  requests: NewAppointmentModel
  checked = false

  constructor(
    private httpService: HttpService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.request = this.data.body
      console.log(this.request)
    }
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      doctor: ['', Validators.required],
      symptoms: ['', Validators.required],
      details: ['', Validators.required],
      contact: [false, Validators.required],
    })
    this.httpService.getAllDoctors().subscribe((response) => {
      this.doctors = response.doctors
    })
    this.httpService.getSymptoms().subscribe((response) => {
      this.symptoms = response.symptoms
    })
  }

  submitRequest(): void {
    if (this.requestForm.valid) {
      let request = new NewAppointmentModel(
        'Bearer ' + localStorage.getItem('token'),
        this.requestForm.controls['doctor'].value,
        this.requestForm.controls['symptoms'].value,
        this.requestForm.controls['details'].value,
        this.requestForm.controls['contact'].value
      )

      this.httpService
        .postUserAppointment(request)
        .subscribe((response) => console.log(response))
    }
    console.log(this.requestForm.value)
  }
}
