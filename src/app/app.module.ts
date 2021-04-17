import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

import 'hammerjs'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu'
import { MatTabsModule } from '@angular/material/tabs'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'

import { LoginComponent } from './AUTHENTICATION_RELATED/login/login.component'
import { InfoPageComponent } from './PATIENT_RELATED/info-page/info-page.component'
import { PatientPageComponent } from './PATIENT_RELATED/patient-page/patient-page.component'
import { DoctorPageComponent } from './DOCTOR_RELATED/doctor-page/doctor-page.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { UserNewAppointmentModalComponent } from './PATIENT_RELATED/MODALS/user-new-appointment-modal/user-new-appointment-modal.component'
import { PatientAppointmentsPageComponent } from './PATIENT_RELATED/patient-appointments-page/patient-appointments-page.component'
import { SignupComponent } from './AUTHENTICATION_RELATED/signup/signup.component'

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login'
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoPageComponent,
    PatientPageComponent,
    DoctorPageComponent,
    WelcomePageComponent,
    UserNewAppointmentModalComponent,
    PatientAppointmentsPageComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTabsModule,
    MDBBootstrapModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    SocialLoginModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '256451417710-9ckhsb078lnli0vevnp4bfo4r2h41fvd.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    /*
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1052831588453705'),
          },
        ],
      } as SocialAuthServiceConfig,
    },*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
