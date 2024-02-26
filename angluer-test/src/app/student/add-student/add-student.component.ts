import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { StudentModel } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  // providers:[StudentService]
})
export class AddStudentComponent {

  //newStudent
  newStudent:StudentModel = new StudentModel (0,"",0)

  //injecting obj from type router to use its prop navigate
  constructor(public studentServiceObj:StudentService, public router:Router) {}
 
  saveStudent(){
    this.studentServiceObj.addStudent(new StudentModel (this.newStudent.id,this.newStudent.name,this.newStudent.age));
    // console.log(this.newStudent)
    // this.router.navigateByUrl("/students")
    this.router.navigate(["/students"])
  }

}
