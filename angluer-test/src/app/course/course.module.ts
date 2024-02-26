import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { StudentService } from '../Services/student.service';



@NgModule({
  declarations: [
    CourseListComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    EditCourseComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,SharedModule
  ],
  exports:[
    CourseListComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    EditCourseComponent,
  ],
  // providers: [StudentService],

})
export class CourseModule { }
