import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppUrls } from "../Constants";
@Injectable({
  providedIn: "root"
})
export class TagdetailsService {
  constructor(private http: HttpClient) {}

  makeTagDetailsRequest(data) {
    return this.http.get(AppUrls.urlTagsDetails + data);
  }
}
