import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Info } from '../info.moduel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  personalInfo = new FormGroup({
    phone : new FormControl(),
    address : new FormControl()
  })

  userInfo : Info[] = [];

  loginString : (string|null) = sessionStorage.getItem("login");
  status : boolean  = false;
  phone : string = "";
  address : string = "";


  constructor(public router : Router) { }

  ngOnInit(): void {
    if(this.loginString == "true"){
      this.status = true;
    }
  }

  logout(){
    sessionStorage.setItem("login", "false");
    this.router.navigate(["login"]);
  } 

  add(){
    const obj = {
      phone : this.personalInfo.get("phone")?.value,
      address : this.personalInfo.get("address")?.value
    }
    this.userInfo.push(obj);
    
  }

 

}
