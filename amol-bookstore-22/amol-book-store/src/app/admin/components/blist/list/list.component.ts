import { Component, Input, OnInit } from '@angular/core';
import { BookModule } from 'src/app/auth/book/book.module';
import { BookModel } from 'src/app/auth/book/models/book.model';
import { BookService } from 'src/app/auth/book/services/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() book: BookModule[];
  

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.book = [];
    const booksObservable = this.bookService.getBooks();
    booksObservable.subscribe(
      // result is available
      (result: BookModel[]) => {
        this.book = result;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Done');
      }
    );
  }

}