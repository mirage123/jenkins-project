import { Component, Input ,OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router'

import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  selectedDept:DepartmentModel = new DepartmentModel (0,"","");
  
  constructor(public departmentService:DepartmentService,public router:Router,
              public activatedRoute:ActivatedRoute) {}

  ngOnInit(){
  
    // any changes in ther url this subscribe on params on activatedRoute will catch it and send it and the departmentserice will send a new request to the backend
    this.activatedRoute.params.subscribe(param=>{
      this.departmentService.getDeptById(param['id']).subscribe(data=>{
        this.selectedDept = data;
      })
    })
  
  }



  cancel(){
    this.router.navigateByUrl("/departments")
  }

}
