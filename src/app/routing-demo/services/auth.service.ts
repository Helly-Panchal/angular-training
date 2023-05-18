import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: any = [];

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/users');
  }

  public login(authData: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', authData);
  }

  public logout(): any {
    this.user = [];
    return this.user;
  }
}
