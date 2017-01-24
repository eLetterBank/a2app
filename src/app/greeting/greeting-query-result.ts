export class GreetingQueryResult {
  content: string;
  titles: Array<string>;
  constructor() {
    this.content = "";
    this.titles=new Array<string>();
  }
}
