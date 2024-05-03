import {Component, OnInit} from '@angular/core';
import {Client} from "../../_model/client";
import {ClientService} from "../../_services/client.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
    public clients!: Client[];

    constructor(private clientService:ClientService) {

    }

  ngOnInit(): void {
      this.getClients();
  }
  public getClients():void{
      this.clientService.getAllClients().subscribe(
        (response:Client[]) =>{
          this.clients = response;
        },
        (error:HttpErrorResponse) =>{
          alert(error.message);
        }
      )
  }
}
