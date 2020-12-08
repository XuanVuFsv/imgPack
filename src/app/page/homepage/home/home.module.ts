import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostModule } from '@components/homepage/post/post.module';
import { ModalsModule } from '../../../modals/comment/modals.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostModule,
    ModalsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
