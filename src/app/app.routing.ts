import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '@components/general/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layouts/client/client.module').then(m => m.ClientModule)
  },
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
    path: 'account-settings',
    loadChildren: () => import('@layouts/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
  },
  {
    path: '404',
    loadChildren: () => import('@layouts/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@layouts/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

const routesSamePage: Routes = [
  {
    path: 'accountSettings/*#',
    component: NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  RouterModule.forRoot(routesSamePage, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
