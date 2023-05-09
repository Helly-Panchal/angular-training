import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      gender: new FormControl('Male'),
      location: new FormControl('AHD'),
      remember: new FormControl(null),
    });
  }
}
