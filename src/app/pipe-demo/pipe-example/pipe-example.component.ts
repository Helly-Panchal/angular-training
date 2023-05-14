import { Component, OnInit } from '@angular/core';
import { IStudent } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  public title: string = "Angular Pipes Demo";
  public heading: string = "Students Details";
  public studentsData!: IStudent[];
  public totalMarks!: number;
  public filterText: string = "";
  public totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.studentsData.length);
    }, 2000);
  });

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsData = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  public addDummyStudent(): void {
    // reference not changed
    this.studentsData.push({
      name: 'ABC',
      course: 'Python',
      fees: 4000,
      marks: 320,
      DOB: new Date('09-09-2001'),
      gender: 'Female'
    })

    // reference changed
    // let studentCopy = Object.assign([], this.studentsData);
    // studentCopy.push({
    //   name: 'ABC',
    //   course: 'Python',
    //   fees: 4000,
    //   marks: 320,
    //   DOB: new Date('09-09-2001'),
    //   gender: 'Female'
    // });
    // this.studentsData = studentCopy;
  }

  public changeGender(): void {
    // change gender of the first student within the table

    // reference is not changed, just simply changing value of a property
    this.studentsData[0].gender = 'Male';

    // reference changed
    // let studentCopy: IStudent[] = Object.assign([], this.studentsData);
    // studentCopy[0].gender = 'Male';
    // this.studentsData = studentCopy;
  }
}
