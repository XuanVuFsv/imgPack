import { RouterModule, Routes } from '@angular/router';
import { PostModule } from '@components/homepage/post/post.module';
import { ModalImageModule } from './../../../components/general/modal-image/modal-image.module';
import { ImageModule } from './../../../components/general/image/image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewImageCollectionComponent } from './view-image-collection.component';

const routes: Routes = [
  {
    path: '',
    component: ViewImageCollectionComponent
  }
];

@NgModule({
  declarations: [ViewImageCollectionComponent],
  imports: [
    CommonModule,
    ImageModule,
    ModalImageModule,
    PostModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewImageCollectionModule { }
