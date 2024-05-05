import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {SimulationRequest} from "../_model/simulationRequest";
import {Observable} from "rxjs";
import {SimulationResponse} from "../_model/simulationResponse";
import {Simulation} from "../_model/simulation";
const SIMULATION_API = 'http://localhost:8084/simulation/'

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization',`Bearer ${this.authService.getToken()}`)
  }

  newSimulation(simRequest:SimulationRequest):Observable<SimulationResponse>{
    return this.http.post<SimulationResponse>(SIMULATION_API+'new',simRequest,this.httpOptions);
  }
  getSimulationDetails(simulation:Simulation):Observable<SimulationResponse>{
    return this.http.post<SimulationResponse>(SIMULATION_API+'simuler',simulation,this.httpOptions);
  }
  getSimulations():Observable<Simulation[]>{
    return this.http.get<Simulation[]>(SIMULATION_API+'all',this.httpOptions);
  }

}
