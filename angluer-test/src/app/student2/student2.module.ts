import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Student2RoutingModule } from './student2-routing.module';
import { Student2ListComponent } from './student2-list/student2-list.component';
import { Student2DetailsComponent } from './student2-details/student2-details.component';
import { AddStudent2Component } from './add-student2/add-student2.component';
import { EditStudent2Component } from './edit-student2/edit-student2.component';



@NgModule({
  declarations: [
    Student2ListComponent,
    Student2DetailsComponent,
    AddStudent2Component,
    EditStudent2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Student2RoutingModule
  ],
  exports:[
    Student2ListComponent,
    Student2DetailsComponent
  ]
})
export class Student2Module { }
