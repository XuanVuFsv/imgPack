import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { NavbarModule } from '@components/general/navbar/navbar.module';
import { HttpClientModule} from '@angular/common/http';
import { ProfileDataService} from '../../services/profile-data.service'

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
    RouterModule.forChild(routes)
  ],
  providers: [ProfileDataService]

})
export class UploadModule { }
