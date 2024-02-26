import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes : Routes = [
  {path:"" , redirectTo:"/home",pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"aboutus" , component:AboutUsComponent},
  {path:"contact" , component:ContactComponent},

  // i will import the department module which contain the department routing module which i will use in the lazy load 
  //lazy load from server , to not making all routes i will not use come from server at the first request
  
  {path:"departments" ,loadChildren:()=>import("./department/department.module")
                        .then(module=>module.DepartmentModule)},
  
  {path:"students" , loadChildren:()=>import("./student2/student2.module")
                    .then(module=>module.Student2Module) },
  
  
  
  //this is the routes for the student List in frontend Not in the db
  // {path:"students" , component:StudentListComponent,children:[
  //   {path:"details/:id" , component:StudentDetailsComponent},
  // ]},
  // {path:"students/add" , component:AddStudentComponent},

  {path:"**" ,component: NotFoundComponent},
 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
