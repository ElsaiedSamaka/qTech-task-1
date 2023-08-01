import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, IndexRoutingModule],
  declarations: [HomeComponent],
})
export class IndexModule {}
