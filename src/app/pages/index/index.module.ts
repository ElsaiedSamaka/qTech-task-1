import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { GridComponent } from './views/grid/grid.component';

@NgModule({
  imports: [CommonModule, IndexRoutingModule, GridComponent],
  declarations: [HomeComponent],
})
export class IndexModule {}
