import { Component } from '@angular/core';

//interface
import { ICardDetails } from '../interfaces/book-item.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public cardDetailsObject: ICardDetails[] = [
    {
      title: 'Card title - 1',
      imageUrl: 'assets/Images/cardOne.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Card title - 2',
      imageUrl: 'assets/Images/cardTwo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Card title - 3',
      imageUrl: 'assets/Images/cardThree.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Card title - 4',
      imageUrl: 'assets/Images/cardFour.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Card title - 5',
      imageUrl: 'assets/Images/cardFive.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Card title - 6',
      imageUrl: 'assets/Images/cardSix.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
  ];
}
