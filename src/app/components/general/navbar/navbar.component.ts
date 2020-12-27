import { UserSettingsService } from './../../../services/user-settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {ISearch} from '../../../models/search';
import {SearchService } from '../../../services/search.service';
import {IProFile} from '../../../models/proFile';
import {PersonalProfileService} from '../../../services/personal-profile.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public dropDown = "Users";
  public value : boolean = true;
  public searchText = "";
  public searchResult: Array<any> = [];
  datas: ISearch;
  me: IProFile;
  currentURL: string;
  @Input() avatarSource: string;
  viewportScroller: ViewportScroller;
  isCollapse: boolean;
  isHover: object = {
    upload: false,
    notification: false,
    profile: false
  };
  mouseHoverClasses: object = {
    notification: "nav-link fas fa-bell fa-2x",
    upload: "nav-link fas fa-upload fa-2x",
    profile: ""
  };
  mouseNormalClasses: object = {
    notification: "nav-link far fa-bell fa-2x",
    upload: "nav-link far fa-upload fa-2x",
    profile: ""
  };

  constructor(private router: Router, viewportScroller: ViewportScroller, private _userSetingsService: UserSettingsService, private searchService: SearchService, private meService: PersonalProfileService) {
    this.currentURL = router.url;
    this.viewportScroller = viewportScroller;
  }
  getUsers(){
    this.searchService.getUsers().subscribe(data => {
      this.datas = data['data'];
    });
  }
  fetchSeries(event: any) {

    if (event.target.value === '') {
      return this.searchResult = [];
    } else if (this.dropDown === 'Users') {
      this.searchResult = this.datas.users.filter((series) => {
        return series.username.toLowerCase().includes(event.target.value.toLowerCase());
      })
    }
    else if (this.dropDown === 'Topics') {
      this.searchResult = this.datas.topics.filter((series) => {
        return series.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    }
  }
  change1() {
    return this.dropDown = 'Users',this.value = true ;
  }
  change2() {
    return this.value = !this.value,this.dropDown = 'Topics';
  }

  onSelect(client){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : client._id}});
    this.searchText = "";
    this.searchResult = [];
  }
  onSelect1(client){
    this.router.navigate(['/homepage/topic/'], {queryParams: {id : client._id}});
    this.searchText = "";
    this.searchResult = [];
  }
  onSelectMe(me){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : me.users._id}});
  }
  getMe(){
    this.meService.getMe().subscribe(data => {
      this.me = data['data'];
      console.log('tao ne', this.me);
    });
  }

  onLogout(){
    localStorage.removeItem('accessToken');
  }

  ngOnInit(): void
  {
    this.getMe();
    this.getUsers();
    this.isCollapse = true;
    this._userSetingsService.GetUserSettings()
    .subscribe((data: any) =>
    {
      this.avatarSource = data["general"]["avatarSource"];
    });
  }

  ngAfterViewInit() {

  }

  GotoElement(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

  ChangeMouseStatus(element: string) {
    // this.isHover[element] = !this.isHover[element];
  }

}
