import { UserImagesComponent } from '@page/homepage/user-images/user-images/user-images.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TopicComponent } from '@page/homepage/topic/topic.component';


const routes: Routes = [{
    path: '',
    component: NavbarComponent,
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
        },
        {
            path: 'topic/:id', component: UserImagesComponent,
            loadChildren: () => import('@page/homepage/topic/topic.module').then(m => m.TopicModule)
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
        NavbarComponent,
        UserImagesComponent,
        TopicComponent]
})
export class UploadUsersRoutingModule { }
