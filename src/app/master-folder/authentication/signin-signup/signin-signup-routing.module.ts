import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path:'signup', 
    component:SignUpFormComponent
  },
  {
    path:'signin', 
    component:SignInFormComponent
  },
  { 
    path: '', 
    redirectTo: '/signinsignup/signin', 
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninSignupRoutingModule { }
