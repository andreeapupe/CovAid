import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { LoginComponent } from './AUTHENTICATION_RELATED/login/login.component';
import { InfoPageComponent } from './PATIENT_RELATED/info-page/info-page.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, InfoPageComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
