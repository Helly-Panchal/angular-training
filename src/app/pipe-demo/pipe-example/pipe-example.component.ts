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

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsData = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }
}
