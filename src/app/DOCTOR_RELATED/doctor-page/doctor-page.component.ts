import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'
import { UserDetailsModel } from '../../MODELS/user-details-model'
import { Router } from '@angular/router'
import { DeleteAppointmentModalComponent } from 'src/app/MODALS/delete-appointment-modal/delete-appointment-modal.component'
import { ApproveRejectModel } from 'src/app/MODELS/approve-reject-model'
import { ChangeStatusModalComponent } from 'src/app/MODALS/change-status-modal/change-status-modal.component'

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
    private router: Router
  ) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  logout() {
    this.httpService.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.httpService.getDoctorsOwnAppointments().subscribe((response) => {
      this.doctorApps = response.appointments
    }),
      this.httpService.getUserDetails().subscribe((response) => {
        this.userDetails = response
      })
  }

  deleteDialog(id: number, index: number) {
    const dialog = this.dialog.open(DeleteAppointmentModalComponent, {
      data: { id: id },
    })
    console.log('The delete dialog was closed.')

    dialog.afterClosed().subscribe((result) => {
      this.doctorApps.splice(index, 1)
    })
  }

  openDialogAcceptReject(id: number, status: string) {
    let approveObject: ApproveRejectModel = { id: id, status: status }
    const dialogRef = this.dialog.open(ChangeStatusModalComponent, {
      data: { body: approveObject },
      height: '110px',
      width: '480px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getDoctorsOwnAppointments().subscribe((response) => {
        this.doctorApps = response
      })
    })
  }
}
