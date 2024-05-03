import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUser(user: any) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser() {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  clearToken() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem(USER_KEY);
  }
}
