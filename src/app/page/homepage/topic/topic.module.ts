import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TopicComponent
  }
];
@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopicModule { }
