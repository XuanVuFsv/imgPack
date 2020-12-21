import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadUsersComponent } from './upload-users.component';
import { NavbarModule } from '@components/general/navbar/navbar.module';
import {UploadUsersRoutingModule} from './upload-users.routing';
@NgModule({
  declarations: [UploadUsersComponent],
  imports: [
    CommonModule,
    NavbarModule,
    UploadUsersRoutingModule
  ]
})
export class UploadUsersModule { }
