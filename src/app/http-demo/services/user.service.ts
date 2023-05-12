import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../interfaces/user.interface';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public _baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http
      .get(environment.baseURL + 'users.json')
      .pipe(
        map((res: { [k: string]: any; }) => {
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
      );
  }

  public postUser(user: IUser): Observable<any> {
    return this.http.post(environment.baseURL + '/users.json', user)
  }

  public updateUser(id: string | null, user: IUser): Observable<any> {
    return this.http.put(environment.baseURL + `/users/${id}.json`, user)
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete(environment.baseURL + `/users/${id}.json`)
  }
}
