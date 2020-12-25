import { Component, OnInit } from '@angular/core';
import {BookmarkCreatorService } from '../../../services/bookmark-creator.service';
import { ITrendingCreator } from '../../../models/trendingCreator';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
datas: ITrendingCreator;
  constructor(private bookMarkCreatorService: BookmarkCreatorService, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingCreator();
  }
  getTrendingCreator(){
    this.bookMarkCreatorService.getTrendingCreator().subscribe(data => {
      this.datas = data['data'];
    });
  }

  onSelect(client){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : client._id}});
  }
}
