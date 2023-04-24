import { Component, Input } from '@angular/core';

//interface
import { ICardDetails } from '../interfaces/book-item.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() cardDetailsObject!: ICardDetails[];

  constructor() {}

  ngOnInit() {}
}
