import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading: boolean;
  hasUser: boolean;
  hasError: boolean;
  errorMessage: string;
  userService: UserService;
  user: User;
  @Output('receivedUser') receivedUser: EventEmitter<User>;

  constructor(userService: UserService) { 
    this.hasUser=false;
    this.loading=false;
    this.hasError=false;
    this.userService=userService;
    this.receivedUser=new EventEmitter<User>(true);
  }

  ngOnInit() {
    this.getUser();
  }

  loginUser(){
    this.loading=true;
    this.hasError=false;
    this.userService.loginUser(this.model).subscribe(
      data => {
        if(data['error']){
          this.loading=false;
          this.hasError=true;
          this.errorMessage=data['error'];
        }
        else if (data['hasUser']){
          this.loading=false;
          this.hasUser=true;
          this.user=data['user'];
          this.receivedUser.emit(this.user)
        }
      });
  }

  getUser(){
    this.loading=true;
    this.userService.getUser().subscribe(
      data =>{
        if(data['error']) {
          this.loading=false;
        }
        else if(data['hasUser']){
          this.loading=false;
          this.hasUser=true;
          this.user=data['user'];
          this.receivedUser.emit(this.user);
        }
      }
    )
  }

  

}
