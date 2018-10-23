import { Component, OnInit } from "@angular/core";
import { PostarticleService } from "./postarticle.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-newarticle",
  templateUrl: "./newarticle.component.html",
  styleUrls: ["./newarticle.component.css"]
})
export class NewarticleComponent implements OnInit {
  constructor(
    private postarticleservice: PostarticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  slug: string;
  ngOnInit() {
    if (this.activatedRoute.snapshot.params.hasOwnProperty("slug"))
      this.slug = this.activatedRoute.snapshot.params["slug"];
  }
  submitArticle(form: NgForm) {
    const obj = {
      article: {
        title: form.value.title,
        description: form.value.description,
        body: form.value.body
      }
    };
    console.log(obj);
    if (this.slug) {
      this.postarticleservice
        .editArticleRequest(obj, this.slug)
        .subscribe(data => {
          console.log(data);
        });
      this.router.navigateByUrl("articles/" + this.slug);
    } else {
      this.postarticleservice.postArticleRequest(obj).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl("home");
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
