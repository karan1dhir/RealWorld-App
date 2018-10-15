import { Component, OnInit } from "@angular/core";
import { FeedService } from "./feed.service";
import { Article, Items, Tags } from "../article";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  itemFeeds: Array<Items>;
  itemTags: Array<string>;

  constructor(private getFeeds: FeedService) {}
  ngOnInit() {
    this.getAllFeeds();
    this.getAllTags();
  }
  getAllFeeds(): void {
    this.getFeeds.makeFeedsRequest().subscribe((data: Article) => {
      console.log(data.articles);
      this.itemFeeds = data.articles;
    });
  }
  getAllTags() {
    this.getFeeds.makeTagsRequest().subscribe((data: Tags) => {
      console.log(data.tags);
      this.itemTags = data.tags;
    });
  }
}
