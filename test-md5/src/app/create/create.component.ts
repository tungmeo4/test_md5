import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  books!: Book[];
  book: Book = new Book(0, '','' ,'');

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.createBook(this.book).subscribe(() => {
      alert("Tạo thành công!")
      this.router.navigate(['/book/list'])
    })
  }
}
