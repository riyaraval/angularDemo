import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  username;
  ngOnInit(){
    this.authservice.username.subscribe(val=>this.username=val);
    console.log(this.username);
  }

  constructor(private authservice:AuthService){}

  kickOutUser(){
    window.localStorage.removeItem("token");
    window.localStorage.removeItem('userName');
  }


}
