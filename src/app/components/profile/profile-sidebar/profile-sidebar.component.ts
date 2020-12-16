import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  buttonStatus = [false, false, false, false, false];
  currentURL: string;
  constructor(router: Router) {
    this.currentURL = router.url;
  }

  ngOnInit(): void {
    this.changeStatusButton(this.currentURL);
  }
  changeStatusButton(url: string): void {
    let currentIndex: number;
    //console.log(url);
    if (url === '/profile/overview') {
      currentIndex = 0;
    }
    else if (url === '/profile/collections') {
      currentIndex = 1;
    }
    else if (url === '/profile/your-image') {
      currentIndex = 2;
    }
    else if (url === '/profile/data-analysis') {
      currentIndex = 3;
    }
    else {
      currentIndex = 4;
    }


    //console.log(currentIndex);
    this.buttonStatus = this.buttonStatus.map((status, index) => {
      //console.log('current index is: ' + index + ' and value is: ' + status + ' will compare with currentIndex is: ' + currentIndex);
      if (index === currentIndex) {
        return true;
      }
      return false;
    });
    //console.log(this.buttonStatus);
  }
}
