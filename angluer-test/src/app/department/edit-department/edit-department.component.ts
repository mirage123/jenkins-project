import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent {

   id : number = this.departmentServie.editedID
  //  id : any = this.activatedRoute.params.subscribe(param=>{
  //   return param.id  })
  
  editedDept : DepartmentModel = new DepartmentModel(this.id,"","")
  DeptList: DepartmentModel[]=[] ;

  
  constructor(public departmentServie:DepartmentService,public router:Router,
              public activatedRoute:ActivatedRoute) {
    
  }

  save(){
    this.departmentServie.getAll().subscribe(data=>{
      this.DeptList= data;
    })

    if(this.editedDept.name == "" || !isNaN(parseInt(this.editedDept.name)) ){
      alert("Enter A valid Name ")
      return
    }
    if(this.editedDept.location == "" || !isNaN(parseInt(this.editedDept.location)) ){
      alert("Enter A valid image ")
      return
    }

    this.activatedRoute.params.subscribe(param=>{
      
      this.departmentServie.edit(param['id'],this.editedDept).subscribe(data=>{
      })
      
    })
    this.router.navigate(['departments'])
  }

  ngOnInit(){
    this.departmentServie.getAll().subscribe(data=>{
      this.DeptList= data;
    })
  }
}
