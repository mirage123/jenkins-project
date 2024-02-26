import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from '../Models/department-model';

@Injectable({
  providedIn: 'root'
})
// i will use the httpclient service to connect with the backend 
//i should inject the ctor with object from httpclient service so i should import the module which will provide me this service which is the httpClientModule ishould import it in the app module so all the modules and services could use it 
export class DepartmentService {
  
  baseURL = "http://localhost:8080/departments/"

  constructor(public http:HttpClient) { }

  getAll(){
    // http methos return observable type i need to give him the type of the retured data from the db and also subscribe on it so when the request response with data will display the data inside my compo without stopping other tasks this compo is working on .. because the observable data are async return type will not wait until the response back to complete other tasks
    // console.log(this.http.get<DepartmentModel[]>(this.baseURL)) 
    return this.http.get<DepartmentModel[]>(this.baseURL) 

  }

  // i will recive the object from the compo.ts from as a param
  addDepartment(newDept:DepartmentModel){
    return this.http.post<DepartmentModel>(this.baseURL,newDept)
  }

  getDeptById(id:number){
    return this.http.get<DepartmentModel>(this.baseURL+id)
  }

  deleteById(id:number){
    return this.http.delete(this.baseURL+id)
  }

  public editedID:number = 0;
  edit(id:number,editedDept:DepartmentModel){
    console.log(editedDept)
    return this.http.put(this.baseURL+id,editedDept)

  }


}
