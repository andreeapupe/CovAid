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

import { LoginComponent } from './AUTHENTICATION_RELATED/login/login.component'
import { InfoPageComponent } from './PATIENT_RELATED/info-page/info-page.component'
import { PatientPageComponent } from './PATIENT_RELATED/patient-page/patient-page.component'
import { DoctorPageComponent } from './DOCTOR_RELATED/doctor-page/doctor-page.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoPageComponent,
    PatientPageComponent,
    DoctorPageComponent,
    WelcomePageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
