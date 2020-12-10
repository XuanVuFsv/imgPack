import { AccountSettingsComponent } from './account-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AccountSettingsComponent,
  children: [
    {
      path: '',
      redirectTo: 'general',
      pathMatch: 'full',
    },
    {
      path: 'general',
      loadChildren: () =>
      import('@page/account-settings/general-account-settings/general-account-settings.module')
      .then(m => m.GeneralAccountSettingsModule)
    },
    {
      path: 'notifications',
      loadChildren: () => import('@page/account-settings/notifications/notifications.module').then(m => m.NotificationsModule)
    },
    {
      path: 'security',
      loadChildren: () => import('@page/account-settings/security/security.module').then(m => m.SecurityModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
