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

  constructor(router: Router) {
    this.currentURL = router.url;
    //console.log('currentURL: ' + this.currentURL);
  }

  ngOnInit(): void
  {
    //console.log('OnInit');
    //console.log(this.currentURL);
    this.changeStatusButton(this.currentURL);
  }

  changeStatusButton(url: string): void {
    let currentIndex: number;
    //console.log(url);

    if (url === '/accountSettings/general') {
      currentIndex = 0;
    }
    else if (url === '/accountSettings/notifications') {
      currentIndex = 1;
    }
    else {
      currentIndex = 2;
    }

    //console.log(currentIndex);

    this.buttonStatus = this.buttonStatus.map((status, index) => {
      //console.log('current index is: ' + index + ' and value is: ' + status + ' will compare with currentIndex is: ' + currentIndex);
      if (index === currentIndex)
      {
        return true;
      }
      return false;
    });
    //console.log(this.buttonStatus);
  }
}
