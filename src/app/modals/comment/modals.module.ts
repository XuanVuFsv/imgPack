import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals.component';



@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalsComponent
  ]
})
export class ModalsModule { }
