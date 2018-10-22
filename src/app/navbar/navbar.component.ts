import { Component, OnInit } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { MessageService } from "../services/message.service";
import { Subscription } from "rxjs";
import { Data, Details } from "../models/details";
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  username: string;
  subscription: Subscription;
  constructor(
    private jwtservice: JwtService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
  }
  checkSignIn() {
    if (this.jwtservice.getToken()) {
      this.subscription = this.messageService
        .getData()
        .subscribe((data: Data) => {
          this.username = data.message.username;
        });
      return true;
    } else return false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
