import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './AUTHENTICATION_RELATED/login/login.component'
import { InfoPageComponent } from './PATIENT_RELATED/info-page/info-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'user/info-page',
    component: InfoPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [LoginComponent, InfoPageComponent]
