import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TagdetailsService } from "./tagdetails.service";
import { Items, Article } from "../models/article";
@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"]
})
export class TagsComponent implements OnInit {
  @Input()
  cardItems;
  itemFeeds: Array<Items>;
  @Output()
  tagValueclick = new EventEmitter<{value:string,itemFeedsList:Array<Items>}>();
  constructor(private tagdetailsService: TagdetailsService) {}

  ngOnInit() {}
  popularTags(tag) {
    this.tagdetailsService.makeTagDetailsRequest(tag).subscribe(
      (data: Article) => {
        this.itemFeeds = data.articles;
        this.tagValueclick.emit({value : tag, itemFeedsList : this.itemFeeds });
      },
      error => {
        console.log(error);
      }
    );
  }
}
