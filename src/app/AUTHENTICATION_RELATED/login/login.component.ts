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

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user
      this.isLoggedin = user != null
      console.log(this.socialUser)
    })
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  logOut(): void {
    this.socialAuthService.signOut()
  }

  login(): void {
    this.httpService
      .getLogin({
        email: this.email.value as string,
        password: this.password.value as string,
      })
      .subscribe((token) => {
        sessionStorage.setItem('token', token)
        if (token) {
          this.httpService.getUserDetails().subscribe((user) => {
            sessionStorage.setItem('userRole', user.role.name)
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
