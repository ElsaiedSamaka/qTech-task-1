import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit() {}
}
