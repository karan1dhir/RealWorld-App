import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtService } from "../services/jwt.service";
import { AppUrls } from "../Constants";
@Injectable({
  providedIn: "root"
})
export class ProfiledetailsService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  makeCurrentUserRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.get(AppUrls.urlGetUser, httpOptions);
  }
}
