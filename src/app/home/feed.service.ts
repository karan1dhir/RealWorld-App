import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {AppUrls} from './../Constants'; 

@Injectable({
  providedIn: "root"
})
export class FeedService {
  
  constructor(private http: HttpClient) {}
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
}
