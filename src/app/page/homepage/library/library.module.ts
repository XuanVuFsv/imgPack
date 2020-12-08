import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';


const routes: Routes = [
  {
    path: '',
    component: LibraryComponent
  }
];
@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LibraryModule { }
