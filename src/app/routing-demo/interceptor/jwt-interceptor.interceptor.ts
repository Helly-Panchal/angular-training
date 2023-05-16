import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');

    if (token) {
      // Clone
      let req = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      });
      request = req;
    }
    return next.handle(request);
  }
}
