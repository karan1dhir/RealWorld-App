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
  limit: Number = 10;

  constructor(private getFeeds: FeedService, private jwtService: JwtService) {}
  ngOnInit() {
    this.getAllFeeds();
    this.getAllTags();
    if (this.jwtService.getToken()) {
      console.log("HELLL0000->>>>>>>");
      this.checkUser();
    }
  }
  getAllFeeds(): void {
    this.getFeeds.makeFeedsRequest().subscribe((data: Article) => {
      console.log(data.articles);
      this.itemFeeds = data.articles;
      this.itemPages = Array.from(
        new Array(Math.ceil(+data.articlesCount / +this.limit)),
        (val, index) => index + 1
      );
    });
  }
  getAllTags() {
    this.getFeeds.makeTagsRequest().subscribe((data: Tags) => {
      this.itemTags = data.tags;
    });
  }
  clickonList(e) {
    let offset = e * +this.limit;
    this.getFeeds.makeFeedsRequestonPages(offset).subscribe((data: Article) => {
      this.itemFeeds = data.articles;
    });
  }
  checkUser() {
    console.log("Hello");
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
