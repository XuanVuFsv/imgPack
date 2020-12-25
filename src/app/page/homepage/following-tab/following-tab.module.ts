import { FollowingTabComponent } from './following-tab.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'


const routes: Routes = [
  {
    path: '',
    component: FollowingTabComponent
  }
];

@NgModule({
  declarations: [FollowingTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,

  ]
})
export class FollowingTabModule { }
