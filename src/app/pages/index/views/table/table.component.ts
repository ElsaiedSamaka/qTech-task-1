import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
})
export class TableComponent implements OnInit {
  @Input() data: any = {};
  @Output() userToDelete = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  deleteUser(user: any) {
    this.userToDelete.emit(user);
  }
}
