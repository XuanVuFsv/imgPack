import { Component, OnInit } from '@angular/core';
import {PersonalUsersService} from '../../../services/personal-users.service';
import {IPersonalUsers} from '../../../models/personalUsers';
import {Subscription} from 'rxjs/subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  datas: IPersonalUsers[] = [];
  subscription: Subscription;
  constructor(private personalUsersService: PersonalUsersService, private router: Router) { }

  ngOnInit(): void {
    this.getBookmarkCreator();
  }
  getBookmarkCreator(){
   this.subscription = this.personalUsersService.getBookmarkCreator().subscribe((data: any ) => {
      this.datas = data['data'];
    });
  }

  onSelect(client){
    this.router.navigate(['/users/usersImage/', client.data._id]);
  }
  // loadData(){
  //   this.subscription = this._getImageService.getImage().subscribe(data => {
  //     console.log(data);
  //    this.clients = data['data'];
  //    console.log(this.clients);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
