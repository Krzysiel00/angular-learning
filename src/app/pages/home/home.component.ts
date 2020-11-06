import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataBaseService} from '../../db/data-base.service';
import {Observable, Subscription} from 'rxjs';
import {Book} from '../../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [DatabaseService] // własna instancja serwisu widoczna dla child component
})
export class HomeComponent implements OnInit, OnDestroy {
  books: Observable<Book[]>;
  booksList: Book[];
  // subs: Subscription = new Subscription();

  // serwis globalny - singleton
  constructor(private dataBase: DataBaseService) {
  }

  ngOnInit(): void {
    this.books = this.dataBase.getBooks();
    //  const sub = this.dataBase.getBooks().subscribe( (data: Book[]) => this.booksList = data);
    //  this.subs.add(sub);
  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }

}
