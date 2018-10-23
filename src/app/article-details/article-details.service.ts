import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtService } from "../services/jwt.service";
import { AppUrls } from "../Constants";

@Injectable({
  providedIn: "root"
})
export class ArticleDetailsService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  fetchArticleDetails(slug) {
    return this.http.get(AppUrls.urlGetArticleDetails + slug);
  }
  fetchCommentonPost(slug) {
    return this.http.get(AppUrls.urlArticleComments + slug + "/comments");
  }
  articlePost(body, slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.post(
      AppUrls.urlArticleComments + slug + "/comments",
      body,
      httpOptions
    );
  }
  removeArticle(slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.delete(AppUrls.urlArticleComments + slug, httpOptions);
  }
  checkCurrentUserRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.get(AppUrls.urlGetUser, httpOptions);
  }
}
