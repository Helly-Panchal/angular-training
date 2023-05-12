import { Injectable } from "@angular/core";
import { IStudent } from "../interfaces/student.interface";

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  public students: IStudent[] = [
    {
      name: 'Helly',
      course: 'angular',
      marks: 550,
      DOB: new Date('11-12-2001'),
      gender: 'Female'
    },
    {
      name: 'Arti',
      course: 'ROR',
      marks: 510,
      DOB: new Date('05-08-2002'),
      gender: 'Female'
    },
    {
      name: 'Yash',
      course: 'react',
      marks: 480,
      DOB: new Date('07-07-2000'),
      gender: 'Male'
    },
    {
      name: 'Mohit',
      course: '.Net',
      marks: 560,
      DOB: new Date('11-11-2001'),
      gender: 'Male'
    },
    {
      name: 'Khushbu',
      course: 'Python',
      marks: 520,
      DOB: new Date('05-09-2001'),
      gender: 'Female'
    }
  ]

  public totalMarks: number = 600;
}
