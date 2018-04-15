import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../scss/bootstrap.scss']
})
export class AppComponent implements OnInit {
  title = 'TODO';

  constructor() {}

  ngOnInit() {
  }
}
