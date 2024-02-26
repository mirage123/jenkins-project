import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  {path:"" , component:DepartmentListComponent},
  {path:"add" , component:AddDepartmentComponent},
  {path:"details/:id" , component:DepartmentDetailsComponent},
  {path:"edit/:id" , component:EditDepartmentComponent},

];

@NgModule({
  //lazy routing 
  // here i imported the routerModule module and used the for child func, to give it the routes for this module and then export it to the department routing module which will be imported in the app module with this routing module (department-routing-module) and the other component for this module 
  //  so he will use the department module in load childreen 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
