import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninSignupService } from 'src/app/master-folder/services/signinSignup.service';
import { Iuserdata } from 'src/app/master-folder/models/IUserdata';
import { AuthService } from 'src/app/master-folder/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private _authService:AuthService, private route:Router,private _signinSignupService: SigninSignupService){}
  public userdata:Iuserdata[]; 
  err_msg:string;
  temp = false;
  username;
  ngOnInit(){
    this.userdata=this._signinSignupService.userData;
  }
  
  get Name(){
    return this.registrationForm.get('name');
  }
  get Email(){
    return this.registrationForm.get('email');
  }
  get Password(){
    return this.registrationForm.get('password');
  }

  registrationForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]]
  });
  addUserData(){
    if(this.temp){
    this._signinSignupService.userData.push({
      Name:this.Name.value,
      Password:this.Password.value,
      Email:this.registrationForm.get('email').value
    });     
    console.log(this._signinSignupService.userData);
    this.route.navigateByUrl('/home');
    this._authService.username.subscribe(val=>this.username=val);
    window.localStorage.setItem('token', this.uuidv4());
    window.localStorage.setItem('userName',this.Name.value)
    this._authService.username.next(window.localStorage.getItem('userName'));
    //console.log(this._authService.username);
    }
    else{
      this.err_msg="mismatch";
    }
  }
  onKey(event){
    if(event.target.value==this.Password.value){
      this.err_msg="";
      this.temp = true;
      return this.temp;
    }
    else{
      this.err_msg="mismatch";
      this.temp = false;
      return this.temp;
    }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
