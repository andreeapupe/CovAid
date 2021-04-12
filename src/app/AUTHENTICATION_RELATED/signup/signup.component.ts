import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
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
