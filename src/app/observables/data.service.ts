import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

export class DataService {

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentnumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];
  constructor() { }

  getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 100);
    });

    return studentsObservable;
  }
}
