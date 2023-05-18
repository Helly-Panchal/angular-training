import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: any = [];
  public userArray: any = [];
  public authData: Object = {
    username: "",
    password: ""
  }

  // constructor(private http: HttpClient, private router: Router) { }

  constructor(private authService: AuthService, private router: Router) { }

  public getUsers(): void {
    this.authService.getUsers().subscribe((res: any) => {
      this.userArray = res;
    });
  }

  public login(authData: any): void {
    this.authService.login(authData).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.user = res.user;
        this.getUsers();
        if (res.token) {
          this.router.navigate(['/dashboard/home']);
        }
      }
    );
  }
}
