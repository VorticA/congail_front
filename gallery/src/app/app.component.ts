import { Component, ViewEncapsulation, ViewChild, SimpleChanges } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  hasUser:boolean;
  user: User;

  constructor() {
    this.hasUser=false;
  }

  ngOnInit(): void {
  }

  gotUser(user: User){
   this.user=user;
   this.hasUser=true;
  }
}
