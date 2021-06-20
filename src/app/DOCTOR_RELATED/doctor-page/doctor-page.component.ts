import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../MODALS/filter-modal/filter-modal.component'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
  animations: [],
})
export class DoctorPageComponent implements OnInit {
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

  ngOnInit(): void {
    this.httpService.getDoctorsOwnAppointments().subscribe((response) => {
      this.doctorApps = response.appointments
    })
  }
}
