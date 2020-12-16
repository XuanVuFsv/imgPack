import { UserSettingsService } from './../../services/user-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  // avatarSource: string;
  constructor(private _userSettingsService: UserSettingsService) { }

  ngOnInit(): void {
    // this._userSettingsService.GetUserSettings().subscribe(data => {
    //   this.avatarSource = data["general"]["avatarSource"];
    // });
  }

}
