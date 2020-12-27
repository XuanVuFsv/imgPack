import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PersonalProfileService } from '../../../../services/personal-profile.service';
import { IProFile } from '../../../../models/proFile';
import { IImageUsers } from '../../../../models/imageUsers';
@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss'],
})
export class UserImagesComponent implements OnInit {
  followers: number;
  fullImageSource: string;
  isOverSize: boolean;
  currentWidth: number;
  currentHeight: number;
  userData: any;
  userImage: any;
  @ViewChild('fullimage') fullImage: ElementRef;
  imagesByColumn: any[] = new Array();
  public userId;
  datas: IProFile;
  datasImage: IImageUsers[] = [];
  images: any[];
  imagesId: string[];
  imagesSource: string[];
  personal: IProFile;
  idPersonal: any;
  isOwner: boolean;

  constructor(
    private route: ActivatedRoute,
    private proFileService: PersonalProfileService
  ) { }

  ngOnInit(): void {
    this.getMe();

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
      // console.log('id', this.userId);
      // get profile by id
      this.userData = this.proFileService
        .getUsers(this.userId)
        .subscribe((data) => {
          this.datas = data['data'];
          // console.log('data cua tui', this.datas);
          this.followers = this.datas.analytics.followers;
        });
      //  get image by id
      this.proFileService
        .getImageUsers(this.userId)
        .subscribe((data) => {
          this.datasImage = data['data'];
          // console.log('1', this.datasImage);
          this.CreateImageByColumn();
          // this.onSelectFollow();
          // this.onSelectUnFollow();
        });
    });

  }

  getMe() {
    this.idPersonal = this.proFileService.getMe().subscribe((data) => {
      this.personal = data['data'];
      this.idPersonal = this.personal.users._id;
      if (this.idPersonal === this.userId) this.isOwner = true;
      else this.isOwner = false;
    });
  }
  onSelectFollow() {
    this.proFileService.follow(this.userId).subscribe();
    this.datas.analytics.isFollowed = !this.datas.analytics.isFollowed;
    this.datas.analytics.followers++;
    this.followers = this.datas.analytics.followers;
    // console.log('follow', this.datas.analytics.isFollowed,this.datas.analytics.followers, this.followers);
  }
  onSelectUnFollow() {
    this.proFileService.unfollow(this.userId).subscribe();
    this.datas.analytics.isFollowed = !this.datas.analytics.isFollowed;
    this.datas.analytics.followers--;
    this.followers = this.datas.analytics.followers;
    // console.log('unfollow', this.datas.analytics.isFollowed,this.datas.analytics.followers,this.followers);
  }
  CreateImageByColumn(): void {
    let count = 0;
    // console.log('images', this.images);
    for (let i = 0; i < 6; i++) {
      this.imagesByColumn[i] = new Array();
    }
    // console.log('images by column', this.imagesByColumn);

    for (let image of this.datasImage) {
      // console.log('image', image);
      this.imagesByColumn[count % 6].push(image);
      count++;
    }
    // console.log('images by column', this.imagesByColumn);
  }

  ShowFullImage(dataImage: object): void {
    this.fullImageSource = dataImage['source'];
    this.currentWidth = dataImage['width'] * 4;
    this.currentHeight = dataImage['height'] * 4;
  }

  ResizeImage(): void {
    const width = this.currentWidth;
    const height = this.currentHeight;
    let newWidth = width;
    let newHeight = height;

    // console.log(width, height);

    if (width > 500) {
      newHeight = (500 * height) / width;
      newWidth = 500;
      // console.log('width > 500 ->', newWidth, newHeight);
    }

    if (newHeight > 500) {
      newWidth = (500 * 500) / newHeight;
      newHeight = 500;
      // console.log('height > 500 ->', newWidth, newHeight);
    }

    this.fullImage.nativeElement.height = newHeight;
    this.fullImage.nativeElement.width = newWidth;

    // console.log(newWidth, newHeight);
  }

  DeleteImage(datatImage): void {
    this.imagesByColumn[datatImage['i']].splice(datatImage['j'], 1);
  }
}
