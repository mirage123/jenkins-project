import { Component, Input , OnChanges,OnInit,DoCheck,OnDestroy} from '@angular/core';
import { CourseModel } from 'src/app/Models/course-model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnChanges,OnInit {
  
 @Input() courseDetailsTemp:CourseModel = new CourseModel (0,"",0,0)
 @Input()  detailsFlag :any;

 //1- fire if we called the component 
 // we use it for the dependincy injection 
constructor() {
  console.log("ctor fired")
}
//2-fired after the first tinme the ctor fired then fired after evey changes in the input props
ngOnChanges(){
  console.log("on changes fired")
}
//3-fired one time only in the lifecycle after first time the onchanges fired 
//we use it for the initialization 
ngOnInit(){
 console.log("on init fired")
}

swtich(){
  this.detailsFlag = !this.detailsFlag
}

}
