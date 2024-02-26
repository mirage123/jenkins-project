import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';

import { StudentModel } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnDestroy {

  studentId :Number = 0
  studentDetails:StudentModel |null  = null;

  constructor(public studentService:StudentService,public activatedRoute : ActivatedRoute){

  }

  //we will creat an obj from subscribtion to unsubscripe the always watching url in params.subscribe
  urlSubscription:Subscription | null = null;

  ngOnInit(){
      
      this.activatedRoute.params.subscribe((url)=>{
      this.studentDetails=this.studentService.getById(url['id']);
    })
    // this.studentDetails = this.studentService.getById(this.activatedRoute.snapshot.params['id'])

  }
  // ngOnChanges(){

  //   this.studentDetails = this.studentService.getById(this.studentId)
    
  // }
  ngOnDestroy(){
    this.urlSubscription?.unsubscribe(); 
    // console.log("destroyed")
  }

  

}
