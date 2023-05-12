import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

// interface
import { IUser } from '../interfaces/user.interface';

// service
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public genders = ['Male', 'Female'];
  public users: IUser[] = [];
  public updatedId: string | null = null;

  @ViewChild('form') usersForm!: NgForm;

  constructor(private http: HttpClient, private userService: UserService,) { }

  ngOnInit(): void {
    this.getUser();
  }

  // get
  public getUser(): void {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response;
      },
      error: (error) => {
        console.log('GET:\n', error);
      },
    });
  }

  // post
  public onCreateUser(userForm: NgForm): void {
    const user = userForm.value;
    this.userService.postUser(user).subscribe({
      next: () => {
        this.getUser();
        userForm.reset();
      },
      error: (error) => {
        console.log('POST:\n', error)
      }
    });
  }

  // set values into the form for update
  public onUpdate(user: IUser, id: string): void {
    this.updatedId = id;
    this.usersForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.age,
      age: user.age,
      gender: user.gender,
      isEmployee: user.isEmployee
    });
  }

  // update
  public updateUser(form: NgForm): void {
    const user = form.value;
    this.userService.updateUser(this.updatedId, user).subscribe(
      {
        next: () => {
          this.getUser();
          form.reset();
        },
        error: (error) => {
          console.log('UPDATE:\n', error);
        },
      }
    );
  }

  // cancel update
  public cancelUpdate(): void {
    this.updatedId = null;
    this.usersForm.reset();
  }

  // delete
  public deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log("delete");
        this.getUser();
      },
      error: (error) => {
        console.log('DELETE:\n', error);
      }
    });
  }
}
