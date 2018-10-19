import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private jwtservice: JwtService, private router: Router) {}

  ngOnInit() {}
  logout() {
    console.log("You are logged out");
    this.jwtservice.destroyToken();
    this.router.navigateByUrl("/");
  }
}
