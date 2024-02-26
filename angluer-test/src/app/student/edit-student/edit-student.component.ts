import { Component, Input ,OnChanges} from '@angular/core';
import { StudentModel } from 'src/app/Models/student-model';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnChanges {

  @Input() currentID:Number=0;
  // @Input() currentName:string="";
  // @Input() currentAge:Number=0;
  editedStudent : StudentModel = new StudentModel (0,"",0)

  constructor(public studenService:StudentService) {
    
  }
  ngOnChanges(){
    this.editedStudent.id = this.currentID  
    // this.editedStudent.name = this.currentName  
    // this.editedStudent.id = this.currentAge 
    // console.log(this.editedStudent)
  }

  onSave(){
    this.studenService.edit(new StudentModel(this.editedStudent.id,this.editedStudent.name,this.editedStudent.age))
  }
}
