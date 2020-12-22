import { IProfileData, ICollection } from '../../models/profileData';
import { ProfileDataService } from '../../services/profile-data.service';
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

  fileToUpload= File=null;
  collections: any[] = new Array();
  nameCollection = [];
  constructor(private profileDataService: ProfileDataService, private imgService: UploadService) {}


  topiclist=  ["go","toopodaso"];

  addtopic(topic){
  this.topiclist.push(topic.value);
  topic.value="";
  }

  InputFile(file : FileList){
    this.fileToUpload = file.item(0);
  }

  ngOnInit(): void {
    this.profileDataService.GetCollectionsData()
    .subscribe(data => {
      this.collections= data['data'];
      console.log('collections data: ', this.collections);
    });
  }

  onPost(Img,description,collection,topiclist){
    this.imgService.postFile(this.fileToUpload,description.value,collection.value,topiclist)
    .subscribe(data=>{
      console.log('done');
    })
  }


}
