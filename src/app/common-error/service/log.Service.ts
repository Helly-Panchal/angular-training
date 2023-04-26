import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logInformation(x: string): void {
    console.info(x);
  }
}
