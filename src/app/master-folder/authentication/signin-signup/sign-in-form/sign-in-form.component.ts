import { Component, OnInit } from '@angular/core';
import { Iuserdata } from 'src/app/master-folder/models/IUserdata';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninSignupService } from 'src/app/master-folder/services/signinSignup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/master-folder/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router,private _authService:AuthService, private _signinSignupService:SigninSignupService){}

  public registerdata: Iuserdata[];
  err_msg:string;
  token:string='aaaa';
  username;
  dataGet=false;
  ngOnInit(){
    this.registerdata=this._signinSignupService.getData();
    this.dataGet=true;
   }
  
    get Name(){
      return this.registrationForm.get('name');
    }
    get Password(){
      return this.registrationForm.get('password');
    }

    registrationForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required]]
    });

    SubmitData(){
      let selecteditem = this.registerdata.find(item => item.Password===this.Password.value && item.Name===this.Name.value);
      this._authService.username.subscribe(val=>this.username=val);
      if(selecteditem){
        this.dataGet=false;
      this.route.navigateByUrl('/data/data-list');
      window.localStorage.setItem('token',this. uuidv4());
      window.localStorage.setItem('userName',selecteditem.Name)
      console.log(this.username);
      this._authService.username.next(window.localStorage.getItem('userName'));
      //console.log(this._authService.username);
    }
    else{
      this.err_msg="Username or Password is incorrect.";
    }
  }

  uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
