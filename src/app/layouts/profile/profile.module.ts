import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileSidebarModule } from '@components/profile/profile-sidebar/profile-sidebar.module';
import { NavbarModule } from '@components/general/navbar/navbar.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileSidebarModule,
    NavbarModule
  ]
})
export class ProfileModule { }
