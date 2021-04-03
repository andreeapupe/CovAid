import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { UserNewAppointmentModalComponent } from '../MODALS/user-new-appointment-modal/user-new-appointment-modal.component'

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent implements OnInit {
  showFiller = false
  term: string

  filterData = [
    {
      title: 'Programare 1',
      name: 'John Doe',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ]

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(UserNewAppointmentModalComponent)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  ngOnInit(): void {}
}
