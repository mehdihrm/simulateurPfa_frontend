import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "./_services/auth.service";
import { EventBusService } from './_shared/event-bus.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  showToolAndSideBar: boolean = true;
  title = 'simbancaire_front';
  userIsLoggedIn:boolean = false;
  eventBusSub?: Subscription;
  constructor(private router:Router,private authService:AuthService,private eventBusService: EventBusService) {
    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        const currentRoute = this.router.url;
        this.showToolAndSideBar = !['/register','/','/404','/login'].includes(currentRoute);
      }
    })
  }

  ngOnInit(): void {
    this.userIsLoggedIn = this.authService.isLoggedIn();


    if (this.userIsLoggedIn) {
      const user = this.authService.getUser();

    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    })
  }
  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
