import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../models/book';
import {Author} from '../../models/author';
import {DataBaseService} from '../../db/data-base.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.css']
})
export class TableHomeComponent implements OnInit, OnDestroy {

  authors: Observable<Author[]>;


  constructor(private dataBase: DataBaseService) {
  }

  ngOnInit(): void {
    this.authors.pipe().subscribe(val => console.log('asdsadsadsadad' + val));
    this.authors = this.dataBase.getAuthors();
  }

  ngOnDestroy(): void {
  }

}
