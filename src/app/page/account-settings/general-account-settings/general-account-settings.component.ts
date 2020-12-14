import { UserSettingsService } from './../../../services/user-settings.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-general-account-settings',
  templateUrl: './general-account-settings.component.html',
  styleUrls: ['./general-account-settings.component.scss']
})
export class GeneralAccountSettingsComponent implements OnInit {

  generalAcountSetting: object;

  @ViewChild('selectAvartarSource') selectImageButton: ElementRef;
  @Output() onChangeAvatar = new EventEmitter<string>();

  constructor(private _userSettingsService: UserSettingsService) { }

  ngOnInit(): void {
    // this.defaultGeneralAccountSettings["avatarSource"] = this._userSettingsService.GetGeneralUserSettings()["avatarSource"];
       this._userSettingsService.GetUserSettings()["general"]
       .subscribe(data => this.generalAcountSetting = data);
  }

  onSelectImage(file: any): void {
    if (file.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.generalAcountSetting["avatarSource"] = event.target.result;
        this.getNewAvatarSource(this.generalAcountSetting["avatarSource"]);
      };
    }
  }

  getNewAvatarSource(source: string) {
    this.onChangeAvatar.emit(source);
  }
}
