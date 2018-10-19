import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppUrls } from "../Constants";
import { JwtService } from "../services/jwt.service";

@Injectable({
  providedIn: "root"
})
export class SigninService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  makeSignInRequest(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(AppUrls.urlSignIn, body, httpOptions);
  }
}
