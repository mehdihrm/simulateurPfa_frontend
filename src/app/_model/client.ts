import {Simulation} from "./simulation";

export interface Client{
  id:number;
  firstName:string;
  lastName:string;
  dateOfBirth:string;
  profession:string;
  email:string;
  phoneNumber:string;
  simulations: Simulation[]
}
