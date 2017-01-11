import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import { AppSettings }              from '../app.settings';

@Injectable()
export class GreetingService {

  constructor (private http: Http) {}

  getGreeting (): Promise<string> {

      console.log("AppSettings.GREETING_API_ENDPOINT -> " + AppSettings.GREETING_API_ENDPOINT);

      return this.http.get(AppSettings.GREETING_API_ENDPOINT)
                      .toPromise()
                      .then(response => response.json().data)
                      .catch(this.handleError);
    }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('ERROR:' + errMsg);

    return Observable.throw(errMsg);
  }
}
