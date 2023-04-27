import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('firstChildComponent') counterComponent:
    | ChildComponent
    | undefined;

  public increase(): void {
    this.counterComponent?.increamentByOne();
  }

  public decrease(): void {
    this.counterComponent?.decreamentByOne();
  }

  ngOnChanges() {
    console.log('Parent onChanges');
  }

  ngOnInit() {
    console.log('Parent onInit');
  }

  ngDoCheck() {
    console.log('Parent doCheck');
  }

  ngAfterContentInit() {
    console.log('Parent afterContentInit');
    console.log(this.counterComponent);
  }

  ngAfterContentChecked() {
    console.log('Parent afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent afterViewChecked');
    console.log(this.counterComponent);
  }

  ngOnDestroy() {
    console.log('Parent onDestroy');
  }
}
