import { Router } from '@angular/router';
import { UploadImageService } from './../../../services/upload-image.service';
import { PersonalProfileService } from './../../../services/personal-profile.service';
import { IUserSettings } from './../../../models/userSettings';
import { UserSettingsService } from './../../../services/user-settings.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-general-account-settings',
  templateUrl: './general-account-settings.component.html',
  styleUrls: ['./general-account-settings.component.scss']
})
export class GeneralAccountSettingsComponent implements OnInit {

  userSettings: any;
  newSetting = {};
  newPassword = {};
  myData: any;
  avatar: any;

  @ViewChild('selectAvartarSource') selectImageButton: ElementRef;
  @ViewChild('inputUserName') username: ElementRef;
  @ViewChild('inputEmail') email: ElementRef;
  @ViewChild('Gender') gender: ElementRef;


  // @Output() onChangeAvatar = new EventEmitter<string>();

  constructor(private router: Router, private uploadImageService: UploadImageService, private userSettingsService: UserSettingsService, private myService: PersonalProfileService) { }

  ngOnInit(): void {
    document.getElementById('alert').style.visibility = "hidden";
    this.myService.getMe().subscribe(data => {
      this.myData = data['data'];
      this.userSettings = this.myData['users'];
    });
  }

  onSelectImage(file: any): void {
    if (file.target.files) {
      // console.log(typeof this.selectImageButton.nativeElement.value);
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.myData['users']['avatar'] = event.target.result;
        this.avatar = file.target.files[0];
        // console.log(this.avatar);
      };
    }
  }

  UpdateSettings(): void {
    if (this.avatar) {
      const formData = new FormData();
      formData.append('source', this.avatar);
      this.uploadImageService.UploadS3(formData).subscribe(data => {
        // console.log('source', data);
        this.newSetting['avatar'] = data;
        // console.log(this.newSetting);
        this.myService.UpdateProfile(this.newSetting).subscribe(data => {
          // console.log(data);
        });
      });
    } else {
      // console.log(this.newSetting);
      this.myService.UpdateProfile(this.newSetting).subscribe(data => {
        // console.log(data);
      });
    }

  }

  UpdatePassword(): void {
    if (this.newPassword['newPassword'] !== this.newPassword['confirmPassword']) {
      document.getElementById('alert').style.visibility = "visible";
      // console.log('wrong');
    }
    else {
      document.getElementById('alert').style.visibility = "hidden";
      // console.log(this.newPassword);
      this.myService.UpdateProfile(this.newPassword).subscribe(data => {
        // console.log(data);
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
      });
    }
  }

  OnChangePassword(value: any): void {
    // console.log(value.target.value);
    this.newPassword['password'] = value.target.value;
  }

  OnChangeNewPassword(value: any): void {
    // console.log(value.target.value);
    this.newPassword['newPassword'] = value.target.value;
  }

  OnChangeConfirmPassword(value: any): void {
    // console.log(value.target.value);
    this.newPassword['confirmPassword'] = value.target.value;
  }

  OnChangeUsername(value: any): void {
    // console.log(value.target.value);
    if (this.userSettings.username !== value.target.value) {
      this.newSetting['username'] = value.target.value;
      console.log('newSetting', this.newSetting);
    }
    else {
      delete this.newSetting['username'];
      // console.log('newSetting', this.newSetting);
    }
  }

  OnChangeEmail(value: any): void {
    // console.log(value.target.value);
    if (this.userSettings.email !== value.target.value) {
      this.newSetting['email'] = value.target.value;
      // console.log('newSetting', this.newSetting);
    }
    else {
      delete this.newSetting['email'];
      // console.log('newSetting', this.newSetting);
    }
  }

  OnChangeGender(value: any): void {
    // console.log(value.target.value);
    if (this.userSettings.gender !== value.target.value) {
      this.newSetting['gender'] = value.target.value;
      // console.log('newSetting', this.newSetting);
    }
    else {
      delete this.newSetting['gender'];
      // console.log('newSetting', this.newSetting);
    }
  }

  // this.getNewAvatarSource(this.userSettings["general"]["avatarSource"]);
  // getNewAvatarSource(source: string) {
  //   this.onChangeAvatar.emit(source);
  // }
}
