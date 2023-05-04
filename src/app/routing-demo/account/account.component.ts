import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  public accountsList: string[] = [
    'Account - 1',
    'Account - 2',
    'Account - 3',
    'Account - 4',
    'Account - 5',
    'Account - 6',
  ];
}
