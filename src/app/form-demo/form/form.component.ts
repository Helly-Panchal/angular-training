import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public defaultLocation: string = 'AHD';
  public genders = ['Male', 'Female'];

  @ViewChild('form') firstTemplateDrivenForm!: NgForm;

  // public onSubmit(form: NgForm) : void {
  //   console.log(form);
  // }

  public onSubmit(): void {
    console.log(this.firstTemplateDrivenForm);
  }

  setValueMethod() {
    this.firstTemplateDrivenForm.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john123@gmail.com',
      pwd: 'John@123',
      gender: 'Male',
      location: 'AHD',
      remember: true,
    });
  }

  patchValueMethod() {
    this.firstTemplateDrivenForm.form.patchValue({
      location: 'RJT',
      gender: 'Female',
    });
  }
}
