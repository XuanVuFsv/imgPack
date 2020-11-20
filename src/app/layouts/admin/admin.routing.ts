import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  // children: [
  //   {
  //     path: '',
  //     loadChildren: () => import('@routes/admin/song/song.module').then(m => m.SongModule)
  //   },
  //   {
  //     path: 'artist',
  //     loadChildren: () => import('@routes/admin/admin-artist/admin-artist.module').then(m => m.AdminArtistModule)
  //   }
  // ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
