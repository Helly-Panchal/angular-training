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
      fees: 2000,
      DOB: new Date('11-12-2001'),
      gender: 'Female'
    },
    {
      name: 'Arti',
      course: 'ROR',
      fees: 5000,
      marks: 510,
      DOB: new Date('05-08-2002'),
      gender: 'Female'
    },
    {
      name: 'Yash',
      course: 'react',
      fees: 9000,
      marks: 480,
      DOB: new Date('07-07-2000'),
      gender: 'Male'
    },
    {
      name: 'Mohit',
      course: '.Net',
      fees: 7000,
      marks: 560,
      DOB: new Date('11-11-2001'),
      gender: 'Male'
    },
    {
      name: 'Khushbu',
      course: 'Python',
      fees: 4000,
      marks: 520,
      DOB: new Date('05-09-2001'),
      gender: 'Female'
    }
  ]

  public totalMarks: number = 600;
}
