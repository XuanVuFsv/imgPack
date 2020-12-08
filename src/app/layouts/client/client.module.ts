import { ClientRoutingModule } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { NavbarModule } from '@components/general/navbar/navbar.module';
import { LeftSidebarModule } from '@components/homepage/left-sidebar/left-sidebar.module';
import { RightSidebarModule } from '@components/homepage/right-sidebar/right-sidebar.module';


@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NavbarModule,
    LeftSidebarModule,
    RightSidebarModule
  ]
})
export class ClientModule { }
