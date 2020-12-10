import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSidebarComponent } from './profile-sidebar.component';



@NgModule({
  declarations: [ProfileSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileSidebarComponent
  ]
})
export class ProfileSidebarModule { }
