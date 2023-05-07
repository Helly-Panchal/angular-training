import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('form') firstTemplateDrivenForm!: NgForm;

  // public submit(form: NgForm) : void {
  //   console.log(form);
  // }

  public submit() {
    console.log(this.firstTemplateDrivenForm);
  }
}
