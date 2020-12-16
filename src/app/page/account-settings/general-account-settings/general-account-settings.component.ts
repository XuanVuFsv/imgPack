import { IUserSettings } from './../../../models/userSettings';
import { UserSettingsService } from './../../../services/user-settings.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-general-account-settings',
  templateUrl: './general-account-settings.component.html',
  styleUrls: ['./general-account-settings.component.scss']
})
export class GeneralAccountSettingsComponent implements OnInit {

  userSettings: IUserSettings;

  @ViewChild('selectAvartarSource') selectImageButton: ElementRef;
  // @Output() onChangeAvatar = new EventEmitter<string>();

  constructor(private _userSettingsService: UserSettingsService) { }

  ngOnInit(): void {
    this._userSettingsService.GetUserSettings()
      .subscribe(data => {
        this.userSettings = data;
        console.log(data);
      });
  }

  onSelectImage(file: any): void {
    if (file.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        let newUserSettings: IUserSettings = this.userSettings;
        newUserSettings["general"]["avatarSource"] = event.target.result;
        this._userSettingsService.UpdateUserSettings(newUserSettings).subscribe(data => {
          this.userSettings = newUserSettings;
        });
      };
    }
  }

  // this.getNewAvatarSource(this.userSettings["general"]["avatarSource"]);
  // getNewAvatarSource(source: string) {
  //   this.onChangeAvatar.emit(source);
  // }
}
