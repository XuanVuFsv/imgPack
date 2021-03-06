import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  buttonStatus = [false, false, false];
  currentURL: string;
  isHover: boolean;

  constructor(router: Router) {
    this.currentURL = router.url;
  }

  URL = ['https://imgpackweb.web.app/account-settings/general',
    'https://imgpackweb.web.app/account-settings/notifications',
    'https://imgpackweb.web.app/account-settings/security'];

  ngOnInit(): void {
    this.changeStatusButton(this.currentURL);
  }

  changeStatusButton(url: string): void {
    let currentIndex: number;

    if (url === '/account-settings/general') {
      currentIndex = 0;
    }
    else if (url === '/account-settings/notifications') {
      currentIndex = 1;
    }
    else {
      currentIndex = 2;
    }

    this.buttonStatus = this.buttonStatus.map((status, index) => {
      if (index === currentIndex) {
        return true;
      }
      return false;
    });
  }
}
