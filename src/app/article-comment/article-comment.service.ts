import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtService } from "../services/jwt.service";
import { AppUrls } from "../Constants";
@Injectable({
  providedIn: "root"
})
export class ArticleCommentService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  removeCommentRequest(slug, id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token" + " " + this.jwtService.getToken()
      })
    };
    return this.http.delete(
      AppUrls.urlArticleComments + slug + "/comments/" + id,
      httpOptions
    );
  }
  fetchCommentonPost(slug) {
    return this.http.get(AppUrls.urlArticleComments + slug + "/comments");
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
