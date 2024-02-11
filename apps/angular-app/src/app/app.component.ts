import { Component } from '@angular/core';

@Component({
  selector: 'org-root',
  template: '<h1>{{title | appUppercase}}</h1>'
})
export class AppComponent {
  title = 'angular-app';
}
