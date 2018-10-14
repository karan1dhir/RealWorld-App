import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FeedService {
  urlFeeds: string = "https://conduit.productionready.io/api/articles";
  urlTags: string = "https://conduit.productionready.io/api/tags";

  constructor(private http: HttpClient) {}

  makeFeedsRequest() {
    return this.http.get(this.urlFeeds);
  }
  makeTagsRequest() {
    return this.http.get(this.urlTags);
  }
}
