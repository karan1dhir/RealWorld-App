import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleCommentService } from "./article-comment.service";
import { UserComments } from "../models/comments";
import { Users } from "../models/users";

@Component({
  selector: "app-article-comment",
  templateUrl: "./article-comment.component.html",
  styleUrls: ["./article-comment.component.css"]
})
export class ArticleCommentComponent implements OnInit {
  @Input()
  articleComments;
  @Output()
  updatecomments = new EventEmitter();
  slug: string;
  currentUser: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleCommentService: ArticleCommentService
  ) {}

  ngOnInit() {
    this.checkUser()
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
      (data: UserComments) => {
        console.log(data);
        this.updatecomments.emit(data.comments);
      },
      error => {
        console.log(error);
      }
    );
  }
  checkUser() {
    this.articleCommentService.checkCurrentUserRequest().subscribe(
      (data: Users) => {
        this.currentUser = data.user.username;
      },
      error => {
        console.log(error);
      }
    );
  }
}
