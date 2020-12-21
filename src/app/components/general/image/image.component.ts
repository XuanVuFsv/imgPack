import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {

  @ViewChild('image') imageElement: ElementRef;
  @Input() source: string;
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
        height: this.imageElement.nativeElement.height
      }
    );
  }
}
