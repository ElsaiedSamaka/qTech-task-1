import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent, PopupComponent],
  exports: [ModalComponent, PopupComponent],
})
export class SharedModule {}
