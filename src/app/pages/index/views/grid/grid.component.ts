import { Component, OnInit } from '@angular/core';
import { GridHeaderComponent } from '../grid-header/grid-header.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [GridHeaderComponent],
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
