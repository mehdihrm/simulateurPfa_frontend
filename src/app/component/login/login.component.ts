import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    userName: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(private router:Router,private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {
        if(this.authService.isLoggedIn()){
          this.router.navigate(['/home'])
        }
    }

  onSubmit(): void {
    const { userName, password } = this.form;
    this.authService.login(userName, password).subscribe({
      next: (data: any) => {
        console.log(data);
        this.storageService.setToken(data.body.token);
        this.storageService.setUser(data.body);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        window.location.href = '/home';
      },
      error: err => {
        if (err.status === 401) {
          this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
        } else {
          this.errorMessage = err.error.message;
        }
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
