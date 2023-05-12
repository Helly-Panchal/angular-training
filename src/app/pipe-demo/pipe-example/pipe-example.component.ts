import { Component, OnInit } from '@angular/core';
import { IStudent } from './interfaces/student.interface';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  public title: string = "Angular Pipes Demo";
  public heading: string = "Students Details";
  public students!: IStudent[];
  public totalMarks!: number;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

}
