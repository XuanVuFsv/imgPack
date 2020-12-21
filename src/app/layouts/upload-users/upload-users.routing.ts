import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadUsersComponent } from './upload-users.component';

const routes: Routes = [{
    path: '',
    component: UploadUsersComponent,
    children: [
        // {
        //   path: 'upload',
        //   loadChildren: () =>
        //   import('@page/account-settings/general-account-settings/general-account-settings.module')
        //   .then(m => m.GeneralAccountSettingsModule)
        // },
        {
            path: 'usersImage/:id',
            loadChildren: () => import('@page/homepage/user-images/user-images/user-images.module').then(m => m.UserImagesModule)
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadUsersRoutingModule { }
