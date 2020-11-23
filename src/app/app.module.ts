import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/general/home/home.component";
import { ContactComponent } from "./modules/general/contact/contact.component";
import { AboutComponent } from "./modules/general/about/about.component";
import {
  GoogleSigninComponent,
  SigninComponent
} from "./modules/general/signin/signin.component";
import { NotFoundComponent } from "./modules/general/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./modules/general/my-counter/my-counter.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent,
    NotFoundComponent,
    MyCounterComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule2 {}
