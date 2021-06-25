import { Component, Inject, OnInit } from '@angular/core'
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.css'],
})
export class CustomSnackBarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public snackbar: MatSnackBar
  ) {}

  close() {
    console.log('Closed')
    this.snackbar.dismiss()
  }

  ngOnInit(): void {}
}
