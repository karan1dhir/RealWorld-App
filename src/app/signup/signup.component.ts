import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SignupService } from "./signup.service";
import { Users, UserDetails } from "../models/users";
import { Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  userDetails: UserDetails;
  constructor(
    private signupService: SignupService,
    private router: Router,
    private jwtService: JwtService
  ) {}

  ngOnInit() {}
  onSignUpFormSubmit(signupform: NgForm) {
    let username = signupform.value.username;
    let email = signupform.value.email;
    let password = signupform.value.password;

    const obj = {
      user: {
        username: username,
        email: email,
        password: password
      }
    };
    this.signupService.makeSignUpRequest(obj).subscribe(
      (data: Users) => {
        this.userDetails = data.user;
        console.log(this.userDetails);
        this.jwtService.saveToken(this.userDetails.token);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }
}
