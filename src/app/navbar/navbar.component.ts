import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",

  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  constructor(private jwtservice: JwtService, private router: Router) {}

  ngOnInit() {}
  logout() {
    console.log("You are logged out");
    this.jwtservice.destroyToken();
    this.router.navigateByUrl("/");
  }
  checkSignIn() {
    if (this.jwtservice.getToken()) return true;
    else return false;
  }
}
