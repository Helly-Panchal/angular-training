import { Component } from '@angular/core';

//interface
import { IBook } from '../interfaces/book-item.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public booksList: IBook[] = [
    {
      title: 'Book title - 1',
      author: 'Author - 1',
      price: 100,
      imageUrl: 'assets/Images/cardOne.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Book title - 2',
      author: 'Author - 1',
      price: 500,
      imageUrl: 'assets/Images/cardTwo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Book title - 3',
      author: 'Author - 2',
      price: 800,
      imageUrl: 'assets/Images/cardThree.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Book title - 4',
      author: 'Author - 2',
      price: 400,
      imageUrl: 'assets/Images/cardFour.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Book title - 5',
      author: 'Author - 3',
      price: 600,
      imageUrl: 'assets/Images/cardFive.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
    {
      title: 'Book title - 6',
      author: 'Author - 3',
      price: 350,
      imageUrl: 'assets/Images/cardSix.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab',
      imageDescription: 'Book Image',
      buttonTitile: 'Visit',
    },
  ];
}
