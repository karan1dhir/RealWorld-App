import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppUrls } from "../Constants";
import { JwtService } from "../services/jwt.service";
@Injectable({
  providedIn: "root"
})
export class PostarticleService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  postArticleRequest(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.post(AppUrls.urlPostArticle, body, httpOptions);
  }
  editArticleRequest(body, slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.put(AppUrls.urlArticleComments + slug, body, httpOptions);
  }
}
