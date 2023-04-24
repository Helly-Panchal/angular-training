import { Component } from '@angular/core';
import { TodoListService } from '../service/todo-list.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent {
  public heading = 'TODO List';
  newTask!: string;

  constructor(private todoListService: TodoListService) {}

  addTask() {
    this.todoListService.addTask(this.newTask);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.todoListService.deleteTask(id);
  }

  get getTasksList() {
    return this.todoListService.getTasksList();
  }

  clearAll() {
    this.todoListService.clearAll();
  }
}
