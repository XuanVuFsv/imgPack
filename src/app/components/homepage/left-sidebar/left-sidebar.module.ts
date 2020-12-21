import { LeftSidebarComponent } from './left-sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LeftSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LeftSidebarComponent
  ]
})
export class LeftSidebarModule { }
