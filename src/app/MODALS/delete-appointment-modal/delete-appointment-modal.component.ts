import { Component, Inject, OnInit } from '@angular/core'
import { HttpService } from '../../SERVICES/http.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-appointment-modal',
  templateUrl: './delete-appointment-modal.component.html',
  styleUrls: ['./delete-appointment-modal.component.css'],
})
export class DeleteAppointmentModalComponent implements OnInit {
  appointmentId: number

  constructor(
    public httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.appointmentId = this.data.id
  }

  ngOnInit(): void {}

  delete() {
    this.httpService.deleteRequest(this.appointmentId).subscribe((response) => {
      console.log(response)
    })
  }
}
