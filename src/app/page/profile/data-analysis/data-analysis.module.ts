import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisComponent } from './data-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: DataAnalysisComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DataAnalysisModule { }
