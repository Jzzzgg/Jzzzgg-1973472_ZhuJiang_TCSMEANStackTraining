import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(){
     let obj = localStorage.getItem("token");
      if(obj!=null){
          return true;
      }else {
          this.router.navigate(["waiting"]);
          return false;
      }
  }
  
}
