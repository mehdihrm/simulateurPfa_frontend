import {ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../_services/auth.service";

@Injectable()
export class AuthorizationGuard{
  constructor(private authService:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if(this.authService.getRole() == route.data['roles']){
        return true;
      }else{
        this.router.navigateByUrl("/home")
        return false;
      }
  }
}
