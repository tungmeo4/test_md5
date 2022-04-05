import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id!: number;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.bookDetail()
    });
  }

  ngOnInit(): void {

  }

  book: Book = new Book(0, '','' ,'');

  bookDetail() {
    this.bookService.findBookById(this.id).subscribe(data => {
      this.book = data
      console.log(this.book)
    })
  }

  deleteBook() {
    this.bookService.deleteBook(this.id).subscribe(() => {
      alert("Xóa thành công!");
      this.router.navigate(['/book/list']);
    })
  }
}
