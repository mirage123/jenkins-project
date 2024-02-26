import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
//never ever ever ever ever ever ever ever ever ever  import the AppRouting Module into child module ,
// because the child routing(department routing) module will import the rout module which will import the router.forRoot() twice and u will never solve it quick
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DepartmentRoutingModule
  ],
  exports:[
    DepartmentListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent
  ]
})
export class DepartmentModule { }
