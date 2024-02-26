import { Component, EventEmitter, Output,Input,OnChanges } from '@angular/core';
import { CourseModel } from 'src/app/Models/course-model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent   {


  @Input() currentEditCourse : CourseModel = new CourseModel(0,"",0,0)

  
  finalEditCourse : CourseModel = new CourseModel (1,"",1,1)
  @Output() onSave:EventEmitter<CourseModel> = new EventEmitter<CourseModel>

  bindFinalCourseEdit(){
    this.finalEditCourse= this.currentEditCourse
    this.onSave.emit(this.finalEditCourse)
  }

}
