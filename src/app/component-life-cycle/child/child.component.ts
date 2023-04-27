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
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
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
  public message: string = '';
  public counter: number = 0;

  public increamentByOne(): void {
    this.counter = this.counter + 1;
    this.message = 'Counter : ' + this.counter;
  }

  public decreamentByOne(): void {
    this.counter = this.counter - 1;
    this.message = 'Counter : ' + this.counter;
  }

  ngOnChanges() {
    console.log('Child onChanges');
  }

  ngOnInit() {
    console.log('Child onInit');
  }

  ngDoCheck() {
    console.log('Child doCheck');
  }

  ngAfterContentInit() {
    console.log('Child afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child afterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child onDestroy');
  }
}
