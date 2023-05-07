import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public location: string = 'Ahmedabad';

  @ViewChild('form') firstTemplateDrivenForm!: NgForm;

  // public onSubmit(form: NgForm) : void {
  //   console.log(form);
  // }

  public onSubmit() {
    console.log(this.firstTemplateDrivenForm);
  }
}
