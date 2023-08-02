import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit() {}
}
