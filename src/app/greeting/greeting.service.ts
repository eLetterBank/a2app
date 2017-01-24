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

  getGreeting2(): Promise<GreetingQueryResult> {

    this.logger.info("GreetingService.getGreeting2() - called!");
    this.logger.info("AppSettings.GREETING_API_ENDPOINT -> " + AppSettings.GREETING_API_ENDPOINT);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let requestUrl = AppSettings.GREETING_API_ENDPOINT + "/greeting?";
    let qry = "name=Tiger&titles=Mr., Dr., Mrs.";

    this.logger.info(requestUrl);
    this.logger.info(requestUrl + qry);

    return this.http.get(requestUrl + qry, options)
      .toPromise()
      .then(response => response.json() as GreetingQueryResult);
  }
}
