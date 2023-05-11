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

  @ViewChild('form') usersForm!: NgForm;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  public onCreateUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http.post(environment.baseURL + '/users.json', user).subscribe(() => {
      this.getUser();
    });
    // console.log(user);
  }

  public getUser(): void {
    this.http
      .get(environment.baseURL + 'users.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const usersList: any = [];
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            usersList.push(obj);
          });
          return usersList;
        })
      )
      .subscribe({
        next: (response: any) => {
          this.users = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
