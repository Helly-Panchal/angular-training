import { Component } from '@angular/core';
import { IStudent } from './interfaces/student.interface';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {
  public title: string = "Angular Pipes Demo";
  public students!: IStudent[];
  public totalMarks!: number;

  constructor(private studentService: StudentService) { }
}
