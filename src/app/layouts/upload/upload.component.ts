import { UploadImageService } from './../../services/upload-image.service';
import { Router } from '@angular/router';
import { IProfileData, ICollection } from '../../models/profileData';
import { CollectionsService } from '../../services/collections.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collection } from 'typescript';
import { Client, Clients } from '../../components/general/client-collection/client-collection';
import { UploadService } from '@services/upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {

  @ViewChild('topicValue') topicValue: ElementRef;
  @ViewChild('descriptionValue') descriptionValue: ElementRef;
  @ViewChild('collectionValue') collectionValue: ElementRef;
  @ViewChild('uploadFrame') uploadFrame: ElementRef;
  @ViewChild('title') newTitle: ElementRef;

  topicList: string[] = new Array();
  collectionIDList: string[] = new Array();
  currentImageUpload: string;
  imgs: string[];
  imageFileUpload: any;


  collections: any[] = new Array();
  nameCollection = [];
  dataUpload = {
    source: null,
    description: '',
    collectionId: '',
    topics: []
  };

  constructor(private profileDataService: CollectionsService, private collectionsService: CollectionsService, private uploadImageService: UploadImageService, private router: Router) {
  }

  ngOnInit(): void {
    document.getElementById('cancelUpload').style.visibility = "hidden";

    if (!window.localStorage.getItem('accessToken')) {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }

    this.collectionsService.GetCollectionsData().subscribe(data => {
      this.collections = data.data;
      console.log(this.collections);
      this.nameCollection = this.collections.map(x => x.name);
      this.collectionIDList = this.collections.map(x => x._id);
      console.log('collections', this.collectionIDList, this.nameCollection);
    });

    this.uploadImageService.LoadImage().subscribe(data => {
      console.log('my Image', data);
      this.imgs = data['data'].map(x => x['source']);
    });
  }

  AddTopic(): void {
    if (this.topicList.indexOf(this.topicValue.nativeElement.value) < 0 && this.topicValue.nativeElement.value !== '') {
      console.log(this.topicValue.nativeElement.value);
      this.topicList.push(this.topicValue.nativeElement.value);
      this.dataUpload.topics = this.topicList;
      console.log(this.topicList);
    }
  }

  AddCollection(): void {
    if (this.nameCollection.indexOf(this.newTitle.nativeElement.value) < 0 && this.newTitle.nativeElement.value !== '') {
      let newCollection: any;
      newCollection = {
        name: this.newTitle.nativeElement.value,
      };
      this.profileDataService.AddCollectionsData(newCollection).subscribe(data => {
        console.log(data);
        this.collectionIDList.push(data.data._id);
        this.nameCollection.push(data.data.name);
        this.collections.push({
          _id: data.data._id,
          name: data.data.name
        });
      });
      this.nameCollection.push(this.newTitle.nativeElement.value);
      console.log('new collections', this.collectionIDList, this.nameCollection, this.collections);
    }
    else {
      console.log('match name');
    }
  }

  onSelectImage(file: any): void {
    document.getElementById('uploadFrame').style.visibility = "hidden";
    document.getElementById('mainFrame').style.backgroundColor = "wheat";
    document.getElementById('cancelUpload').style.visibility = "visible";
    if (file.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.currentImageUpload = event.target.result;
      };
      this.imageFileUpload = file.target.files.item(0);

    }
  }
  onCancelUpload(): void {
    document.getElementById('uploadFrame').style.visibility = "visible";
    document.getElementById('mainFrame').style.backgroundColor = "white";
    document.getElementById('cancelUpload').style.visibility = "hidden";
    this.currentImageUpload = null;
  }

  Post(): void {
    console.log('Post');
    this.dataUpload.collectionId = this.collectionValue.nativeElement.value;
    this.dataUpload.description = this.descriptionValue.nativeElement.value;

    console.log(this.dataUpload.collectionId, this.dataUpload.description, this.imageFileUpload);

    const formData = new FormData();
    formData.append('source', this.imageFileUpload);
    if (this.dataUpload.collectionId && this.dataUpload.description && this.dataUpload.topics) {
      this.uploadImageService.UploadS3(formData).subscribe(data => {
        console.log(data);
        this.dataUpload.source = data;
        this.uploadImageService.UpdateImageUpload(this.dataUpload).subscribe(data => {
          console.log(data);
        });
      });
    }
    else {
      console.log('thieu');
    }
  }
}
