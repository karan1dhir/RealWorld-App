import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {AppUrls} from '../Constants';

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private http: HttpClient) {}

  makeSignUpRequest(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(AppUrls.urlSignUp, body, httpOptions);
  }
}
