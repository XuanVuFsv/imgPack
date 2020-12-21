import { PostModule } from './../../../../components/homepage/post/post.module';
import { ModalImageModule } from './../../../../components/general/modal-image/modal-image.module';
import { ImageModule } from './../../../../components/general/image/image.module';
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
    ImageModule,
    ModalImageModule,
    PostModule,
    RouterModule.forChild(routes)
  ]
})
export class UserImagesModule{}
