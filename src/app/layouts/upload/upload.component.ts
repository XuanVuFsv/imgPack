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

  fileToUpload = File = null;
  @ViewChild('topicValue') topicValue: ElementRef;
  @ViewChild('descriptionValue') descriptionValue: ElementRef;
  @ViewChild('collectionValue') collectionValue: ElementRef;
  @ViewChild('uploadFrame') uploadFrame: ElementRef;
  topicList: string[] = new Array();
  collectionIDList: string[] = new Array();
  isDisabled: boolean;
  currentImageUpload: string;
  imageFileUpload: File = null;

  collections: any[] = new Array();
  nameCollection = [];

  constructor(private collectionsService: CollectionsService, private uploadImageService: UploadImageService, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('cancelUpload').style.visibility = "hidden";

    if (!window.localStorage.getItem('accessToken')) {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }

    this.collectionsService.GetCollectionsData().subscribe(data => {
      console.log('collections', data);
      this.collections = data.data;
    });
    this.nameCollection = this.collections.map(x => x.name);

    this.collectionsService.Test().subscribe(data => {
      // console.log(data);
      this.collections = data.data;
    });
  }

  AddTopic(): void {
    if (this.topicList.indexOf(this.topicValue.nativeElement.value) < 0 || this.topicValue.nativeElement.value !== '') {
      console.log(this.topicValue.nativeElement.value);
      this.topicList.push(this.topicValue.nativeElement.value);
      console.log(this.topicList);
    }
  }

  AddCollection(): void {
    if (this.collectionIDList.indexOf(this.collectionValue.nativeElement.value) < 0) {
      // console.log(this.collectionValue.nativeElement.value);
      this.collectionIDList.push(this.collectionValue.nativeElement.value);
    }
  }

  onSelectImage(file: any): void {
    document.getElementById('uploadFrame').style.visibility = "hidden";
    document.getElementById('mainFrame').style.backgroundColor = "wheat";
    document.getElementById('cancelUpload').style.visibility = "visible";
    if (file.target.files) {
      console.log('file: ', file.target.files[0]);
      for (const childFile of file.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(childFile);
        this.imageFileUpload = childFile;
        console.log(this.imageFileUpload);

        reader.onload = (event: any) => {
          this.currentImageUpload = event.target.result;
        };
      }
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
    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('file', this.imageFileUpload, this.imageFileUpload.name);
    console.log('Post', formData);
    let data = {
      source: formData,
      description: this.descriptionValue.nativeElement.value,
      collectionId: this.collectionValue.nativeElement.value,
      topics: this.topicList
    };
    console.log('Image upload:', data);
    this.uploadImageService.Upload(data).subscribe(data => {
      console.log(data);
    });
  }
}
