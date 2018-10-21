import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private jwtservice: JwtService) {}

  ngOnInit() {}

  checkSignIn() {
    if (this.jwtservice.getToken()) return true;
    else return false;
  }
}
