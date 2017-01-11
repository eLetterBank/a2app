import { Component, OnInit } from '@angular/core';

import { Observable }         from 'rxjs/Observable';

import { Greeting }           from './greeting';
import { GreetingService }    from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {
  //errorMessage: string;
  queryResult: Greeting;

  constructor(private greetingService: GreetingService) { }

  ngOnInit() { this.queryGreeting(); }

  queryGreeting() {
    this.queryResult = new Greeting();
    this.greetingService.getGreeting().then(data=>this.queryResult.data=data);
  }
}
