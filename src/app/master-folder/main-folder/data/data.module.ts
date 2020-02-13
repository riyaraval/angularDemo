import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { DataCreateComponent } from './data-create/data-create.component';
import { HeaderFooterModule } from '../../header-footer-components/header-footer.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'data-list',
    component:DataListComponent   
  },
  {
    path:'data-edit/:id',
    component:DataEditComponent   
  },
  {
    path:'data-create',
    component:DataCreateComponent   
  },
  {
    path:'',
    redirectTo:'/data/data-list',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    DataListComponent,
    DataEditComponent,
    DataCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderFooterModule,
    RouterModule.forChild(routes)
  ]
})
export class DataModule { }
