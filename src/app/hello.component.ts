import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Home loan EMI calculator in Angular</h1>
  <a target='_blank' href='https://dritalconnect.com/tutorial/Angular'>Full angular tutorial on Dritalconnect.com</a>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
