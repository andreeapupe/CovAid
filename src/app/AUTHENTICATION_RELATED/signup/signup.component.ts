import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MomentDateAdapter } from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import * as _moment from 'moment'
import { defaultFormat as _rollupMoment } from 'moment'
import { NewAccountModel } from 'src/app/MODELS/new-account-model'
import { HttpService } from 'src/app/SERVICES/http.service'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'

const moment = _rollupMoment || _moment
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SignupComponent implements OnInit {
  maxDate = new Date(new Date().getTime() - 365 * 18 * 24 * 60 * 60 * 1000)
  date = new FormControl()
  hide = true
  newUserForm: FormGroup
  newUser: NewAccountModel
  fullname: any

  constructor(
    private httpService: HttpService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        age: ['', Validators.required],
        role: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required],
      },
      { validators: this.httpService.customPasswordMatchValidator }
    )
  }

  registerNewUser(): void {
    if (this.newUserForm.valid) {
      let age =
        (new Date().getTime() -
          new Date(this.newUserForm.controls['age'].value).getTime()) /
        (365 * 24 * 60 * 60 * 1000)

      console.log(age)

      let account = new NewAccountModel(
        `${this.newUserForm.controls['lastName'].value} ${this.newUserForm.controls['firstName'].value}`,
        age,
        this.newUserForm.controls['role'].value,
        this.newUserForm.controls['email'].value,
        this.newUserForm.controls['password'].value,
        this.newUserForm.controls['password_confirmation'].value
      )
      console.log(this.newUserForm.value)
      this.httpService
        .postNewAccount(account)
        .subscribe((account) => console.log(account))
    }
  }
}
