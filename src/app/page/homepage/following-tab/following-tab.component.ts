import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';


@Component({
  selector: 'app-following-tab',
  templateUrl: './following-tab.component.html',
  styleUrls: ['./following-tab.component.scss']
})
export class FollowingTabComponent implements OnInit {

  data:any;
  Users:any;
  userID:any;
  sttFollow:string;
  blFollow:boolean =true;

  onFollow(i:any){
    if(i.isFollow){
      this.postData.PutUnfollow(i._id) .subscribe((result)=>{console.log(result)})
      i.isFollow=false;
      i.sttFollow = "Follow";
      console.log("unFollowed");
    }
    else {
      this.postData.postFollow(i._id) .subscribe((result)=>{console.log(result)});
      i.isFollow=true;
      i.sttFollow="Unfollow";
      console.log("Followed");

    }

    // if(this.blFollow== true) {
    //   this.blFollow=false;
    //   this.sttFollow="Follow";
    // }
    // else {
    //   this.blFollow=true;
    //   this.sttFollow="UnFollow";
    // }
  }


  constructor(private postData:PostsService) { }

  ngOnInit(): void {

    this.postData.getProfile().subscribe((result)=>{
      this.userID = result['data']['users']['_id'];
      console.log("Profile: ",this.userID);
    })


    //get Data Following
    this.postData.getPosts().subscribe((result)=>{
      console.log("Result: ", result);
      this.data=result['data'];
      this.Users = this.data['users'];
      for (let index = 0; index < this.Users.length; index++) {
        const element = this.Users[index];
        this.Users[index].isFollow = this.data['followed'].includes(element._id)
        if(this.Users[index].isFollow) this.Users[index].sttFollow="Unfollow"
        else this.Users[index].sttFollow="Follow";
      }
      console.log("Data: ", this.data);
      console.log("Users: ",this.Users)
    })
  }

}
