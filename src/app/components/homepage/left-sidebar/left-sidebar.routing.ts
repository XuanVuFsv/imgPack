import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserImagesComponent } from '@page/homepage/user-images/user-images/user-images.component';
import { LeftSidebarComponent } from './left-sidebar.component';


const routes: Routes = [{
    path: '',
    component: LeftSidebarComponent,
    children: [
        // {
        //   path: 'upload',
        //   loadChildren: () =>
        //   import('@page/account-settings/general-account-settings/general-account-settings.module')
        //   .then(m => m.GeneralAccountSettingsModule)
        // },
        {
            path: 'usersImage/:id', component: UserImagesComponent,
            loadChildren: () => import('@page/homepage/user-images/user-images/user-images.module').then(m => m.UserImagesModule)
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
        LeftSidebarComponent,
        UserImagesComponent]
})
export class UploadUsersRoutingModule { }
