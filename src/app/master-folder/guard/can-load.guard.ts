import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(public authService:AuthService,  public router:Router){}
  canLoad():boolean {
    if(!this.authService.isAuthenticate()){
      this.router.navigateByUrl('signinsignup/signin');
      return false;
    }
    return true;
  }
}
