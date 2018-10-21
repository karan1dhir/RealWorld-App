import { Component, OnInit } from "@angular/core";
import { PostarticleService } from "./postarticle.service";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-newarticle",
  templateUrl: "./newarticle.component.html",
  styleUrls: ["./newarticle.component.css"]
})
export class NewarticleComponent implements OnInit {
  constructor(private postarticleservice: PostarticleService) {}

  ngOnInit() {}
  submitArticle(form: NgForm) {
    const obj = {
      article: {
        title: form.value.title,
        description: form.value.description,
        body: form.value.body
      }
    };
    console.log(obj);
    this.postarticleservice.postArticleRequest(obj).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
