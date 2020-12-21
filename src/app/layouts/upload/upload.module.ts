import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { NavbarModule } from '@components/general/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  }
]

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes)
  ]
})
export class UploadModule { }
