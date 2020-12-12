import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourImageComponent } from './your-image.component';

const routes: Routes = [
  {
    path: '',
    component: YourImageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class YourImageModule { }
