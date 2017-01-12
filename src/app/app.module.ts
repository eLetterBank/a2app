import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GreetingService } from './greeting/greeting.service';

import { LoggerService } from './utils/logger.service';
import { LOGGING_ERROR_HANDLER_PROVIDERS } from "./utils/error-handler";
import { LOGGING_ERROR_HANDLER_OPTIONS } from "./utils/error-handler";

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
    LoggerService,
    // CAUTION: This providers collection overrides the CORE ErrorHandler with our
    // custom version of the service that logs errors to the ErrorLogService.
    LOGGING_ERROR_HANDLER_PROVIDERS,

    // OPTIONAL: By default, our custom LoggingErrorHandler has behavior around
    // rethrowing and / or unwrapping errors. In order to facilitate dependency-
    // injection instead of resorting to the use of a Factory for instantiation,
    // these options can be overridden in the providers collection.
    {
      provide: LOGGING_ERROR_HANDLER_OPTIONS,
      useValue: {
        rethrowError: false,
        unwrapError: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
