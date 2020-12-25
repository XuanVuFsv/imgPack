import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PersonalProfileService } from '../../../../services/personal-profile.service';
import { IProFile } from '../../../../models/proFile';
import { IImageUsers } from '../../../../models/imageUsers';
@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
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
  // images: string[] = ['https://znews-photo.zadn.vn/w660/Uploaded/bzcwvobl/2020_05_16/Ronaldo.jpg',
  //   'https://media.thethao247.vn/upload/cuongnm/2019/12/10/ronaldo-hoi-han-khi-roi-real-madrid1575955497.jpg',
  //   'https://znews-photo.zadn.vn/w660/Uploaded/ofh_huqfztmf/2020_02_05/ro.jpeg',
  //   'https://vcdn-thethao.vnecdn.net/2020/12/03/Ronaldo-jpeg-2254-1606953102.jpg',
  //   'https://cdnmedia.thethaovanhoa.vn/Upload/wulx9oa2QRDkHJjOcQfBRA/files/2019/12/27/cristiano-ronaldo.jpg',
  //   'https://cdn.vox-cdn.com/thumbor/gS5G1kGiqupdpEEu98CCpiDkpJ4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18342894/891903860.jpg.jpg',
  //   'https://i.pinimg.com/564x/c4/b4/85/c4b485423960e84bd816d583b0f6c4c7.jpg',
  //   'https://baoquocte.vn/stores/news_dataimages/quangdao/092020/12/15/0904_2882888-59365768-2560-1440.jpg?rt=20200912151319',
  //   'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200605104706-cristiano-ronaldo-tease.jpg',
  //   'https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2020/05/04/BDQT/ronaldo.jpg',
  //   'https://i.pinimg.com/236x/bd/85/61/bd85616fa1c2ce1c9ca5ece939ef7469.jpg',
  //   'https://i.pinimg.com/236x/26/6a/76/266a761faa23befaf0bcd5d26cfd5e44.jpg',
  //   'https://znews-photo.zadn.vn/w660/Uploaded/bzcwvobl/2020_05_16/Ronaldo.jpg',
  //   'https://media.thethao247.vn/upload/cuongnm/2019/12/10/ronaldo-hoi-han-khi-roi-real-madrid1575955497.jpg',
  //   'https://znews-photo.zadn.vn/w660/Uploaded/ofh_huqfztmf/2020_02_05/ro.jpeg',
  //   'https://vcdn-thethao.vnecdn.net/2020/12/03/Ronaldo-jpeg-2254-1606953102.jpg',
  //   'https://cdnmedia.thethaovanhoa.vn/Upload/wulx9oa2QRDkHJjOcQfBRA/files/2019/12/27/cristiano-ronaldo.jpg',
  //   'https://cdn.vox-cdn.com/thumbor/gS5G1kGiqupdpEEu98CCpiDkpJ4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18342894/891903860.jpg.jpg',
  //   'https://i.pinimg.com/564x/c4/b4/85/c4b485423960e84bd816d583b0f6c4c7.jpg',
  //   'https://baoquocte.vn/stores/news_dataimages/quangdao/092020/12/15/0904_2882888-59365768-2560-1440.jpg?rt=20200912151319',
  //   'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200605104706-cristiano-ronaldo-tease.jpg',
  //   'https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2020/05/04/BDQT/ronaldo.jpg',
  //   'https://i.pinimg.com/236x/bd/85/61/bd85616fa1c2ce1c9ca5ece939ef7469.jpg',
  //   'https://i.pinimg.com/236x/26/6a/76/266a761faa23befaf0bcd5d26cfd5e44.jpg'
  // ];

  constructor(private route: ActivatedRoute, private proFileService: PersonalProfileService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
      console.log('id',  this.userId);
      // get profile by id
      this.userData = this.proFileService.getUsers(this.userId).subscribe(data => {
        this.datas = data['data'];
       });
      //  get image by id
       this.userImage = this.proFileService.getImageUsers(this.userId).subscribe(data => { 
        this.datasImage = data['data'];
        console.log('data images', this.datasImage);
        console.log('source', this.datasImage.map(x => x['source']));
      });
    });
    let count = 0;
    // console.log('images', this.images);
    for (let i = 0; i < 6; i++)
    {
      this.imagesByColumn[i] = new Array();
    }
    // console.log('images by column', this.imagesByColumn);

    for (let image of this.datasImage.map(x => x['source']))
    {
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
      newHeight = 500 * height / width;
      newWidth = 500;
      // console.log('width > 500 ->', newWidth, newHeight);
    }

    if (newHeight > 500) {
      newWidth = 500 * 500 / newHeight;
      newHeight = 500;
      // console.log('height > 500 ->', newWidth, newHeight);
    }

    this.fullImage.nativeElement.height = newHeight;
    this.fullImage.nativeElement.width = newWidth;

    // console.log(newWidth, newHeight);
  }
}
