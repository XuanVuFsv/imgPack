import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {

  @ViewChild('image') imageElement: ElementRef;
  @Input() source: string;
  @Input() index: number;
  @Output() viewImage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ViewImage(): void {
    this.viewImage.emit(
      {
        source: this.source,
        width: this.imageElement.nativeElement.width,
        height: this.imageElement.nativeElement.height,
        index: this.index
      }
    );
  }
}
