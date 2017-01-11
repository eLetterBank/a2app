import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GreetingService }    from './greeting/greeting.service';

import { LoggerService }    from './utils/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GreetingService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
