import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthReturnClass } from './CustomClass/auth-return-class';
import {CheckauthserviceService} from './checkauthservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  router:Router;
  constructor(router:Router, private CheckauthserviceService:CheckauthserviceService ){this.router = router}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // if(AuthReturnClass.msg == true && AuthReturnClass.Usertype == 'User')
     if(!this.CheckauthserviceService.getTokenUser())
      {
        return this.router.navigateByUrl('/404');
      }
      else{
        return this.CheckauthserviceService.getTokenUser();
      }
  }
  
}
