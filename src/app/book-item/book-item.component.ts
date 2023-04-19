import { Component } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  imageUrl = ['../../assets/Images/cardOne.jpg', '../../assets/Images/cardTwo.jpg','../../assets/Images/cardThree.jpg','../../assets/Images/cardFour.jpg','../../assets/Images/cardFive.jpg','../../assets/Images/cardSix.jpg'];
}
