import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../../MODALS/filter-modal/filter-modal.component'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'
import { MatSnackBar } from '@angular/material/snack-bar'
import { UserDetailsModel } from '../../MODELS/user-details-model'

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
  userDetails: UserDetailsModel

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      height: '200px',
      width: '500px',
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      this.snackBar.open('Cererea a fost aprobată cu success', 'Ignoră', {
        duration: 3000,
        horizontalPosition: 'start',
      })
    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(): void {
    this.httpService.getDoctorsOwnAppointments().subscribe((response) => {
      this.doctorApps = response.appointments
    }),
      this.httpService.getUserDetails().subscribe((response) => {
        this.userDetails = response
      })
  }
}
