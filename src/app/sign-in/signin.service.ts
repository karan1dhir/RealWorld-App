import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AppUrls} from '../Constants';

@Injectable({
  providedIn: "root"
})
export class SigninService {
  constructor(private http:HttpClient) {

  }
  makeSignInRequest(body){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(AppUrls.urlSignIn,body,httpOptions);
  }
}
