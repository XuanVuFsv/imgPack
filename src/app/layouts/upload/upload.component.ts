import { IProfileData, ICollection } from '../../models/profileData';
import { ProfileDataService } from '../../services/profile-data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collection } from 'typescript';
import { Client, Clients } from '../../components/general/client-collection/client-collection';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  collections: any[] = new Array();
  nameCollection = [];
  constructor(private profileDataService: ProfileDataService) {}


  topiclist=  ["go","toopodaso"];

  addtopic(topic){
  this.topiclist.push(topic.value);
  topic.value="";
  }

  ngOnInit(): void {
    this.profileDataService.GetCollectionsData()
    .subscribe(data => {
      this.collections= data['data'];
      console.log('collections data: ', this.collections);
    });
  }



}
