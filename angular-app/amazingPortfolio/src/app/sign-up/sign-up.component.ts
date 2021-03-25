import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpInfo = new FormGroup({
    user : new FormControl(),
    pass : new FormControl()
  })

  message : string = ""

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  signUp() : void {
    
    const signUpUsername : string = this.signUpInfo.get("user")?.value;
    const signUpPassword : string = this.signUpInfo.get("pass")?.value;
    let userObj = {
        name : signUpUsername,
        pass : signUpPassword
    }
    
    
    if(signUpUsername && signUpPassword){
      sessionStorage.setItem("user",JSON.stringify(userObj))
      this.router.navigate(["login"]);
    }else{
      this.message = "Fail to sign up account! Username or Password can't be empty!"
    }
    
  }


}
