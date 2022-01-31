import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { } //DI for http client
  loadBookDetails():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:3100/api/book/getAllBooks")
  }
storeBookDetails(book:any): Observable<string>{
  return this.http.post("http://localhost:3100/api/book/storeBook",book,{responseType:'text'});
}

}
