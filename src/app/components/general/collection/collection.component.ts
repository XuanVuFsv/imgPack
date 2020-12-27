import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input() preview: string;
  @Input() name: string;
  @Input() num: number;
  @Input() date: Date;
  @Input() index: number;
  @Output() viewCollection = new EventEmitter<number>();

  @ViewChild('imagePreview') imagePreview: ElementRef;
  isHasImage: boolean;
  limitSize: number = 345;

  @Output() viewImage = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    if (this.preview) {
      this.isHasImage = true;
    }
    else {
      this.isHasImage = false;
    }
    this.date = new Date();
  }

  ResizeImage(): void {
    const width = this.imagePreview.nativeElement.width;
    const height = this.imagePreview.nativeElement.height;
    if (width / height > 0.5 && width / height < 1) {
      console.log(width / height);
      this.limitSize = 250;
    }
    let newWidth = width;
    let newHeight = height;

    console.log(width, height);

    if (width > this.limitSize) {
      newHeight = this.limitSize * height / width;
      newWidth = this.limitSize;
      // console.log('width > 500 ->', newWidth, newHeight);
    }

    if (newHeight > this.limitSize) {
      newWidth = this.limitSize * this.limitSize / newHeight;
      newHeight = this.limitSize;
      // console.log('height > 500 ->', newWidth, newHeight);
    }

    this.imagePreview.nativeElement.height = newHeight;
    this.imagePreview.nativeElement.width = newWidth;

    // console.log(newWidth, newHeight);
  }
  ViewCollection(): void {
    this.viewCollection.emit(this.index);
  }
}
