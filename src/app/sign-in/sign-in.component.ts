import { Component, OnInit } from "@angular/core";
import { SigninService } from "./signin.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";
import { Users, UserDetails } from "../models/users";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  userDetails: UserDetails;
  isValid: boolean = false;
  isNull: boolean = false;
  constructor(
    private signInService: SigninService,
    private router: Router,
    private jwtService: JwtService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}
  onSignUpFormSubmit(signinForm: NgForm) {
    let email = signinForm.value.email;
    let password = signinForm.value.password;
    const obj = {
      user: {
        email: email,
        password: password
      }
    };
    if (
      obj.user.email === "" ||
      obj.user.email === null ||
      obj.user.password === "" ||
      obj.user.password === null
    ) {
      this.isNull = true;
      return;
    }
    if (obj != null) {
      this.isNull = false;
    }
    this.signInService.makeSignInRequest(obj).subscribe(
      (data: Users) => {
        console.log(data);
        this.userDetails = data.user;
        this.messageService.sendData(this.userDetails);
        this.jwtService.saveToken(this.userDetails.token);
        this.router.navigateByUrl("/");
      },
      error => {
        this.isValid = true;
        console.log(JSON.stringify(error));
      }
    );
  }
  clearMessage(): void {
    this.messageService.clearData();
  }
}
