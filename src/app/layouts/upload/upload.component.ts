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
  @ViewChild('collectionValue') collectionValue: ElementRef;
  topicList: string[] = new Array();
  collectionIDList: string[] = new Array();

  collections: any[] = new Array();
  nameCollection = [];

  constructor(private collectionsService: CollectionsService, private router: Router) { }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken')) {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }

    this.collectionsService.GetCollectionsData().subscribe(data => {
      console.log(data);
      this.collections = data.data;
    });
    this.nameCollection = this.collections.map(x => x.name);

    this.collectionsService.Test().subscribe(data => {
      console.log(data);
      this.collections = data.data;
    });
  }

  AddTopic(): void {
    if (this.topicList.indexOf(this.topicValue.nativeElement.value) < 0)
    {
      console.log(this.topicValue.nativeElement.value);
      this.topicList.push(this.topicValue.nativeElement.value);
    }
  }

  AddCollection(): void {
    if (this.collectionIDList.indexOf(this.collectionValue.nativeElement.value) < 0)
    {
      console.log(this.collectionValue.nativeElement.value);
      this.collectionIDList.push(this.collectionValue.nativeElement.value);
    }
  }
}
