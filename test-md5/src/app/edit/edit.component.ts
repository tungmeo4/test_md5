import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit!: FormGroup;
  id: any;
  book!: Book;

  constructor(private bookService: BookService, private router: Router, private activerouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showEdit();
    });

  }

  saveBook() {
    this.bookService.editBook(this.formEdit.value).subscribe(() => {
      alert("edit thành công")
      this.router.navigate(['/book/list']);
    })

  }

  showEdit() {
    this.bookService.findBookById(this.id).subscribe((data =>{
      this.book = data;
      this.formEdit.get('id')?.setValue(this.book.id);
      this.formEdit.get('title')?.setValue(this.book.title);
      this.formEdit.get('author')?.setValue(this.book.author);
      this.formEdit.get('description')?.setValue(this.book.description);
    }));

  }

}
