import { Component, OnInit } from '@angular/core';
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
  collection: Client[] = Clients;
  cnfrmMessage: any;
  title: any;
  src: any;
  avatarSource: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
  constructor() {
  }

  ngOnInit(): void {

  }
  sort() {
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

  sortIncrease() {
    this.collection = this.collection.sort((d1, d2) => d1.date.valueOf() - d2.date.valueOf());
  }
  sortReduce() {
    this.collection = this.collection.sort((d1, d2) => d2.date.valueOf() - d1.date.valueOf());
  }

  // add(){
  //   this.title = (document.getElementById("title") as HTMLInputElement).value;
  //   this.src = (document.getElementById("src") as HTMLInputElement).value;
  //   this.collection.push({Client.id: this.title});
  // }
  removeAll() {
    this.cnfrmMessage = confirm('Are u sure?')
    if (this.cnfrmMessage == true) {
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
