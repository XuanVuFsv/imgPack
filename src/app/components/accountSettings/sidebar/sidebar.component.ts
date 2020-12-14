import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';

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

  ngOnInit(): void
  {
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
      if (index === currentIndex)
      {
        return true;
      }
      return false;
    });
  }
}
