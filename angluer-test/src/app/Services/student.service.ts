import { Injectable } from '@angular/core';
import { StudentModel } from '../Models/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //service containing the data and functions 
  //1-data
  studentList:StudentModel []=[
    new StudentModel(1,"Ahmed",24),
    new StudentModel(2,"Moahmed",25),
    new StudentModel(3,"Aly",26),
    new StudentModel(4,"Tarek",27),
  ] 

  getALlStudents(){
    return this.studentList;
  }
  addStudent(newStudent:StudentModel){
    this.studentList.push(newStudent);
  }

  getById(id:Number){

    for (let i = 0; i < this.studentList.length; i++) {
      
      if (this.studentList[i].id == id ) {
        return this.studentList[i]
      }
      
    }
    return null;
  }
  edit(editStudent:StudentModel){
    for (let i = 0; i < this.studentList.length; i++) {
      
      if (this.studentList[i].id == editStudent.id ) {
        
        this.studentList[i] = editStudent
        
        return this.studentList[i]; 
      }
      
    }
    return null;
  }

  delete(id:Number){
    let index = -1 ;
   
    this.studentList.forEach(element => {
      index++;
      if (element.id == id) {
        this.studentList.splice(index,1)
      }
    });
  }


}
