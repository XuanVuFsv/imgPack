import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: ProfileComponent,
    children: [
        {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
        },
        {
            path: 'overview',
            loadChildren: () =>
                import('@page/profile/overview/overview.module').then(m => m.OverviewModule)
        },
        {
            path: 'collections',
            loadChildren: () => import('@page/profile/collections/collections.module').then(m => m.CollectionsModule)
        },
        {
            path: 'your-image',
            loadChildren: () => import('@page/profile/your-image/your-image.module').then(m => m.YourImageModule)
        },
        {
            path: 'data-analysis',
            loadChildren: () => import('@page/profile/data-analysis/data-analysis.module').then(m => m.DataAnalysisModule)
        },
        {
            path: 'upload',
            loadChildren: () => import('@page/profile/upload/upload.module').then(m => m.UploadModule)
        },
        {
            path: 'view-collection',
            loadChildren: () => import('@page/profile/view-image-collection/view-image-collection.module')
            .then(m => m.ViewImageCollectionModule)
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
