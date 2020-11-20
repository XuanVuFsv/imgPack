import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('@layouts/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@layouts/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('@layouts/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'accountSettings',
    loadChildren: () => import('@layouts/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
  },
  {
    path: '404',
    loadChildren: () => import('@layouts/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
