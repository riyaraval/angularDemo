import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './master-folder/home/home.component';
import { DataListComponent } from './master-folder/main-folder/data/data-list/data-list.component';
import { DataEditComponent } from './master-folder/main-folder/data/data-edit/data-edit.component';
import { DataCreateComponent } from './master-folder/main-folder/data/data-create/data-create.component';
import { CanLoadGuard } from './master-folder/guard/can-load.guard';
import { CanActivateGuard } from './master-folder/guard/can-activate.guard';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
    // loadChildren:()=>import('./master-folder/home/home.module').then(m=>m.HomeModule),
    // canLoad:[CanLoadGuard]
  },
  {
    path:'signinsignup',
    loadChildren:()=>import('./master-folder/authentication/signin-signup/signin-signup-routing.module').then(m=>m.SigninSignupRoutingModule)
  },
  {
    path:'data',
    loadChildren:()=>import('./master-folder/main-folder/data/data.module').then(m=>m.DataModule),
    canActivate:[CanActivateGuard]
  },
  {
    path:'',
    redirectTo:'/signinsignup/signin',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
