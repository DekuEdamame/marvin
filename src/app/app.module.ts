import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdCardModule} from '@angular/material';

import { HttpModule, JsonpModule, RequestOptions, Headers  } from '@angular/http';



import {AppMenu} from './menu/app.menu';
import {AppExample} from './example/app.example';
import {AppExample1} from './example1/app.example1';
import {AppServiceA} from './service-a/app.service-a';
import {AppServiceAOne} from './service-a/service-a-one/app.service-a-one';
import {AppServiceATwo} from './service-a/service-a-two/app.service-a-two';
import {routing} from './routes/app.routes';
import { ChartsModule } from 'ng2-charts';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { JwtGenerator } from './jwt-generator/app.jwt-gen';

import {MdInputModule} from '@angular/material';


import {MdProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppMenu,
    AppExample,
    AppExample1,
    AppServiceA,
    AppServiceAOne,
    AppServiceATwo,
    JwtGenerator,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    HttpModule,
    JsonpModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    MdProgressSpinnerModule,
    ChartsModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [
    AppServiceAOne,
    AppServiceATwo
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
