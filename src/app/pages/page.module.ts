import { PagesRoutes } from './pages.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './base/navbar/navbar.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PagesComponent,


  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutes

  ]
})
export class PageModule { }
