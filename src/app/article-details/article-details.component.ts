import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleDetailsService } from "./article-details.service";
import { ArticleDetails } from "../models/articleDetail";
import { UserComments, UserComment } from "../models/comments";
@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.css"]
})
export class ArticleDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleDetailsService: ArticleDetailsService
  ) {}
  userComments:Array<UserComment>
  slug: string;
  description: string;
  username: string;
  date: string;
  img: string;
  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params["slug"];
    this.fetchDetails(this.slug);
    this.fetchComments(this.slug)
  }
  fetchDetails(slug) {
    this.articleDetailsService
      .fetchArticleDetails(slug)
      .subscribe((data: ArticleDetails) => {
        this.description = data.article.description;
        this.username = data.article.author.username;
        this.date = data.article.createdAt;
        this.img = data.article.author.image;
      });
  }
  fetchComments(slug){
    this.articleDetailsService.fetchCommentonPost(slug).subscribe((data:UserComments)=>{
      this.userComments = data.comments
    })
  }
  postComment(textarea){
    console.log(textarea.value)
    var commentObj = {
      comment: {
        body: textarea.value
      }
    }
    textarea.value =' '; 
    this.articleDetailsService.articlePost(commentObj,this.slug).subscribe((data)=>{
      console.log(data)
      this.fetchComments(this.slug)
    },
    error=>{
      console.log(error)
    })
  }
}
