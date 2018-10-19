import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppUrls } from "./../Constants";
import { JwtService } from "../services/jwt.service";

@Injectable({
  providedIn: "root"
})
export class FeedService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  makeFeedsRequest() {
    return this.http.get(AppUrls.urlFeeds);
  }
  makeFeedsRequestonPages(offset) {
    return this.http.get(AppUrls.urlFeedsPages + offset);
  }
  makeTagsRequest() {
    return this.http.get(AppUrls.urlTags);
  }
  makeTagDetailsRequest(data) {
    return this.http.get(AppUrls.urlTagsDetails + data);
  }
  getTagDetails(data) {
    this.makeTagDetailsRequest(data);
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
