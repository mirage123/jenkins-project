import { Component } from '@angular/core';
import { StudentModel } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // providers:[StudentService]
})
export class StudentListComponent  {

  //now i need to define a prp from type array to assign the data from the service into it(by using the object i already defined in the ctor )
  // and then i can use it in my component 
  studentsList:StudentModel[]=[];

  //in the ctor i recived the injection from the DIP now i have an object from the type student service
  // i inject the object into a prop to be reusable and i can use it's fuctions in my compo because i will not be able to use it if it was just a param
  constructor(public studentServiceObj : StudentService) {
  //here i need to call the function from service to provide me with the data because it's private and i can use it only through the funcs
   this.studentsList = studentServiceObj.getALlStudents()   
  }

  studentId :Number =  0;
  editStudentId : Number = 0;
  x :boolean =  false
  // editedStudentName :String = ""
  // editedStudentAge :Number = 0

  
  onEdit(id:Number){
    this.editStudentId = id;


    // console.log(this.editStudentId);
    
  }
  onDelete(id:Number){

    this.studentServiceObj.delete(id)
  }

  onDetails(id:Number){
    this.studentId=id;
    this.x = true;
  }

  
}
