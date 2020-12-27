import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalCollectionModule } from './../../../components/general/modal-collection/modal-collection.module';
import { CollectionModule } from './../../../components/general/collection/collection.module';
import { CollectionsService } from '../../../services/collections.service';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  }
];

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    CollectionModule,
    ModalCollectionModule,
    RouterModule.forChild(routes)
  ],
  providers: [CollectionsService]
})
export class CollectionsModule { }
