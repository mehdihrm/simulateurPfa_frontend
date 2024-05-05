import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {HomeComponent} from "./component/home/home.component";
import {ClientComponent} from "./component/client/client.component";
import {SimulationComponent} from "./component/simulation/simulation.component";

const routes: Routes = [
  {
    path:'',
  component:LoginComponent},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'simulations',
    component:SimulationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
