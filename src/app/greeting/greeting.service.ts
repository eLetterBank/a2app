import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { LoggerService } from '../utils/logger.service';
import { AppSettings } from '../app.settings';
import { GreetingQueryResult } from './greeting-query-result';

@Injectable()
export class GreetingService {

  constructor(private http: Http,
    private logger: LoggerService) { }

  getGreeting(): Promise<string> {

    this.logger.info("GreetingService.getGreeting() - called!");
    this.logger.info("AppSettings.GREETING_API_ENDPOINT -> " + AppSettings.GREETING_API_ENDPOINT);

    return this.http.get(AppSettings.GREETING_API_ENDPOINT)
      .toPromise()
      .then(response => response.json().data);
      //.catch(error => this.logger.error(error)); //Let the global error handler to deal with it 
  }
}
