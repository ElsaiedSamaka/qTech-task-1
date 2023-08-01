import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule, GridComponent, GridHeaderComponent],
  declarations: [],
  exports: [GridComponent, GridHeaderComponent],
})
export class ViewsModule {}
