import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public title: string = 'Sidebar';
  public listItemsDetails: string[] = [
    'Sidebar Item - 1',
    'Sidebar Item - 2',
    'Sidebar Item - 3',
    'Sidebar Item - 4',
    'Sidebar Item - 5',
    'Sidebar Item - 6',
    'Sidebar Item - 7',
    'Sidebar Item - 8',
    'Sidebar Item - 9',
    'Sidebar Item - 10',
  ];
}
