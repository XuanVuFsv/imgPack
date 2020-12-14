import { UserSettingsService } from './../../../services/user-settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  currentURL: string;
  avatarSource: string;
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

  constructor(router: Router, viewportScroller: ViewportScroller, private _userSetingsService: UserSettingsService) {
    this.currentURL = router.url;
    this.viewportScroller = viewportScroller;
  }

  ngOnInit(): void
  {
    this.isCollapse = true;
    this._userSetingsService.GetUserSettings()["general"]["avatarSource"]
    .subscribe(data => this.avatarSource = data);  }

  ngAfterViewInit() {

  }

  GotoElement(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

  ChangeMouseStatus(element: string) {
    this.isHover[element] = !this.isHover[element];
  }

}
