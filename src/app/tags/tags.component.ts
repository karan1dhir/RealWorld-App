import { Component, OnInit, Input } from "@angular/core";
import { FeedService } from "../home/feed.service";
@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"]
})
export class TagsComponent implements OnInit {
  @Input()
  cardItems;
  constructor(private feedService: FeedService) {}

  ngOnInit() {}
  popularTags(name) {
    this.feedService.getTagDetails(name);
  }
}
