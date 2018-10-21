import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import {SettingsService} from './settings.service';
import { UserDetails,Users } from "../models/users";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
 
  userDetails:UserDetails
  constructor(private jwtservice: JwtService, private router: Router,private settingService:SettingsService) {}
  ngOnInit() {}
  logout() {
    console.log("You are logged out");
    this.jwtservice.destroyToken();
    this.router.navigateByUrl("/");
  }
  updateInformation(form:NgForm){
   
     const obj = {
      user:{ 
        email: form.value.email,
        bio: form.value.bio,
        image: form.value.image,
        // username: form.value.username,
        // password: form.value.newpassword
      }
     }
     console.log(obj)
     this.settingService.makeUpdateRequest(obj).subscribe((data:Users)=>{
       this.userDetails = data.user;
     },
     error=>{
       console.log(error)
     })
  }
}
