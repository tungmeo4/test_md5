import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {
    this.findAllBook();
  }

  ngOnInit(): void {
  }

  findAllBook() {
    this.bookService.findAll().subscribe(data => {
      this.bookList = data;
    })
  }
}
