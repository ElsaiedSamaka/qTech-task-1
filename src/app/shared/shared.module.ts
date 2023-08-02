import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ModalComponent, PopupComponent, InputComponent],
  exports: [ModalComponent, PopupComponent, InputComponent],
})
export class SharedModule {}
