import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FeedService {

  private tagsInputSubject = new Subject<any>();
  urlFeeds: string =
    "https://conduit.productionready.io/api/articles?limit=10&offset=0";
  urlTags: string = "https://conduit.productionready.io/api/tags";
  urlTagsDetails: string =
    "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=";
  

  constructor(private http: HttpClient) {

  }
  makeFeedsRequest() {
    return this.http.get(this.urlFeeds);
  }
  makeTagsRequest() {
    return this.http.get(this.urlTags);
  }
  makeTagDetailsRequest(data) {
    return this.http.get(this.urlTagsDetails + data);
  }
  getTagDetails(data) {
    this.makeTagDetailsRequest(data);
  }
}
