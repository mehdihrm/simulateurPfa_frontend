import {Component, OnInit} from '@angular/core';
import {SimulationService} from "../../_services/simulation.service";
import {Simulation} from "../../_model/simulation";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {ClientService} from "../../_services/client.service";
import {Client} from "../../_model/client";
import {SimulationResponse} from "../../_model/simulationResponse";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css'
})
export class SimulationComponent implements OnInit{
  public simulations!: Simulation[];
  public clients!:Client[];
  public selectedSimulation:any = null;
  constructor(private simulationService:SimulationService,private clientService:ClientService) {
  }
  ngOnInit(): void {
    this.getSimulations();
    this.getClients()
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
  public getSimulations(){
    this.simulationService.getSimulations().subscribe(
      (response:Simulation[]) =>{
        this.simulations = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public onAddSimulation(addForm:NgForm){
    this.simulationService.newSimulation(addForm.value).subscribe(
      (response:SimulationResponse)=>{
        this.selectedSimulation = response;
        this.getSimulations();
        const hiddenButton = document.createElement('button');
        hiddenButton.setAttribute('data-bs-toggle', 'modal');
        hiddenButton.setAttribute('data-bs-target', '#simulationDetailsModal');
        hiddenButton.style.display = 'none'; // Cacher le bouton
        document.body.appendChild(hiddenButton);
        hiddenButton.click();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  public openSimulationDetails(simulation:Simulation){
    this.simulationService.getSimulationDetails(simulation).subscribe(
      (response:SimulationResponse)=>{
        this.selectedSimulation = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  onDeleteSimulation(simulation: Simulation) {
    // @ts-ignore
    if(confirm("Voulez-vous bien supprimer la simulation ? "+simulation.typeDeCredit +" d'un montant de "+ simulation.montantCredit + " DH")){
      // @ts-ignore
      this.simulationService.deleteSimulation(simulation.id).subscribe(
        ()=>{
          this.getSimulations()
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )
    }
  }

  onEditSimulation(editForm: NgForm) {
    console.log(editForm.value)
    this.simulationService.updateSimulation(editForm.value).subscribe(
      (response:Simulation)=>{
        this.selectedSimulation = response;
        this.getSimulations();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  selectSimulation(simulation: Simulation) {
    this.selectedSimulation = simulation;
    console.log(simulation)
  }
}
