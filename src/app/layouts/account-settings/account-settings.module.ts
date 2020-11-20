import { AccountSettingsRoutingModule } from './account-settings.routing';
import { AccountSettingsComponent } from './account-settings.component';
import { SidebarModule } from './../../components/accountSettings/sidebar/sidebar.module';
import { NavbarModule } from '@components/general/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})
export class AccountSettingsModule { }
