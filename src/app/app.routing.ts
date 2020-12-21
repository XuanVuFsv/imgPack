import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '@components/general/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@page/mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@layouts/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'page',
    loadChildren: () => import('@page/mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@layouts/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('@layouts/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('@layouts/upload/upload.module').then(m => m.UploadModule)
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
    path: 'users',
    loadChildren: () => import('@layouts/upload-users/upload-users.module').then(m => m.UploadUsersModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }  
];

// const routesSamePage: Routes = [
//   {
//     path: 'accountSettings/*#',
//     component: NavbarComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
