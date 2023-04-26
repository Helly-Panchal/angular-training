import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
})
export class ComponentTwoComponent {
  public task: string = '';

  @Output() addTaskData = new EventEmitter<string>();
  @Output() clearAllData = new EventEmitter<string>();

  public addTask(task: string): void {
    if (task == '') {
      alert('Please enter the task..!!!');
    } else {
      this.addTaskData.emit(task);
      this.task = '';
    }
  }

  public clearAll(): void {
    this.clearAllData.emit();
  }
}
