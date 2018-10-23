import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleCommentService } from "./article-comment.service";

@Component({
  selector: "app-article-comment",
  templateUrl: "./article-comment.component.html",
  styleUrls: ["./article-comment.component.css"]
})
export class ArticleCommentComponent implements OnInit {
  @Input()
  articleComments;
  slug: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleCommentService: ArticleCommentService
  ) {}

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params["slug"];
    console.log(this.slug);
  }
  removeComment(id) {
    this.articleCommentService.removeCommentRequest(this.slug, id).subscribe(
      data => {
        console.log(data);
        this.fetchComments(this.slug);
      },
      error => {
        console.log(error);
      }
    );
  }
  fetchComments(slug) {
    this.articleCommentService.fetchCommentonPost(slug).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
