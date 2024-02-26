import { Component } from '@angular/core';
import { Router} from '@angular/router'

import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  newDept : DepartmentModel = new DepartmentModel (0,"","");
  DeptList: DepartmentModel[]=[] ;


  // i inject an object from type RouterService because it's contain the navigationbyUrl method
  // i need to import the Router Service From the router Module '@angular/router' 
  constructor(public departmentService:DepartmentService, public router:Router){

  }

  //ishould subsrcibe on every function on the service because of the return type for the methods which is observable
  // post will retrive the data it's already saved in the database
  save(){

    this.departmentService.getAll().subscribe(data=>{
      this.DeptList = data;
    })
    if( this.DeptList.find(element=>element._id == this.newDept._id)){
      alert("this id is already exist")
      return
    }
    if(this.newDept._id == 0 ||  isNaN(this.newDept._id) ){
      alert("Enter A valid ID ")
      return
    }
    if(this.newDept.name == "" || !isNaN(parseInt(this.newDept.name)) ){
          alert("Enter A valid Name ")
          return
    }
    if(this.newDept.location == "" || !isNaN(parseInt(this.newDept.location)) ){
      alert("Enter A valid Location ")
      return
}

    
    this.departmentService.addDepartment(this.newDept).subscribe(data=>{
      console.log(data)
    })
    this.router.navigateByUrl("/departments")
  }

}
