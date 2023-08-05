import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-footer',
  templateUrl: './grid-footer.component.html',
  styleUrls: ['./grid-footer.component.css'],
  standalone: true,
  imports: [NgClass, NgFor],
})
export class GridFooterComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() currentPage: number = this.data['currentPage'];
  totalPages: number = this.data['totalPages'];

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();
  pages: number[] = [];
  constructor() {
    this.pages = this.getPages(this.currentPage, this.totalPages);
    console.log('this.pages', this.pages);
  }

  ngOnInit() {}
  public onGoTo(page: number): void {
    console.log(`Page changed to ${page}`);
    this.goTo.emit(page);
  }
  public onNext(): void {
    console.log('Next page', this.currentPage);
    console.log(this.pages);
    this.next.emit(this.currentPage);
  }
  public onPrevious(): void {
    console.log('Previous page');
    this.previous.emit(this.currentPage);
  }
  getPages(current: number, total: number): number[] {
    if (total <= 7) {
      console.log('total <= 7');
      return Array.from(Array(total).keys()).map((x) => ++x);
    }

    if (current > 5) {
      console.log('current > 5');
      if (current >= total - 4) {
        console.log('current >= total - 4');
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
      } else {
        console.log('else');
        return [1, -1, current - 1, current, current + 1, -1, total];
      }
    }
    return [1, 2, 3, 4, 5, -1, total];
  }
}
