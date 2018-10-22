import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtService } from "../services/jwt.service";
import { AppUrls } from "../Constants";

@Injectable({
  providedIn: "root"
})
export class ArticleDetailsService {
  constructor(private http: HttpClient, private jwtService: JwtService) {
  }
  fetchArticleDetails(slug){
    return this.http.get(AppUrls.urlGetArticleDetails+slug)
  }
}
