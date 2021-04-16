import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { MomentDateAdapter } from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import * as _moment from 'moment'
import { defaultFormat as _rollupMoment } from 'moment'

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
  maxDate = new Date(2021, 0, 1)
  date = new FormControl()
  hide = true
  passRequirement = {
    passwordMinLowerCase: 1,
    passwordMinUpperCase: 1,
    passwordMinCharacters: 8,
  }
  pattern = [
    `(?=([^a-z]*[a-z])\{${this.passRequirement.passwordMinLowerCase},\})`,
    `(?=([^A-Z]*[A-Z])\{${this.passRequirement.passwordMinUpperCase},\})`,
    `[A-Za-z\\d\$\@\$\!\%\*\?\&\.]{${this.passRequirement.passwordMinCharacters},}`,
  ]
    .map((item) => item.toString())
    .join('')
  resetPwdForm = this.fb.group({
    newpwdctrlname: [
      '',
      [Validators.required, Validators.pattern(this.pattern)],
    ],
    shownewpwdctrlname: ['', []],
    rptpwdctrlname: ['', [Validators.required]],
  })
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
