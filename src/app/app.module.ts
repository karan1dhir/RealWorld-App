import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from "./card/card.component";
import { TagsComponent } from "./tags/tags.component";
import { TagfeedsComponent } from "./tagfeeds/tagfeeds.component";
import { FooterComponent } from "./footer/footer.component";
import { ListComponent } from "./list/list.component";
import { FormsModule } from "@angular/forms";
import { SettingsComponent } from "./settings/settings.component";
import { NewarticleComponent } from "./newarticle/newarticle.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: SignInComponent },
  { path: "register", component: SignupComponent },
  { path: "editor", component: NewarticleComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    CardComponent,
    TagsComponent,
    TagfeedsComponent,
    FooterComponent,
    ListComponent,
    SettingsComponent,
    NewarticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
