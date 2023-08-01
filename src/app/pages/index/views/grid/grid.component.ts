import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridActionsComponent } from '../grid-actions/grid-actions.component';
import { GridFooterComponent } from '../grid-footer/grid-footer.component';
import { GridHeaderComponent } from '../grid-header/grid-header.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [
    GridHeaderComponent,
    GridActionsComponent,
    GridFooterComponent,
    TableComponent,
    SharedModule,
  ],
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
