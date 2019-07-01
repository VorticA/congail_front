import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'congail-front';
  user: User;
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService=userService;
  }

  ngOnInit(): void {
    this.userService.getUser();
  }
}
