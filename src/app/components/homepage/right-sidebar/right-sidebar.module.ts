import { RightSidebarComponent } from './right-sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RightSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RightSidebarComponent
  ]
})
export class RightSidebarModule { }
