import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {EventBusService} from "../../_shared/event-bus.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router,private authService:AuthService) {}
  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}


