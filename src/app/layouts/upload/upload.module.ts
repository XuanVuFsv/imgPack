import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { NavbarModule } from '@components/general/navbar/navbar.module';
import { HttpClientModule} from '@angular/common/http';
import { CollectionsService} from '../../services/collections.service'
import { FormsModule} from '@angular/forms'


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
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [CollectionsService]

})
export class UploadModule { }
