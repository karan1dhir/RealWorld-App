import { Component, OnInit } from "@angular/core";
import { ProfiledetailsService } from "./profiledetails.service";
import { Users, UserDetails } from "../models/users";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  username: string;
  imgsrc: string;
  bio: string;

  constructor(private profiledetails: ProfiledetailsService) {}

  ngOnInit() {
    this.CurrentUserDetails();
  }
  CurrentUserDetails() {
    this.profiledetails.makeCurrentUserRequest().subscribe((data: Users) => {
      this.imgsrc = data.user.image;
      this.username = data.user.username;
      this.bio = data.user.bio;
    });
  }
}
