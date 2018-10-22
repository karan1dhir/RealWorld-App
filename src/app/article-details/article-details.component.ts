import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleDetailsService } from "./article-details.service";
import {Article, Items} from '../models/article';
@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.css"]
})
export class ArticleDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,private articleDetailsService:ArticleDetailsService) {}
   
  slug: string;
  itemFeeds: Items;
  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params["slug"];
    this.fetchDetails(this.slug)
  }
  fetchDetails(slug){
    this.articleDetailsService.fetchArticleDetails(slug).subscribe((data:Article)=>{
      
      console.log(data);
    })
  }
}
