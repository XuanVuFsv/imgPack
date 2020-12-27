import { GetImageService } from './../../../services/get-image.service';
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
  @Input() id: any;
  @Input() isOwner: boolean;
  @Output() viewImage = new EventEmitter<any>();
  @Output() deleteImage = new EventEmitter<any>();

  constructor(private imageService: GetImageService) { }

  ngOnInit(): void {
    console.log(this.isOwner);
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

  DeleteImage(): void {
    this.deleteImage.emit(this.id);
    this.imageService.DeleteImage(this.id).subscribe(data => {
      // console.log(data);
    });
  }
}
