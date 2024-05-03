import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form:any={
    userName:null,
    email:null,
    password:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router:Router,private authService:AuthService) {
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/home'])
    }
  }
  onSubmit():void{
    const {userName,email,password} = this.form;
    this.authService.register(userName,password,email).subscribe({
      next:data =>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.location.href="/";
      },
      error: err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })
  }

}
