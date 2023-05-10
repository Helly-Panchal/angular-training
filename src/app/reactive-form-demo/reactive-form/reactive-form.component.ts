import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public genders = ['Male', 'Female'];
  public firstReactiveForm!: FormGroup;
  public forbiddenPasswords = ['1234567890', 'abcdefgh'];

  ngOnInit(): void {
    this.initializeForm();
    this.firstReactiveForm.valueChanges.subscribe((value) => {
      console.log(value);
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
}
