import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css'],
})
export class ComponentThreeComponent {
  @Input() public task!: { id: number; task: string };
  @Output() public deleteTaskData = new EventEmitter<number>();

  public deleteTask(id: number): void {
    this.deleteTaskData.emit(id);
  }
}
