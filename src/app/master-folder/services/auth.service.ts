import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // isAuthenticate() - Check user is authenticated or not.
  isAuthenticate(): boolean{
    if(window.localStorage.getItem("token")){ 
        return true;
    }
    else{
      return false;
    }
  }
  username=new BehaviorSubject<string>('');


}
