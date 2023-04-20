import { Component } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  imageUrl = ['../../assets/Images/cardOne.jpg', '../../assets/Images/cardTwo.jpg','../../assets/Images/cardThree.jpg','../../assets/Images/cardFour.jpg','../../assets/Images/cardFive.jpg','../../assets/Images/cardSix.jpg'];
  cardDetailsObject = [
  {
    title: "Card title - 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  },
  {
    title: "Card title - 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  },
  {
    title: "Card title - 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  },
  {
    title: "Card title - 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  },
  {
    title: "Card title - 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  },
  {
    title: "Card title - 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo qui officia non sed illum velit quis! Sapiente tempora quisquam ipsa reiciendis unde quam quibusdam? Explicabo impedit voluptatibus qui ab?voluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui abvoluptatibus qui ab"
  }
];
buttonTitile = "Visit";
}
