import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { HttpClientModule } from '@angular/common/http';
import {GetImageService} from '../../../services/get-image.service';
@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PostComponent
  ],
  providers: [GetImageService]
})
export class PostModule { }
