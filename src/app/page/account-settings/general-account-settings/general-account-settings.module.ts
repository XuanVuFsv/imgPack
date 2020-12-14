import { UserSettingsService } from './../../../services/user-settings.service';
import { GeneralAccountSettingsComponent } from './general-account-settings.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: GeneralAccountSettingsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserSettingsService]
})
export class GeneralAccountSettingsModule { }
