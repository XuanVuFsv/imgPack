import { CollectionsService } from './../../../services/collections.service';
import { IImageUsers } from './../../../models/imageUsers';
import { IProFile } from './../../../models/proFile';
import { PersonalProfileService } from './../../../services/personal-profile.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-image-collection',
  templateUrl: './view-image-collection.component.html',
  styleUrls: ['./view-image-collection.component.scss']
})
export class ViewImageCollectionComponent implements OnInit {

  fullImageSource: string;
  isOverSize: boolean;
  currentWidth: number;
  currentHeight: number;
  @ViewChild('fullimage') fullImage: ElementRef;
  limitSize: number = 500;

  collection = {
    src: null,
    imageDescription: '',
    imageDate: Date
  };
  currentCollectionName: string;
  currentFullImageIndex: number = 0;

  imagesByColumn: any[] = new Array();
  imagesIdByColumn: any[] = new Array();
  images: string[];
  idImage: string[];
  currentFullImageInfor = {
    name: '',
    date: null,
    position: ''
  };
  isHasImage: boolean;

  constructor(private profileDataService: CollectionsService, private personalProfileService: PersonalProfileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let currentCollectionIndex = params.get('id');
      this.profileDataService.GetCollectionsData()
        .subscribe(data => {
          this.currentCollectionName = data.data[currentCollectionIndex]['name'];
          this.profileDataService.GetImageByCollection(data.data[currentCollectionIndex]['_id']).subscribe(images => {
            this.collection['src'] = images['data']['images'].map(x => x['source']);
            this.collection['idImage'] = images['data']['images'].map(x => x['_id']);
            this.images = this.collection['src'];
            this.idImage = this.collection['idImage'];
            if (this.images.length > 0) {
              this.isHasImage = true;
            } else {
              this.isHasImage = false;
            }

            this.collection['imageDescription'] = images['data']['images'].map(x => x['description']);
            this.collection['imageDate'] = images['data']['images'].map(x => new Date(x['createdAt']));
            this.CreateImageByColumn();
          });
          // console.log(this.collections);
        });
    });
  }

  CreateImageByColumn(): void {
    let count = 0;
    // console.log('images', this.images);
    for (let i = 0; i < 6; i++) {
      this.imagesByColumn[i] = new Array();
    }
    // console.log('images by column', this.imagesByColumn);

    for (let [index, imageSource] of this.images.entries()) {
      // console.log('image', image);
      this.imagesByColumn[count % 6].push({
        source: imageSource,
        id: this.idImage[index]
      });
      count++;
    }
  }

  ShowFullImage(dataImage: object): void {
    this.fullImageSource = dataImage['source'];
    this.currentFullImageIndex = dataImage['indexImg'];
    this.currentWidth = dataImage['width'] * 4;
    this.currentHeight = dataImage['height'] * 4;

    let time = this.collection['imageDate'][dataImage['index']];
    this.currentFullImageInfor = {
      name: this.collection['imageDescription'][dataImage['index']],
      date: time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear(),
      position: (this.collection['src'].length > 0 ? (dataImage['index'] + 1) : 0) + '/' + this.collection['src'].length
    };
    console.log(this.currentFullImageInfor);
  }

  ResizeImage(): void {
    const width = this.fullImage.nativeElement.width * 4;
    const height = this.fullImage.nativeElement.height * 4;
    let newWidth = width;
    let newHeight = height;
    let isVertical: boolean;

    if (width > this.limitSize) {
      newHeight = this.limitSize * height / width;
      newWidth = this.limitSize;
    }

    if (newHeight > this.limitSize) {
      newWidth = this.limitSize * newWidth / newHeight;
      newHeight = this.limitSize;
    }

    this.ApplySize(newHeight, newWidth);
  }

  ApplySize(newHeight: number, newWidth: number) {
    this.fullImage.nativeElement.height = newHeight;
    this.fullImage.nativeElement.width = newWidth;
  }

  DeleteImage(id: string): void {
    let pIndex: number = -1;
    let childIndex: number = -1;

    for (let [index, imageColumn] of this.imagesByColumn.entries()) {
      let temp = imageColumn.map(x => x.id).indexOf(id);
      if (temp >= 0) {
        childIndex = temp;
        pIndex = index;
      }
      if (pIndex > -1 && childIndex > -1)
      {
        this.imagesByColumn[pIndex].splice(childIndex, 1);
        return;
      }
    }
  }

  ChangeFullImage(isPrevious: boolean) {
    if (isPrevious) {
      this.currentFullImageIndex === 0 ? this.currentFullImageIndex = this.collection['src'].length - 1
        : this.currentFullImageIndex--;
    }
    else {
      this.currentFullImageIndex === this.collection['src'].length - 1 ? this.currentFullImageIndex = 0
        : this.currentFullImageIndex++;
    }
    this.fullImageSource = this.collection['src'][this.currentFullImageIndex];
    this.currentFullImageInfor.position = (this.collection['src'].length > 0 ? (this.currentFullImageIndex + 1) : 0)
      + '/' + this.collection['src'].length;
    let time = this.collection['imageDate'][this.currentFullImageIndex];
    this.currentFullImageInfor.date = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
  }
}
