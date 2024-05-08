import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "./storage.service";

const AUTH_API = 'http://localhost:8084/auth/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        userName,
        password
      },
      { ...httpOptions, observe: 'response' },
    )
  }

  saveToken(token: string) {
    this.storageService.setToken(token);
  }

  getToken() {
    return this.storageService.getToken();
  }

  getUser() {
    return this.storageService.getUser();
  }
  getRole(){
    return this.storageService.getRole();
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    this.storageService.clearToken();
  }

  register(userName: string, password: string, email: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        userName,
        password,
        email
      },
      httpOptions
    )
  }
}
