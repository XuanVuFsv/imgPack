import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';



@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule
  ], exports: [
    CollectionComponent
  ]
})
export class CollectionModule { }
