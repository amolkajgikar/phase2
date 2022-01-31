import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/auth/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  books: BookModel[];
  //Lifecyle hook,component is initilized

  ngOnInit(): void {
    this.books=[];
    let book = new BookModel();
    book.id = 1;
    book.name = "Mrityunjaya";
    book.price = 200;
    book.author = "Shivaji Savanat";
    book.imgSrc = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355655218l/6369447.jpg";
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.name = "Yougandgar";
    book2.price = 200;
    book2.author = "Shivaji Savanat";
    book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/91l-3XkIeYL.jpg";
    this.books.push(book2);
  }

}
