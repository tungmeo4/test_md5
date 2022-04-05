import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/books");
  }

  findBookById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:3000/books/" + id);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post("http://localhost:3000/books", book);
  }

  editBook(book: Book): Observable<any> {
    return this.http.put("http://localhost:3000/books/" + book.id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/books/" + id)
  }
}
