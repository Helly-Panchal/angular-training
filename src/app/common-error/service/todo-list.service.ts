import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private taskList: { id: number; name: string }[] = [];

  addTask(task: string) {
    if (task) {
      const id = this.taskList.length + 1;
      this.taskList.push({ id: id, name: task });
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }

  getTasksList() {
    return this.taskList;
  }

  clearAll() {
    this.taskList = [];
  }
}
