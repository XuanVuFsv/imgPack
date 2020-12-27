import { Router } from '@angular/router';
import { PersonalProfileService } from './../../../services/personal-profile.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProfileData, ICollection } from './../../../models/profileData';
import { CollectionsService } from '../../../services/collections.service';
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
  collections: any[] = new Array();
  @ViewChild('title') newTitle: ElementRef;
  @ViewChild('fullimage') fullImage: ElementRef;
  limitSize: number = 480;

  // newCollectionImages: string[] = new Array();
  previewCollectionImage: any;
  currentCollectionIndex: number;
  currentCollectionName: string;

  collection: Client[] = Clients;
  cnfrmMessage: any;

  constructor(private profileDataService: CollectionsService, private personalProfileService: PersonalProfileService, private router: Router) {
  }

  ngOnInit(): void {
    this.profileDataService.GetCollectionsData()
      .subscribe(data => {
        this.collections = data.data;
        for (let collection of this.collections) {
          this.profileDataService.GetImageByCollection(collection['_id']).subscribe(images => {
            // console.log(images.data.images);
            collection['src'] = images['data']['images'].map(x => x['source']);
          });
        }
        // console.log(this.collections);
      });
  }

  View(): void {
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

  AddCollection(): void {
    if (this.collections.map(x => x.name).indexOf(this.newTitle.nativeElement.value) < 0 && this.newTitle.nativeElement.value !== '') {
      let newCollection: any;

      newCollection = {
        name: this.newTitle.nativeElement.value,
      };

      this.profileDataService.AddCollectionsData(newCollection).subscribe(data => {
      });

      // console.log('newCollection Add', newCollection);
    }
    else {
      console.log('match name');
    }
  }

  ShowFullImage(collectionIndex: number): void {
    this.profileDataService.UpdateCollectionIndex(collectionIndex);
    console.log(this.profileDataService.GetCollectionIndex());
    this.router.navigate(['profile/view-collection'], {queryParams: {id : collectionIndex}});
  }
}
