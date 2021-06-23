import { Component, Injectable, OnInit } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { HttpService } from '../http.service'

@Injectable()
export class AuthGuardComponent implements CanActivate {
  constructor(public router: Router, public httpService: HttpService) {}

  canActivate() {
    if (this.httpService.isAuthenticated()) {
      return true
    }
    this.router.navigate(['/welcome'])
    return false
  }
}
