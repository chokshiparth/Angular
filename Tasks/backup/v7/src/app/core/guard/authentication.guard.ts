import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _navigate } from '../interface/navigate';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(
    private router : Router,
    private authGuard : AuthGuardService
  ){}

  canActivate(): boolean {
    if(!this.authGuard.jwtExist()){
      this.router.navigate([_navigate.login_page]);
    };
    return this.authGuard.jwtExist();
  }
  
}
