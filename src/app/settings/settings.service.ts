import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {JwtService} from '../services/jwt.service';
import {AppUrls} from '../Constants';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient,private jwtService:JwtService) {

   }
   makeUpdateRequest(body){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Token"+" "+this.jwtService.getToken()
      })
    };
     return this.http.put(AppUrls.urlUpdateUser,body,httpOptions)
   }
}
