import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HttpService } from '../../SERVICES/http.service'
import { GetAllDoctorsModel } from '../../MODELS/get-all-doctors'

@Component({
  selector: 'app-user-new-appointment-modal',
  templateUrl: './user-new-appointment-modal.component.html',
  styleUrls: ['./user-new-appointment-modal.component.css'],
})
export class UserNewAppointmentModalComponent implements OnInit {
  requestForm: FormGroup
  formBuilder: any
  symptoms = new FormControl()
  doctors: GetAllDoctorsModel[]

  symptomList: string[] = [
    'Febră',
    'Tuse uscată',
    'Anosmia (Pierderea mirosului)',
    'Oboseală',
    'Dureri musculare',
    'Dificultate la respirație',
    'Durere în gât',
    'Migrene',
    'Senzație de disconfort în zona pieptului',
  ]

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllDoctors().subscribe((response) => {
      this.doctors = response.doctors
    }),
      (this.requestForm = this.formBuilder.group({
        title: ['', Validators.required],
        justification: ['', Validators.required],
      }))
  }
}
