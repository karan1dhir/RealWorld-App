import { Component, OnInit, Input } from "@angular/core";
import { FeedService } from "../home/feed.service";
@Component({
  selector: "app-tagfeeds",
  templateUrl: "./tagfeeds.component.html",
  styleUrls: ["./tagfeeds.component.css"]
})
export class TagfeedsComponent implements OnInit {
  @Input()
  tagItem;
  constructor(private feedService: FeedService) {}

  ngOnInit() {}
}
