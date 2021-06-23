import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  FacebookLoginProvider,
} from 'angularx-social-login'
import { HttpService } from '../../SERVICES/http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true

  loginForm: FormGroup
  socialUser: SocialUser
  isLoggedin: boolean
  email = new FormControl('')
  password = new FormControl('')

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  logOut(): void {
    console.log('da')
  }

  login(): void {
    this.httpService
      .getLogin({
        email: this.email.value as string,
        password: this.password.value as string,
      })
      .subscribe((token) => {
        localStorage.setItem('token', token)
        console.log(localStorage)
        if (token) {
          console.log(token)
          console.log(localStorage.getItem('token'))
          this.httpService.getUserDetails().subscribe((user) => {
            localStorage.setItem('userRole', user.role.name)
            console.log(user.role.name)
            if (user.role.name === 'patient') {
              this.router.navigate(['patient/dashboard'])
            }
            if (user.role.name === 'doctor') {
              this.router.navigate(['doctor/dashboard'])
            }
          })
        }
      })
  }

  /*
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  */
}
