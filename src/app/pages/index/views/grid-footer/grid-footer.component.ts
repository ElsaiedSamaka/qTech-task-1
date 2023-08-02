import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-footer',
  templateUrl: './grid-footer.component.html',
  styleUrls: ['./grid-footer.component.css'],
  standalone: true,
})
export class GridFooterComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit() {}
}
