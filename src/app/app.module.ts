import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', redirectTo: '/contact-list', pathMatch: 'full'},
  {path: 'contact-list', loadChildren: () => import('./contact-list/contact-list.module').then(module => module.ContactListModule)},
  {path: 'contact', loadChildren: () => import('./contact-edit/contact-edit.module').then(module => module.ContactEditModule)},
  {path: '**', redirectTo: '/contact-list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
