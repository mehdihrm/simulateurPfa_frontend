import {ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../_services/auth.service";

@Injectable()
export class AuthGuard{
  constructor(private authService:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if(this.authService.isLoggedIn()){
        return true;
      }else{
        this.router.navigateByUrl("/login")
        return false;
      }
  }
}
