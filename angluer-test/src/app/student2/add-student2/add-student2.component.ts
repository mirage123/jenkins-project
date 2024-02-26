import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';

import { Student2Model } from 'src/app/Models/student2-model';
import { DepartmentService } from 'src/app/Services/department.service';
import { Student2Service } from 'src/app/Services/student2.service';

@Component({
  selector: 'app-add-student2',
  templateUrl: './add-student2.component.html',
  styleUrls: ['./add-student2.component.css']
})
export class AddStudent2Component implements OnInit {

  deptId:number = 2;
  DeptList: DepartmentModel[]=[] ;

  newStudent : Student2Model = new Student2Model(0,"",3,"")
  StudentList: Student2Model[]=[] ;

  constructor(public student2service:Student2Service,public router:Router,public departmentService:DepartmentService){

  }

  save(){

    this.newStudent.department = this.deptId
    this.student2service.getAllStudents().subscribe(data=>{
      this.StudentList = data;
    })

    if( this.StudentList.find(element=>element._id == this.newStudent._id)){
      alert("this id is already exist")
      return
    }
    if(this.newStudent._id == 0 ||  isNaN(this.newStudent._id) ){
      alert("Enter A valid ID ")
      return
    }
    if(this.newStudent.name == "" || !isNaN(parseInt(this.newStudent.name)) ){
          alert("Enter A valid Name ")
          return
    }
    if(this.newStudent.image == "" || !isNaN(parseInt(this.newStudent.image)) ){
      alert("Enter A valid image ")
      return
    }

    this.student2service.addStudent(this.newStudent).subscribe(data=>{
        console.log(data);
      })
      this.router.navigateByUrl("/students")
  }  


  ngOnInit(){
    this.departmentService.getAll().subscribe(data=>{
      this.DeptList= data;
    })
  }
  
}
