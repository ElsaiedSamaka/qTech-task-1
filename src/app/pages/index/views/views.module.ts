import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridComponent } from './grid/grid.component';
import { GridFooterComponent } from './grid-footer/grid-footer.component';

@NgModule({
  imports: [
    CommonModule,
    GridComponent,
    GridHeaderComponent,
    GridActionsComponent,
    GridFooterComponent,
  ],
  declarations: [],
  exports: [
    GridComponent,
    GridHeaderComponent,
    GridActionsComponent,
    GridFooterComponent,
  ],
})
export class ViewsModule {}
