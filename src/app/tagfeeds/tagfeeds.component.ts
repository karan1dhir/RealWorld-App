import { Component, OnInit } from "@angular/core";
import { Items } from "../article";
import { FeedService } from "../home/feed.service";
@Component({
  selector: "app-tagfeeds",
  templateUrl: "./tagfeeds.component.html",
  styleUrls: ["./tagfeeds.component.css"]
})
export class TagfeedsComponent implements OnInit {
  ItemTagFeeds: Array<Items>;
  constructor(private feedService: FeedService) {}

  ngOnInit() {
    
  }
}
