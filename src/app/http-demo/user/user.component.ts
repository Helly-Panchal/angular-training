import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  // post
  public onCreateUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http.post(environment.baseURL + '/users.json', user).subscribe({
      next: () => {
        this.getUser();
        userForm.reset();
      },
      error: (error) => {
        console.log('POST:\n', error)
      }
    });
  }

  // get
  public getUser(): void {
    this.http
      .get(environment.baseURL + 'users.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const usersList: any = [];
          if (res) {
            Object.keys(res).forEach((id) => {
              let val: any = res[id];
              let obj = { id, ...val };
              usersList.push(obj);
            });
          }
          return usersList;
        })
      )
      .subscribe({
        next: (response: any) => {
          this.users = response;
        },
        error: (error) => {
          console.log('GET:\n', error);
        },
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
    this.http.put(environment.baseURL + `/users/${this.updatedId}.json`, user).subscribe(
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

  public cancelUpdate(): void {
    this.updatedId = null;
    this.usersForm.reset();
  }

  // delete
  public deleteUser(id: string): void {
    this.http.delete(environment.baseURL + `/users/${id}.json`).subscribe({
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
