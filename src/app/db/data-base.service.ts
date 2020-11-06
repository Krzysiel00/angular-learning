import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {BehaviorSubject, Observable} from 'rxjs';
import {authors, books} from './db';
import {Author} from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private database: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  private databaseAuthor: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([]);

  constructor() {
    this.databaseAuthor.next(authors);
    this.database.next(books);
  }

  getBooks(): Observable<Book[]> {
    return this.database.asObservable();
  }

  getAuthors(): Observable<Author[]> {
    return this.databaseAuthor.asObservable();
  }

}
