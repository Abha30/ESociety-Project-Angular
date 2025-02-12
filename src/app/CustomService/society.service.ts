import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { CustomHouse } from '../CustomClass/custom-house';
import { CustomSociety } from '../CustomClass/custom-society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  private url:string = "http://localhost:58760/api/Society";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  getSocitey():Observable<CustomSociety[]>{
    return this.http.get<CustomSociety[]>(this.url);
  }

  getbyIdSocitey(id:string):Observable<CustomSociety>{
    return this.http.get<CustomSociety>(this.url+"/"+id);
  }

  putSociety(id:string,s:CustomSociety):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,s,this.httpOptions);
  }

  postSociety(s:CustomSociety):Observable<boolean>{
    return this.http.post<boolean>(this.url,s,this.httpOptions);
  }

}
