import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class loginPage {
rootPage:any = "login";
username:string;
password:string;

login(){
console.log("username: "+ this.username);
console.log("password: "+ this.password);
}
  constructor() {}
}

