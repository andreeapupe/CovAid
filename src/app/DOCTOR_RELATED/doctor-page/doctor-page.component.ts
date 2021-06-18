import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { trigger, state, style, transition, animate } from '@angular/animations'
import {
  getLocaleDateTimeFormat,
  FormatWidth,
  formatDate,
} from '@angular/common'
import { FilterModalComponent } from '../MODALS/filter-modal/filter-modal.component'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
  animations: [
    /*trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),*/
  ],
})
export class DoctorPageComponent implements OnInit {
  dateTime = new Date()
  value = ''
  filterTerm: string
  doctorApps: AppointmentsModel[]

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public dialog: MatDialog,
    private httpService: HttpService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      height: '400px',
      width: '400px',
    })
  }

  formatMyDate(dateTime: Date) {
    const format = getLocaleDateTimeFormat(this.locale, FormatWidth.Long)
    const date = formatDate(this.dateTime, 'MMMM d, y', this.locale)
    const time = formatDate(this.dateTime, 'HH:mm', this.locale)
    return format
      .replace("'", '')
      .replace("'", '')
      .replace('{1}', date)
      .replace('{0}', time)
  }

  ngOnInit(): void {
    this.httpService.getDoctorsOwnAppointments().subscribe((response) => {
      this.doctorApps = response.appointments
    })
  }
}
