import { Component, Input } from '@angular/core';

//interface
import { IBook } from '../interfaces/book-item.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() book!: IBook;

  constructor() {}

  ngOnInit() {}
}
