import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';

import {loginServices} from './pages/login/login.service';
import {AuthGuard} from './pages/auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    CalendarModule.forRoot(),
    routing
  ],
  providers: [ AppSettings , AuthGuard, loginServices],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
