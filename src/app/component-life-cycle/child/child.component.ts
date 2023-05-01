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
  ContentChild,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
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
  public message: string = 'Counter - 0';
  public counter: number = 0;
  public isVisible: boolean = false;

  @Input() messageFromParent!: string;
  @Output() messageFromChild = new EventEmitter<string>();
  @ContentChild('headChildOne') contentChildHeading!: ElementRef;
  @ViewChild('checkBox') checkBox!: ElementRef;

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
    console.log(this.contentChildHeading);
    this.contentChildHeading?.nativeElement.setAttribute('style', 'color:blue');
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

  public clickCheckBox(): void {
    this.isVisible = this.checkBox.nativeElement.checked;
  }

  public sendDataFromChild(): void {
    this.messageFromChild.emit('Message from the child component');
  }
}
