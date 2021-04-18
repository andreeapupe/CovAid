import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './AUTHENTICATION_RELATED/login/login.component'
import { InfoPageComponent } from './PATIENT_RELATED/info-page/info-page.component'
import { PatientPageComponent } from './PATIENT_RELATED/patient-page/patient-page.component'
import { DoctorPageComponent } from './DOCTOR_RELATED/doctor-page/doctor-page.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { PatientAppointmentsPageComponent } from './PATIENT_RELATED/patient-appointments-page/patient-appointments-page.component'
import { SignupComponent } from './AUTHENTICATION_RELATED/signup/signup.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'patient/info-page',
    component: InfoPageComponent,
  },
  {
    path: 'patient/dashboard',
    component: PatientPageComponent,
  },
  {
    path: 'doctor/dashboard',
    component: DoctorPageComponent,
  },
  {
    path: 'patient/appointments',
    component: PatientAppointmentsPageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  // Redirect to homepage if page doesn't exist
  // Instead of returning 404 page not found
  { path: '**', component: WelcomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  LoginComponent,
  InfoPageComponent,
  PatientPageComponent,
  DoctorPageComponent,
  WelcomePageComponent,
  PatientAppointmentsPageComponent,
  SignupComponent,
]
