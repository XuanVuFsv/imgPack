import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserImagesComponent } from './user-images.component';


const routes: Routes = [
  {
    path: '',
    component: UserImagesComponent
  }
];
@NgModule({
  declarations: [UserImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserImagesModule{}
