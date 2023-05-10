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
  public isSubmitted: boolean = false;
  public user = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    location: '',
    gender: '',
    rememberMe: false,
  };

  @ViewChild('form') firstTemplateDrivenForm!: NgForm;

  // public onSubmit(form: NgForm) : void {
  //   console.log(form);
  // }

  public onSubmit(): void {
    console.log(this.firstTemplateDrivenForm);
    this.isSubmitted = true;
    this.user.firstName = this.firstTemplateDrivenForm.value.firstName;
    this.user.lastName = this.firstTemplateDrivenForm.value.lastName;
    this.user.emailId = this.firstTemplateDrivenForm.value.email;
    this.user.password = this.firstTemplateDrivenForm.value.pwd;
    this.user.gender = this.firstTemplateDrivenForm.value.gender;
    this.user.location = this.firstTemplateDrivenForm.value.location;
    this.user.rememberMe = this.firstTemplateDrivenForm.value.remember;


    this.firstTemplateDrivenForm.reset();
  }

  public setValueMethod(): void {
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

  public patchValueMethod(): void {
    this.firstTemplateDrivenForm.form.patchValue({
      location: 'RJT',
      gender: 'Female',
    });
  }
}
