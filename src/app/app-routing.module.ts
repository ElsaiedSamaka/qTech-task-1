import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/index/components/home/home.component';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('./pages/index/index.module').then((m) => m.IndexModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
