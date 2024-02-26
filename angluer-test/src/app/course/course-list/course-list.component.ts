import { Component ,Input,Output,EventEmitter } from '@angular/core';
import { CourseModel } from 'src/app/Models/course-model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courseList:CourseModel [] = [
    new CourseModel (1,"MVC",30,2),
    new CourseModel (2,"C#",40,3),
    new CourseModel (3,"node.js",20,4),
    new CourseModel (4,"SQL",60,5)

  ]

  //validation to add course 
  catchCourse(newCourse:CourseModel){
    if( this.courseList.find(element=>element.id == newCourse.id)){
      alert("this id is already exist")
      return
    }
    if(newCourse.id == 0 ||  isNaN(newCourse.id) ){
      alert("Enter A valid ID ")
      return
    }
    if(newCourse.name == "" || !isNaN(parseInt(newCourse.name)) ){
      alert("Enter A valid Name ")
      return
    }
    if(newCourse.duration == 0 || isNaN(newCourse.duration)){
      alert("Enter A valid duration ")
      return
    }
    if(newCourse.rate == 0 || isNaN(newCourse.rate) || newCourse.rate > 5 || newCourse.rate <0  ){
      alert("Enter A valid rate ")
      return
    }
    else{
      this.courseList.push(new CourseModel (newCourse.id,newCourse.name,newCourse.duration,newCourse.rate))
    }
  }
  // //add course 
  // catchCourse(newCourse:CourseModel){
  //   this.courseList.push(new CourseModel (newCourse.id,newCourse.name,newCourse.duration,newCourse.rate))
  // }
  
  addBtnTitle="Add Course"
  greenAddBtn = false;
  addFlag = true;
  
  showAddDiv(){
    if(this.addFlag== false){
      this.addFlag = true;
      this.addBtnTitle="Add Course"
      this.greenAddBtn = false;

    }
    else{
      this.addFlag = false;
      this.addBtnTitle="Hide Add Course";
      this.greenAddBtn = true;


    }
  }

  //show details
  currentCourseDetails:CourseModel = new CourseModel(0,"",0,0) 
  showDetailsFlag = false;

  showDetails(element : CourseModel){
    this.currentCourseDetails = element;
    this.showDetailsFlag = !this.showDetailsFlag;
  }

  //delet course
  deleteCourse(course:CourseModel){

    let index = -1 ;
   if(confirm("are u sure ?")){
      this.courseList.forEach(element => {
        index++;
        if (course.id == element.id) {
          this.courseList.splice(index,1)
        }
      });
    }
  }
  
  //edit course 

  editFlag=false;
 @Output() currentEditCourse : CourseModel = new CourseModel(1,"",1,1)

 editButton(element:CourseModel){
  this.currentEditCourse = new CourseModel (element.id,element.name,element.duration,element.rate)
  this.editFlag=!this.editFlag
 }

 @Input() finalEditCourse : CourseModel = new CourseModel(2,"",2,2)

saveFinalEdit(final:CourseModel){
  
  this.courseList.forEach((element)=>{
    if(element.id == final.id){
      element.name = final.name
      element.duration = final.duration
      element.rate = final.rate
      this.editFlag=!this.editFlag
      return
    }
  })
}


}
