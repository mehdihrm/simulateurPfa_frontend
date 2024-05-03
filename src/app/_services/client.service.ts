import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Client} from "../_model/client";
const CLIENT_API = 'http://localhost:8084/client/'


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient,private authService:AuthService) {
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization',`Bearer ${this.authService.getToken()}`)
  }

  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(CLIENT_API+'get/all',this.httpOptions);
  }

}
