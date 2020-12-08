import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-general-account-settings',
  templateUrl: './general-account-settings.component.html',
  styleUrls: ['./general-account-settings.component.scss']
})
export class GeneralAccountSettingsComponent implements OnInit {

  avatarSource: string;
  generalAcountSetting: object[];
  defaultGeneralAccountSettings = {
    username: 'Minh Vủ',
    avatarSource: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
  };
  @ViewChild('selectAvartarSource') selectImageButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.avatarSource = this.defaultGeneralAccountSettings.avatarSource;
    console.log(this.selectImageButton.nativeElement.value);
  }

  onSelectImage(file: any): void {
    if (file.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.avatarSource = event.target.result;
      };
    }
  }

}
