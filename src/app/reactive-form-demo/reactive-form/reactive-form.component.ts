import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      hobbies: new FormArray([]),
    });
  }

  public onSubmit(): void {
    console.log('form:', this.firstReactiveForm);
  }

  public addHobby(): void {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.firstReactiveForm.get('hobbies')).push(formControl);
  }

  public getHobby() {
    return (<FormArray>this.firstReactiveForm.get('hobbies')).controls;
  }
}
