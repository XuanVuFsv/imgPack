import { Component, OnInit } from '@angular/core';
import {BookmarkCreatorService } from '../../../services/bookmark-creator.service';
import {IBookMarkCreator} from '../../../models/bookMarkCreator';
import {Subscription} from 'rxjs/subscription';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  datas: IBookMarkCreator[] = [];
  subscription: Subscription;
  constructor(private bookMarkCreatorService: BookmarkCreatorService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.bookMarkCreatorService.getUsers().subscribe(data => {
      this.datas = data['data'];
    });
  }

  onSelect(client){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : client._id}});
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
