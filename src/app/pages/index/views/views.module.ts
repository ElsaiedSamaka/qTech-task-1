import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    GridComponent,
    GridHeaderComponent,
    GridActionsComponent,
  ],
  declarations: [],
  exports: [GridComponent, GridHeaderComponent, GridActionsComponent],
})
export class ViewsModule {}
