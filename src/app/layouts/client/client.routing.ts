import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'test',
      loadChildren: () => import('@page/test/test.module').then(m => m.TestModule)
    },
    {
      path: 'home',
      loadChildren: () => import('@page/homepage/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'following-tab',
      loadChildren: () => import('@page/homepage/following-tab/following-tab.module').then(m => m.FollowingTabModule)
    },
    {
      path: 'library',
      loadChildren: () => import('@page/homepage/library/library.module').then(m => m.LibraryModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
