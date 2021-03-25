import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })

  
  
  message : string = "";
  
  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  login() : void{
    const loginUsername : string = this.loginInfo.get("user")?.value;
    const loginPassword : string = this.loginInfo.get("pass")?.value;
    let user = sessionStorage.getItem("user");
    if(user){
      let userObj = JSON.parse(user);
        if(loginPassword == userObj.pass && loginUsername == userObj.name){
          this.message = "Login success"
          sessionStorage.setItem("login", "true");
          this.router.navigate(["dashboard"])

        }else{
          this.message = "Invalid Username / Password"
        }
    }else{
      this.message = "No account is available";
    }
    
  }

}
