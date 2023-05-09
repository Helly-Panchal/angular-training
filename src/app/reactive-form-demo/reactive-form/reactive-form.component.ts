import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public genders = ['Male', 'Female'];
  public firstReactiveForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.firstReactiveForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      }),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      gender: new FormControl('Male'),
      location: new FormControl('AHD'),
      remember: new FormControl(null),
    });
  }

  public onSubmit(): void {
    console.log('form:', this.firstReactiveForm);
  }
}
