import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navElements = ['Dashboard', 'Today\'s Deal', 'Mobile' , 'Electronics', 'Customer service', 'About'];
}
