import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public genders = ['Male', 'Female'];
  public firstReactiveForm!: FormGroup;
  public forbiddenPasswords = ['1234567890', 'abcdefgh'];
  public isSubmitted: boolean = false;
  public user = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    location: '',
    gender: '',
    hobbies: [],
    rememberMe: false,
  };

  ngOnInit(): void {
    this.initializeForm();

    // value changes observable
    this.firstReactiveForm.get('firstName')?.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      console.log(value);
    });

    // status changes observable
    this.firstReactiveForm.statusChanges.subscribe((status) => {
      // console.log(status);
    });
  }

  public initializeForm(): void {
    this.firstReactiveForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmail as AsyncValidatorFn),
        password: new FormControl(null, [Validators.required, this.checkForbiddenPassword.bind(this)]),
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
    this.isSubmitted = true;
    this.user.firstName = this.firstReactiveForm.value.firstName;
    this.user.lastName = this.firstReactiveForm.value.lastName;
    this.user.emailId = this.firstReactiveForm.value.login.email;
    this.user.password = this.firstReactiveForm.value.login.password;
    this.user.hobbies = this.firstReactiveForm.value.hobbies;
    this.user.gender = this.firstReactiveForm.value.gender;
    this.user.location = this.firstReactiveForm.value.location;
    this.user.rememberMe = this.firstReactiveForm.value.remember;

    this.firstReactiveForm.reset({ 'gender': 'Male', 'location': 'BRD' });
  }

  public addHobby(): void {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.firstReactiveForm.get('hobbies')).push(formControl);
  }

  public getHobby() {
    return (<FormArray>this.firstReactiveForm.get('hobbies')).controls;
  }

  public checkForbiddenPassword(control: FormControl): { [k: string]: boolean } | null {
    if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
      return { passwordForbidden: true };
    } else {
      return null;
    }
  }

  public checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ emailForbidden: true });
        }
        else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  public setValueMethod(): void {
    this.firstReactiveForm.setValue({
      login: {
        email: 'john@gmail.com',
        password: 'John@123',
      },
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      location: 'AHD',
      remember: true,
      hobbies: [],
    });
  }

  public patchValueMethod(): void {
    this.firstReactiveForm.patchValue({
      gender: 'Female',
      location: 'BRD',
      remember: false,
    });
  }
}
