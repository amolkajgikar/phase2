import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
// book cart take a books
  @Input() book:BookModel;
  constructor() { }

  ngOnInit(): void {
  }

}
