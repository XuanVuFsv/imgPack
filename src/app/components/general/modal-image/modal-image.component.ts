import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  @Input() isFirstImage: boolean;
  @Input() source: string;
  activeClasses = 'carousel-item active';
  inactiveClasses = 'carousel-item';
  constructor() { }

  ngOnInit(): void {
  }

}
