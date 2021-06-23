import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HttpService } from '../../SERVICES/http.service'
import { UserDetailsModel } from '../../MODELS/user-details-model'
import { UserNewAppointmentModalComponent } from '../../MODALS/user-new-appointment-modal/user-new-appointment-modal.component'
import { LeavePageModalComponent } from '../../MODALS/leave-page-modal/leave-page-modal.component'
import { MatSnackBar } from '@angular/material/snack-bar'
import { CustomSnackBarComponent } from 'src/app/MODALS/custom-snack-bar/custom-snack-bar.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent implements OnInit {
  showFiller = false
  term: string
  users: UserDetailsModel[]

  filterData = [
    {
      title: 'Programare 1',
      name: 'John Doe',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ]

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(UserNewAppointmentModalComponent, {
      height: '700px',
      width: '660px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
      /*let snackBarRef = this.snackBar.openFromComponent(
        CustomSnackBarComponent,
        {
          duration: 3000,
          horizontalPosition: 'start',
        }
      )

      snackBarRef.onAction().subscribe(() => {})*/
    })
  }

  openLeaveDialog() {
    const dialogRef = this.dialog.open(LeavePageModalComponent, {
      height: '150px',
      width: '450px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  logout() {
    this.httpService.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.httpService.getUserDetails().subscribe((response) => {
      this.users = response.users
    })
  }
}
