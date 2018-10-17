import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SignupService } from "./signup.service";
import { User } from "../models/user";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  userObj: User;
  constructor(private signupService: SignupService) {}

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
      (data: User) => {
         console.log(data)
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }
}
