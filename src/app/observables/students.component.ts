import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentDataservice: DataService) {}

  ngOnInit() {
    const studentsObservable = this.studentDataservice.getStudents();
      studentsObservable.subscribe((studentsData: Student[]) => {
           this.students = studentsData;
      });
  }

}
