import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  constructor(private jwtservice: JwtService, private router: Router) {}

  ngOnInit() {}
  logout() {
    console.log("You are logged out");
    this.jwtservice.destroyToken();
    this.router.navigateByUrl("/");
  }
}
