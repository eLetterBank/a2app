import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LoggerService } from '../utils/logger.service';
import { GreetingQueryResult } from './greeting-query-result';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {
  queryResult: GreetingQueryResult;

  constructor(private greetingService: GreetingService,
    private logger: LoggerService) { }

  ngOnInit() { this.queryGreeting(); }

  queryGreeting() {
    this.logger.info("GreetingComponent.queryGreeting() - called!");

    this.queryResult = new GreetingQueryResult();

    /*
    this.greetingService.getGreeting()
      .then(data => {
        this.queryResult.content = data;
        this.logger.debug("Frm COM--->" + this.queryResult.content);
      });
    */

    this.greetingService.getGreeting2()
      .then(qryResult => this.queryResult = qryResult);
  }
}
