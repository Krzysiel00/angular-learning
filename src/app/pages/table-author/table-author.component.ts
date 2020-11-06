import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {Author} from '../../models/author';

@Component({
  selector: 'app-table-author',
  templateUrl: './table-author.component.html',
  styleUrls: ['./table-author.component.css']
})
export class TableAuthorComponent {
  @Input() author: Author;
}
