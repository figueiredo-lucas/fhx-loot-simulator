import { Component } from '@angular/core';
import { Roll } from './shared/roll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rolls: Roll[]

  openModal() {

  }

}
