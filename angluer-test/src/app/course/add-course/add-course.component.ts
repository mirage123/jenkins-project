import { Component ,Output,EventEmitter } from '@angular/core';


import { CourseModel } from 'src/app/Models/course-model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  @Output() onSendCourse:EventEmitter<CourseModel> = new EventEmitter<CourseModel>
  courseTemplete:CourseModel = new CourseModel(0,"",0,0)

  sendCousre(){
    // console.log(this.courseTemplete)
    this.onSendCourse.emit(this.courseTemplete)

  }



}
