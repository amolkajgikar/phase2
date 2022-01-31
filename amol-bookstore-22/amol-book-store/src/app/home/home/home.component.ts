import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/auth/book/models/book.model';
import { BookService } from 'src/app/auth/book/services/service.service';
//import { BookModel } from 'src/app/auth/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }
  // books: BookModel[];
  
//life cycle hook, component initialize
// Steps:
  // To call api from angular.
  // 1. call api from home component (Bad Practice)
      // because it violates single resposni..
      // component is responsible only ro handle html
  // 2. to create a service which will call api.
      // 


  // Constructor injection of dependencies.
  constructor(private bookService: BookService) { }

  book: BookModel[];

  // Lifecycle hook, component is initialized
  ngOnInit(): void {
    this.book = [];

    // const instanceOfBookService = new BookService();
    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.book=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )
  }

}
    // let book = new BookModel();
    // book.id = 1;
    // book.name = "Sidhhartha";
    // book.price = 200;
    // book.author = "Herman H";
    // book.imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Siddhartha_%281922%29_by_Hermann_Hesse.jpg";
    // this.books.push(book);
    
    // let book2 = new BookModel();
    // book2.id = 2;
    // book2.name = ".Net 2.0";
    // book2.price = 200;
    // book2.author = "Xyz Pub.";
    // book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg";
    // this.books.push(book2);
    
//   }

// }
