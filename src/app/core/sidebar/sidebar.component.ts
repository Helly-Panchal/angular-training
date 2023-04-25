import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public title: string = 'Filters';

  public authorList: string[] = ['Author - 1', 'Author - 2', 'Author - 3'];

  public priceRangeList = [
    {
      minPrice: 0,
      maxPrice: 200,
    },
    {
      minPrice: 201,
      maxPrice: 400,
    },
    {
      minPrice: 401,
      maxPrice: 600,
    },
    {
      minPrice: 601,
      maxPrice: 800,
    },
    {
      minPrice: 801,
      maxPrice: 1000,
    },
  ];
}
