import { UserSettingsService } from './../../../services/user-settings.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [UserSettingsService]
})
export class NavbarModule { }
