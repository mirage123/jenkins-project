import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { Student2ListComponent } from './student2-list/student2-list.component';
import { Student2DetailsComponent } from './student2-details/student2-details.component';
import { AddStudent2Component } from './add-student2/add-student2.component';
import { EditStudent2Component } from './edit-student2/edit-student2.component';

const routes :Routes = [
  {path:"" ,component:Student2ListComponent},
  {path:"add" ,component:AddStudent2Component},
  {path:"details/:id" ,component:Student2DetailsComponent},
  {path:"edit/:id" ,component:EditStudent2Component}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class Student2RoutingModule { }
