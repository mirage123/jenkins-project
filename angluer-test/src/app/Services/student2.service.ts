import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student2Model } from '../Models/student2-model';
import { environment } from '../../environments/environment'; // Adjust the path as necessary


@Injectable({
  providedIn: 'root'
})
export class Student2Service {

  baseUrl=environment.baseUrl
  constructor(public http:HttpClient) { }

  getAllStudents(){
    return this.http.get<Student2Model[]>(this.baseUrl)
  }

  getById(id:number){
    return this.http.get<Student2Model>(this.baseUrl+id)
  }

  addStudent(newStudent:Student2Model){
    return this.http.post(this.baseUrl,newStudent)
  }
  deleteStudent(id:number){
    return this.http.delete(this.baseUrl+id)
  }

  // props to bind on it in the edit component
  public editedID1:any ;
  public editedName:any ;
  public editedImage:any ;

  editStudent(id:number , editedStd : Student2Model){

    console.log(editedStd)
    return this.http.put(this.baseUrl +id ,editedStd)

  }


}
