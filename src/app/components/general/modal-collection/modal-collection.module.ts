import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCollectionComponent } from './modal-collection.component';



@NgModule({
  declarations: [ModalCollectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalCollectionComponent
  ]
})
export class ModalCollectionModule { }
