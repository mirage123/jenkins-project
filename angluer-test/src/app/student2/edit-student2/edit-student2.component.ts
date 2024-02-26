import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';
import { Student2Model } from 'src/app/Models/student2-model';
import { DepartmentService } from 'src/app/Services/department.service';
import { Student2Service } from 'src/app/Services/student2.service';

@Component({
  selector: 'app-edit-student2',
  templateUrl: './edit-student2.component.html',
  styleUrls: ['./edit-student2.component.css']
})
export class EditStudent2Component {
  //1 id
   id : number =  this.student2Service.editedID1
  //2 name
  name:string = this.student2Service.editedName
  //3 dept
  DeptList: DepartmentModel[]=[] ; 
  deptId:number = 0;
  //4 image
  image:string = this.student2Service.editedImage

  
  editedStudent:Student2Model = new Student2Model (this.id,this.name,this.deptId,this.image)
  studentsList:Student2Model[]=[]
  
  constructor(public student2Service:Student2Service,public activatedRoute:ActivatedRoute,
    public router : Router,public departmentService:DepartmentService){
    }

  save(){
    this.student2Service.getAllStudents().subscribe(data=>{
      this.studentsList= data;
    })

    // if( this.studentsList.find(element=>element._id == this.editedStudent._id)){
    //   alert("this id is already exist")
    //   return
    // }
    // if(this.editedStudent._id == 0 ||  isNaN(this.editedStudent._id) ){
    //   alert("Enter A valid ID ")
    //   return
    // }
    if(this.editedStudent.name == "" || !isNaN(parseInt(this.editedStudent.name)) ){
          alert("Enter A valid Name ")
          return
    }
    if(this.deptId == 0 ){
      alert("select an department ")
      return
    }
    if(this.editedStudent.image == "" || !isNaN(parseInt(this.editedStudent.image)) ){
      alert("Enter A valid image ")
      return
    }


    this.activatedRoute.params.subscribe(param=>{
      this.editedStudent.department = this.deptId; 

      this.student2Service.editStudent(param['id'],this.editedStudent).subscribe(data=>{

      })
      
    })
    this.router.navigate(['students'])
  }


  ngOnInit(){
    this.departmentService.getAll().subscribe(data=>{
      this.DeptList= data;
    });
  }


}
