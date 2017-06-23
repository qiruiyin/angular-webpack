import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './router';

import { AppComponent } from './app.component';
import { MenuComponent } from '../../components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
