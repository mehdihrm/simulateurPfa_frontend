import {Component, OnInit} from '@angular/core';
import {Client} from "../../_model/client";
import {ClientService} from "../../_services/client.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
    public clients!: Client[];
    public successMessage !:string;
    selectedClient:Client | null =null;

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
  public onAddClient(addForm:NgForm){
    this.clientService.addClient(addForm.value).subscribe(
      ()=>{
        this.successMessage = 'Client bien ajouté !';
        this.getClients();
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }
  public sendClient(client:Client){
    this.selectedClient = client;
  }

  public onEditClient(editForm:NgForm){
      this.clientService.updateClient(editForm.value).subscribe(
        () =>{
          this.successMessage = "Client bien modifié !";
          this.getClients();
        },
      (error:HttpErrorResponse) =>{
          alert(error.message);
      }
      )
  }

  public onDeleteClient():void{
      // @ts-ignore
    if(confirm("Voulez-vous bien supprimer le client ? "+this.selectedClient.firstName+" "+this.selectedClient.lastName)){
        // @ts-ignore
        this.clientService.deleteClient(this.selectedClient.id).subscribe(
          ()=>{
            this.getClients()
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }
        )
      }
  }
}
