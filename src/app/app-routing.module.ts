import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {HomeComponent} from "./component/home/home.component";
import {ClientComponent} from "./component/client/client.component";
import {SimulationComponent} from "./component/simulation/simulation.component";
import {AuthGuard} from "./guards/auth.guard";
import {UserComponent} from "./components/user/user.component";
import {AuthorizationGuard} from "./guards/authorization.guard";

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
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'client',
    component:ClientComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'simulations',
    component:SimulationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'users',
    component:UserComponent,
    canActivate:[AuthGuard,AuthorizationGuard],data : {roles:['ADMIN']}
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
