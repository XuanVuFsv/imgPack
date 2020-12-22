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
    this.profileDataService.GetCollectionsData()
      .subscribe(data => {
        this.collections = data;
        console.log('collections data: ', data);
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
    // let newProfileData: IProfileData;
    let newCollection: any;

    // newProfileData = this.profileData;
    newCollection = {
      name: this.newTitle.nativeElement.value,
    };

    this.profileDataService.AddCollectionsData(newCollection).subscribe(data => {
    });

    console.log('newCollection Add', newCollection);
  }
}
