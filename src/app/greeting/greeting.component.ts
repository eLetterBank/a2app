import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { GreetingQueryResult } from './greeting-query-result';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {
  queryResult: GreetingQueryResult;

  constructor(private greetingService: GreetingService) { }

  ngOnInit() { this.queryGreeting(); }

  queryGreeting() {
    this.queryResult = new GreetingQueryResult();
    this.greetingService.getGreeting().then(data => this.queryResult.data = data);
  }
}
