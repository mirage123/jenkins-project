import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student2Model } from 'src/app/Models/student2-model';
import { Student2Service } from 'src/app/Services/student2.service';

@Component({
  selector: 'app-student2-list',
  templateUrl: './student2-list.component.html',
  styleUrls: ['./student2-list.component.css']
})
export class Student2ListComponent implements OnInit{
  
  studentsList:Student2Model []= []; 
  constructor(public student2Service:Student2Service,public router:Router){}
  
  ngOnInit(){ 
  
  this.student2Service.getAllStudents().subscribe(data=>{
    this.studentsList = data ;

    this.studentsList.forEach((element)=>{
      element.department = element.department.name
      console.log(element.department)
    })
  
  })


  }
  
  sendEditedStdInfo(id:number,name : string,image:string){
    this.student2Service.editedID1 = id;
    this.student2Service.editedName = name;
    this.student2Service.editedImage = image;

    console.log(id,name)
  }

  Delete(id:number){
    if(confirm("are u sure ? ")){
      this.student2Service.deleteStudent(id).subscribe(data=>{
        console.log(data)
      })

      this.router.navigate(["/"])
      .then(()=>{
        this.router.navigate(["students"])
      })
    } 
  }



  // OnDestroy(){

  // }

}
