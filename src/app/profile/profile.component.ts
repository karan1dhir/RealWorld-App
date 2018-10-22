import { Component, OnInit } from "@angular/core";
import { ProfiledetailsService } from "./profiledetails.service";
import { Users } from "../models/users";
import {Article,Items} from '../models/article'
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userFeeds: Array<Items>;
  username: string;
  imgsrc: string;
  bio: string;

  constructor(private profiledetails: ProfiledetailsService) {}

  ngOnInit() {
    this.currentUserDetails();
  }
  currentUserDetails() {
    this.profiledetails.makeCurrentUserRequest().subscribe((data: Users) => {
      this.imgsrc = data.user.image;
      this.username = data.user.username;
      this.bio = data.user.bio;
      this.currentUserArticles(this.username);
    });
  }
  currentUserArticles(username:string){
     let name = username.replace(' ','+');
     this.profiledetails.makeCurrentUserArticleRequest(name).subscribe((data:Article)=>{
       this.userFeeds = data.articles;
       console.log(this.userFeeds);
     })
  }
}
