import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student2Model } from 'src/app/Models/student2-model';
import { Student2Service } from 'src/app/Services/student2.service';

@Component({
  selector: 'app-student2-details',
  templateUrl: './student2-details.component.html',
  styleUrls: ['./student2-details.component.css']
})
export class Student2DetailsComponent implements OnInit {

  studentDetails : Student2Model = new Student2Model (0,"","","")
  constructor(public student2Service:Student2Service,public activatedRoute:ActivatedRoute ){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(param=>{
      this.student2Service.getById(param['id']).subscribe(data=>{
        this.studentDetails = data;

        this.studentDetails.department = data.department.name 
        
        console.log(data.department.name)
      })
    })
  }

}
