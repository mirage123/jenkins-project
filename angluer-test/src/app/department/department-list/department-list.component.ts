import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  //crating an arr pro to contain the data comming from get all func
  departmentList : DepartmentModel[] = []

  constructor( public departmentService : DepartmentService ,public router:Router){

  }

  // i will use oninit because its work after the ctor one time only and will initial the list value for me right away after the ctor run or if i called the departmentlist.comp.ts at any other place 
  ngOnInit(){
    //i used the subscribe here because the observable type i should subscripe on it to recive the data he response  in data param
    this.departmentService.getAll().subscribe((data)=>{
        this.departmentList = data;
    });
  }

  delete(id:number){
    if (confirm("are you sure ?")) { 

      this.departmentService.deleteById(id).subscribe(data=>{   
        console.log(data)

        this.router.navigate(["/"])
        .then(()=>{
          this.router.navigate(["departments"])
        })

      })
      
    }
  }

  sendId(id : number){
  this.departmentService.editedID = id
  }

}