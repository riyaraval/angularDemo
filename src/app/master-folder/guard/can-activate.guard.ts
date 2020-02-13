import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(public authService:AuthService,  public router:Router){}

  canActivate(): boolean  {
    if(!this.authService.isAuthenticate()){
      this.router.navigateByUrl('signinsignup/signin');
      return false;
    }
    return true;
  }
}
