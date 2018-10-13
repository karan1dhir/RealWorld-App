import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes:Routes = [
  {path:"",redirectTo: "home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login",component:SignInComponent},
  {path:"register",component:SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
