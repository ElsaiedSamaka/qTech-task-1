import { Component, OnInit } from '@angular/core';
import { GridActionsComponent } from '../grid-actions/grid-actions.component';
import { GridHeaderComponent } from '../grid-header/grid-header.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [GridHeaderComponent, GridActionsComponent],
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
