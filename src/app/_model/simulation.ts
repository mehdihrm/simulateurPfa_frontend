import {Client} from "./client";

export interface Simulation{
  id:string;
  client:Client;
  montantCredit:number;
  dureeCredit:number;
  typeDeCredit:string;
  apport:number;
}
