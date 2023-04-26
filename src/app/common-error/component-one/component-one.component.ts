import { Component } from '@angular/core';
import { LogService } from '../service/log.Service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent {
  public heading: string = 'TODO List';
  public taskList: Array<string> = [];

  constructor(private logService: LogService) {}

  public addTask(task: string): void {
    this.taskList.push(task);
    this.logService.logInformation('Added task : ' + task);
  }

  public deleteTask(id: number): void {
    const task = this.taskList.splice(id, 1)[0];
    this.logService.logInformation(
      'Deleted task id and task : ' + id + ' - ' + task.toString()
    );
  }

  public clearAll(): void {
    this.taskList = [];
  }
}
