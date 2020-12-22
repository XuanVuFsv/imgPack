import { Router } from '@angular/router';
import { UserSettingsService } from './../../services/user-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  currentURL: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken'))
    {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }
    // else {
    //   document.getElementById('layout-account-settings').style.display = "initial";
    // }
  }

}
