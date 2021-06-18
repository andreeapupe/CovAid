import { Component, OnInit, HostListener, Inject } from '@angular/core'
import { trigger, state, transition, style, animate } from '@angular/animations'
import { DOCUMENT } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'

@Component({
  selector: 'app-patient-appointments-page',
  templateUrl: './patient-appointments-page.component.html',
  styleUrls: ['./patient-appointments-page.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class PatientAppointmentsPageComponent implements OnInit {
  value = ''
  filterTerm: string
  requestForm: FormGroup
  formBuilder: any
  symptoms = new FormControl()
  apps: AppointmentsModel[]
  constructor(@Inject(DOCUMENT) document, private httpService: HttpService) {}

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

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(): void {
    this.httpService.getUsersOwnAppointments().subscribe((response) => {
      this.apps = response.appointments
    }),
      (this.requestForm = this.formBuilder.group({
        title: ['', Validators.required],
        justification: ['', Validators.required],
      }))
  }
}
