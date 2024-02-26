import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AppRoutingModule } from '../app-routing.module';
// import { StudentService } from '../Services/student.service';



@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    EditStudentComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  exports:[
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  // providers: [StudentService],

})
export class StudentModule { }
