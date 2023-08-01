import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [CommonModule, ViewsModule, IndexRoutingModule],
  declarations: [HomeComponent],
})
export class IndexModule {}
