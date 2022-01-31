import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(nameRef:NgForm){
    let login= nameRef.value;
  
    if(login.user=="amol" && login.password=="123"){
      this.msg="Successfully login"
      console.log("good");
   }else {
      this.msg = "Failure try once again"
   }
   
  }
  }


