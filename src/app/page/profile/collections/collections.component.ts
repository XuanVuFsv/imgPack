import { IProfileData, ICollection } from './../../../models/profileData';
import { ProfileDataService } from './../../../services/profile-data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collection } from 'typescript';
import { Client, Clients } from '../../../components/general/client-collection/client-collection';
import * as $ from "jquery";
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  profileData: IProfileData;
  collections: ICollection[] = new Array();
  @ViewChild('title') newTitle: ElementRef;
  newCollectionImages: string[] = new Array();
  previewCollectionImage: any;

  collection: Client[] = Clients;
  cnfrmMessage: any;
  title: any;
  src: any;
  avatarSource: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg';

  constructor(private profileDataService: ProfileDataService) {
  }

  ngOnInit(): void {
    this.profileDataService.GetProfileData()
      .subscribe(data => {
        this.profileData = data;
        this.collections = data['collections'];
        console.log('profile data: ', data);
      });
  }

  sort(): void {
    this.collection = this.collection.sort((a1, a2) => {
      if (a1.title > a2.title) {
        return 1;
      }

      if (a1.title < a2.title) {
        return -1;
      }
      return 0;
    });
  }

  sortIncrease(): void {
    this.collection = this.collection.sort((d1, d2) => d1.date.valueOf() - d2.date.valueOf());
  }
  sortReduce(): void {
    this.collection = this.collection.sort((d1, d2) => d2.date.valueOf() - d1.date.valueOf());
  }

  removeAll(): void {
    this.cnfrmMessage = confirm('Are u sure?')
    if (this.cnfrmMessage === true) {
      $(document).ready(function () {
        $("#delete").ready(function () {
          $(".image-list").remove();
        });
      });
    }
    else {
      alert('Cancelled..!!!');
    }
  }

  onSelectImage(file: any): void {
    let count = 0;
    if (file.target.files) {
      console.log(file.target.files.length);
      for (const childFile of file.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(childFile);

        reader.onload = (event: any) => {
          this.newCollectionImages.push(event.target.result);
          if (count === 0)
          {
          this.previewCollectionImage = event.target.result;
          count++;
          }
        };
      }
    }
  }

  AddCollection(): void {
    let newProfileData: IProfileData;
    let newCollection: ICollection;

    newProfileData = this.profileData;
    newCollection = {
      id: newProfileData['collections'].length,
      title: this.newTitle.nativeElement.value,
      date: (new Date()).toString(),
      scr: this.newCollectionImages,
      preview: this.newCollectionImages[0]
    };
    console.log('newCollection Add', newCollection);
    newProfileData['collections'].push(newCollection);
    console.log('newProfileData Update', newProfileData);
    this.profileDataService.UpdateProfileData(newProfileData).subscribe(data => {
      this.profileData = newProfileData;
      this.collections = newProfileData['collections'];
    });
  }

  // add(){
  //   this.title = (document.getElementById("title") as HTMLInputElement).value;
  //   this.src = (document.getElementById("src") as HTMLInputElement).value;
  //   this.collection.push({Client.id: this.title});
  // }
  //
  // removeIndex(arr: Client,value){
  //   var index = Clients.indexOf(value);
  //   if(index === arr.id)
  //   {
  //     Clients.slice(index, 1);
  //   }
  //   return arr;
  // }

  // Testing(){
  //   var name = $('#txtName').val();
  //   alert(name);
  // }
}
