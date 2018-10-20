import { Component, OnInit } from "@angular/core";
import { FeedService } from "./feed.service";
import { Article, Items, Tags } from "../models/article";
import { JwtService } from "../services/jwt.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  itemFeeds: Array<Items>;
  itemTags: Array<string>;
  itemPages: Array<number>;
  itemTag: string;
  limit: Number = 10;

  constructor(private getFeeds: FeedService, private jwtService: JwtService) {}
  ngOnInit() {
    this.getAllFeeds();
    this.getAllTags();
    if (this.jwtService.getToken()) {
      this.checkUser();
    }
  }
  getAllFeeds(): void {
    this.getFeeds.makeFeedsRequest().subscribe(
      (data: Article) => {
        console.log(data.articles);
        this.itemFeeds = data.articles;
        this.itemPages = Array.from(
          new Array(Math.ceil(+data.articlesCount / +this.limit)),
          (val, index) => index + 1
        );
      },
      error => {
        console.log(error);
      }
    );
  }
  getAllTags() {
    this.getFeeds.makeTagsRequest().subscribe(
      (data: Tags) => {
        this.itemTags = data.tags;
      },
      error => {
        console.log(error);
      }
    );
  }
  clickonList(e) {
    let offset = e * +this.limit;
    this.getFeeds.makeFeedsRequestonPages(offset).subscribe(
      (data: Article) => {
        this.itemFeeds = data.articles;
      },
      error => {
        console.log(error);
      }
    );
  }
  clickonTag(e) {
    this.itemTag = e.value;
    this.itemFeeds = e.itemFeedsList;
  }
  checkUser() {
    this.getFeeds.checkCurrentUserRequest().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
