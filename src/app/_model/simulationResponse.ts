import {Client} from "./client";

export interface SimulationResponse{
  client:Client;
  id:string;
  typeDeCredit:string;
  montantTotal:number;
  montantTotalAvecInteret:number;
  tauxInteret:number;
  duree:number;
  mensualite:number;
  fraisDeDossier:number;
}
