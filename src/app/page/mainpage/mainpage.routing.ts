import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
const routes: Routes = [{
    path: '',
    component: MainpageComponent,
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'home',
    //         pathMatch: 'full',
    //       },
    //       {
    //         path: 'home',
    //         loadChildren: () => import('@page/test/test.module').then(m => m.TestModule)
    //       }
    //     ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainpageRoutingModule { }
