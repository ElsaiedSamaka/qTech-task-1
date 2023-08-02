import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersService } from 'src/core/services/users.service';
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
  users: any[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.usersService.getAll().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.log('error retreiving users:', err);
      },
      complete: () => {},
    });
  }
}
