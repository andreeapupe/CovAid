import { Component, OnInit, HostListener, Inject } from '@angular/core'
import { trigger, state, transition, style, animate } from '@angular/animations'
import { DOCUMENT } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpService } from '../../SERVICES/http.service'
import { AppointmentsModel } from '../../MODELS/appointments-model'
import { Router } from '@angular/router'
import { DeleteAppointmentModalComponent } from '../../MODALS/delete-appointment-modal/delete-appointment-modal.component'
import { MatDialog } from '@angular/material/dialog'
import { PatchModel } from '../../MODELS/patch-model'
import { UserNewAppointmentModalComponent } from '../../MODALS/user-new-appointment-modal/user-new-appointment-modal.component'
import { UserDetailsModel } from 'src/app/MODELS/user-details-model'
import { MatSnackBar } from '@angular/material/snack-bar'

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
  userDetails: UserDetailsModel
  apps: AppointmentsModel[]
  constructor(
    @Inject(DOCUMENT) document,
    private httpService: HttpService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  logout() {
    this.httpService.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.httpService.getUsersOwnAppointments().subscribe((response) => {
      this.apps = response.appointments
    }),
      this.httpService.getUserDetails().subscribe((response) => {
        this.userDetails = response
      }),
      (this.requestForm = this.formBuilder.group({
        title: ['', Validators.required],
        details: ['', Validators.required],
      }))
  }

  deleteDialog(id: number, index: number) {
    const dialog = this.dialog.open(DeleteAppointmentModalComponent, {
      data: { id: id },
    })
    console.log('The delete dialog was closed.')

    dialog.afterClosed().subscribe((result) => {
      this.apps.splice(index, 1)
    })
  }

  openDialogEdit(patch: PatchModel) {
    const dialogRef = this.dialog.open(UserNewAppointmentModalComponent, {
      height: '700px',
      width: '660px',
      data: { body: patch, edit: true },
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apps.find((appointment) => {
          if (appointment.id == patch.id) {
            appointment.details = result.details
          }
        })
      }

      this.snackBar.open('Cererea a fost modificată cu succes!', 'Revocă', {
        duration: 200,
        horizontalPosition: 'start',
      })
    })
  }
}
