import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
    NgIf,
    NgFor,
    NgClass,
    SharedModule,
  ],
})
export class GridComponent implements OnInit {
  users: any[] = [];
  showAddUserModal: boolean = false;
  validators = Validators;
  isFormValid: boolean = false;
  showToast: boolean = false;
  toastType: string = '';
  toastMessage: string = '';
  disableHostScrolling: string = '';
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
  postUser(user: any) {
    this.usersService.post(user).subscribe({
      next: (newUser) => {
        this.closeAddUserModal();
      },
      error: (err) => {
        console.log('error', err);
        this.toastType = 'error';
        this.toastMessage = `err: ${err}`;
        this.toggleToast();
      },
      complete: () => {
        this.toastType = 'success';
        this.toastMessage = 'user add successfly';
        this.toggleToast();
      },
    });
  }
  toggleAddUserModal(emittedValue: boolean) {
    this.showAddUserModal = emittedValue;
  }
  closeAddUserModal() {
    this.showAddUserModal = false;
  }
  toggleToast() {
    this.showToast = !this.showToast;
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }
  onFormSubmitted(emittedValue: any) {
    this.postUser(emittedValue);
  }
  checkFormStatus(emitFormStatus: any) {
    emitFormStatus == 'INVALID'
      ? (this.isFormValid = false)
      : (this.isFormValid = true);
  }
}
