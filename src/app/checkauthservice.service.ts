import { Injectable } from '@angular/core';
import {AuthReturnClass } from 'src/app/CustomClass/auth-return-class';

@Injectable({
  providedIn: 'root'
})
export class CheckauthserviceService {

  constructor() { }

  getAdminToken(){
    return !! localStorage.getItem('sessionUserType');
  }

  getTokenUser(){
    return !! localStorage.getItem('sessionUser');
  }
}
