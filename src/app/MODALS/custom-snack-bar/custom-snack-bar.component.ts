import { Component, Inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'
import { BrowserTestingModule } from '@angular/platform-browser/testing'

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.css'],
})
export class CustomSnackBarComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public snackbar: MatSnackBar
  ) {}

  browseTo() {
    console.log('Ceau neda')
  }

  close() {
    console.log('Closed')
    this.snackbar.dismiss()
  }

  ngOnInit(): void {}
}
