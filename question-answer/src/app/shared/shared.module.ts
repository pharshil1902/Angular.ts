import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    RouterModule,
    BreadcrumbComponent,
    CommonModule
  ]
})
export class SharedModule { }
