import { Component } from '@angular/core';
import { INavElements } from '../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public navElements: INavElements[] = [
    {
      title: 'Dashboard',
      link: 'https://www.google.com',
    },
    {
      title: "Today's Deal",
      link: '#',
    },
    {
      title: 'Mobile',
      link: '#',
    },
    {
      title: 'Electronics',
      link: '#',
    },
    {
      title: 'Customer service',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
  ];
}
